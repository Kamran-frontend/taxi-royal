import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

interface Prediction {
  description: string;
  placeId: string;
}

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  className?: string;
}

const AddressAutocomplete = ({
  value,
  onChange,
  placeholder,
  required = false,
  className,
}: AddressAutocompleteProps) => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout>();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchPredictions = async (input: string) => {
    if (input.length < 3) {
      setPredictions([]);
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("google-places", {
        body: { action: "autocomplete", input },
      });

      if (error) {
        console.error("Autocomplete error:", error);
        setPredictions([]);
        return;
      }

      setPredictions(data.predictions || []);
    } catch (err) {
      console.error("Failed to fetch predictions:", err);
      setPredictions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setShowSuggestions(true);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      fetchPredictions(newValue);
    }, 300);
  };

  const handleSelectPrediction = (prediction: Prediction) => {
    onChange(prediction.description);
    setPredictions([]);
    setShowSuggestions(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <Input
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={() => value.length >= 3 && setShowSuggestions(true)}
        placeholder={placeholder}
        required={required}
        maxLength={200}
        autoComplete="off"
        className={cn("bg-input border-border rounded-xl h-12", className)}
      />

      {showSuggestions && predictions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-xl shadow-lg overflow-hidden">
          {predictions.map((prediction, index) => (
            <button
              key={prediction.placeId || index}
              type="button"
              onClick={() => handleSelectPrediction(prediction)}
              className="w-full px-4 py-3 text-left text-sm text-foreground hover:bg-accent flex items-center gap-2 transition-colors"
            >
              <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <span className="truncate">{prediction.description}</span>
            </button>
          ))}
        </div>
      )}

      {isLoading && showSuggestions && value.length >= 3 && (
        <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-xl shadow-lg p-3 text-sm text-muted-foreground text-center">
          Loading...
        </div>
      )}
    </div>
  );
};

export default AddressAutocomplete;
