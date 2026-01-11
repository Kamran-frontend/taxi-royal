const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("GOOGLE_MAPS_API_KEY");
    if (!apiKey) {
      console.error("GOOGLE_MAPS_API_KEY not found");
      return new Response(
        JSON.stringify({ error: "API key not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { action, placeId, input } = await req.json();
    console.log(`Google Places request: action=${action}, input=${input}, placeId=${placeId}`);

    if (action === "reviews") {
      // Fetch place details with reviews
      if (!placeId) {
        return new Response(
          JSON.stringify({ error: "placeId is required for reviews" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
      console.log("Fetching reviews from Google Places API");
      
      const response = await fetch(url);
      const data = await response.json();
      console.log(`Google Places reviews response status: ${data.status}`);

      if (data.status !== "OK") {
        console.error("Google Places API error:", data);
        return new Response(
          JSON.stringify({ error: data.error_message || "Failed to fetch reviews", status: data.status }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Filter for 4-5 star reviews
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

      return new Response(
        JSON.stringify({
          reviews,
          overallRating: data.result?.rating || 0,
          totalReviews: data.result?.user_ratings_total || 0,
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (action === "autocomplete") {
      // Autocomplete for addresses
      if (!input) {
        return new Response(
          JSON.stringify({ predictions: [] }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&types=address&components=country:de&language=de&key=${apiKey}`;
      console.log("Fetching autocomplete suggestions");
      
      const response = await fetch(url);
      const data = await response.json();
      console.log(`Google Places autocomplete response status: ${data.status}`);

      if (data.status !== "OK" && data.status !== "ZERO_RESULTS") {
        console.error("Google Places API error:", data);
        return new Response(
          JSON.stringify({ error: data.error_message || "Failed to fetch suggestions", predictions: [] }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const predictions = (data.predictions || []).map((pred: { description: string; place_id: string }) => ({
        description: pred.description,
        placeId: pred.place_id,
      }));

      return new Response(
        JSON.stringify({ predictions }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ error: "Invalid action. Use 'reviews' or 'autocomplete'" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in google-places function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
