const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

// Input validation helpers
const ALLOWED_ACTIONS = new Set(["autocomplete", "reviews"]);
const PLACE_ID_RE = /^[A-Za-z0-9_-]{1,255}$/;

function validateBody(body: unknown):
  | { ok: true; action: "autocomplete"; input: string }
  | { ok: true; action: "reviews"; placeId: string }
  | { ok: false } {
  if (!body || typeof body !== "object") return { ok: false };
  const b = body as Record<string, unknown>;
  const action = typeof b.action === "string" ? b.action : "";
  if (!ALLOWED_ACTIONS.has(action)) return { ok: false };

  if (action === "autocomplete") {
    const input = typeof b.input === "string" ? b.input.trim() : "";
    if (input.length < 3 || input.length > 200) return { ok: false };
    return { ok: true, action: "autocomplete", input };
  }
  // reviews
  const placeId = typeof b.placeId === "string" ? b.placeId.trim() : "";
  if (!PLACE_ID_RE.test(placeId)) return { ok: false };
  return { ok: true, action: "reviews", placeId };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("GOOGLE_MAPS_API_KEY");
    if (!apiKey) {
      console.error("[CONFIG] GOOGLE_MAPS_API_KEY missing");
      return json({ error: "Service temporarily unavailable" }, 503);
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return json({ error: "Invalid request" }, 400);
    }

    const validated = validateBody(body);
    if (!validated.ok) {
      return json({ error: "Invalid request parameters" }, 400);
    }

    if (validated.action === "reviews") {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(validated.placeId)}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.status !== "OK") {
        console.error("[GOOGLE_API] reviews error:", data.status, data.error_message);
        return json({ error: "Unable to fetch reviews. Please try again." }, 400);
      }

      const reviews = (data.result?.reviews || [])
        .filter((review: { rating: number }) => review.rating >= 4)
        .map((review: {
          author_name: string;
          rating: number;
          text: string;
          relative_time_description: string;
          profile_photo_url: string;
          time: number;
        }) => ({
          name: review.author_name,
          rating: review.rating,
          text: review.text,
          date: review.relative_time_description,
          avatar: review.profile_photo_url || "",
          time: review.time,
        }));

      return json({
        reviews,
        overallRating: data.result?.rating || 0,
        totalReviews: data.result?.user_ratings_total || 0,
      });
    }

    // autocomplete
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(validated.input)}&types=address&components=country:de&language=de&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK" && data.status !== "ZERO_RESULTS") {
      console.error("[GOOGLE_API] autocomplete error:", data.status, data.error_message);
      return json({ error: "Unable to fetch suggestions. Please try again.", predictions: [] }, 400);
    }

    const predictions = (data.predictions || []).map(
      (pred: { description: string; place_id: string }) => ({
        description: pred.description,
        placeId: pred.place_id,
      }),
    );

    return json({ predictions });
  } catch (error) {
    console.error("[ERROR] google-places:", error instanceof Error ? error.message : "Unknown");
    return json({ error: "An error occurred processing your request" }, 500);
  }
});
