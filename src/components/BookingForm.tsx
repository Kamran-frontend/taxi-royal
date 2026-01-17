import { useState } from "react";
import { format } from "date-fns";
import { de, enUS } from "date-fns/locale";
import { CalendarIcon, Clock, MessageCircle, Users, Briefcase, Car, Plane, GraduationCap, Accessibility, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import AddressAutocomplete from "@/components/AddressAutocomplete";
import { getAirportPrice } from "@/components/AirportPricing";
import { cn } from "@/lib/utils";

const BookingForm = () => {
  const { t, language } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState<Date>();
  const [dateOpen, setDateOpen] = useState(false);
  const [time, setTime] = useState("");
  const [persons, setPersons] = useState("");
  const [bags, setBags] = useState("");
  const [notes, setNotes] = useState("");
  
  // New fields
  const [taxiCategory, setTaxiCategory] = useState("");
  const [bookingMethod, setBookingMethod] = useState<"whatsapp" | "email">("whatsapp");
  
  // Rollstuhl sub-options
  const [rollstuhlType, setRollstuhlType] = useState("");
  const [kvApproval, setKvApproval] = useState("");
  const [paymentExempt, setPaymentExempt] = useState("");
  
  // Removed XXL vehicle type - only L available

  const timeSlots = [
    "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
    "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30",
    "22:00", "22:30", "23:00", "23:30", "00:00",
  ];

  const personOptions = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const bagOptions = ["0", "1", "2", "3", "4", "5", "6+"];

  const FRANKFURT_AIRPORT_ADDRESS = "Frankfurt Airport (FRA), Frankfurt am Main, Germany";

  const taxiCategories = [
    { value: "normal", label: t("booking.categoryNormal"), icon: Car },
    { value: "rollstuhl", label: t("booking.categoryRollstuhl"), icon: Accessibility },
    { value: "flughafen", label: t("booking.categoryFlughafen"), icon: Plane },
    { value: "schulfahrt", label: t("booking.categorySchulfahrt"), icon: GraduationCap },
  ];

  const rollstuhlTypes = [
    { value: "sitzend", label: t("booking.rollstuhlSitzend") },
    { value: "tragestuhl", label: t("booking.rollstuhlTragestuhl") },
  ];

  // Calculate airport price if applicable
  const airportPrice = taxiCategory === "flughafen" ? getAirportPrice(pickup) : null;

  // Handle taxi category change
  const handleTaxiCategoryChange = (value: string) => {
    setTaxiCategory(value);
    // Auto-fill Frankfurt Airport as destination for Flughafen category
    if (value === "flughafen") {
      setDestination(FRANKFURT_AIRPORT_ADDRESS);
    } else if (taxiCategory === "flughafen" && destination === FRANKFURT_AIRPORT_ADDRESS) {
      // Clear destination if switching away from Flughafen and destination was auto-filled
      setDestination("");
    }
  };

  const generateMapsLink = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedDate = date ? format(date, "dd.MM.yyyy") : "";
    
    // Build category-specific info
    let categoryInfo = "";
    if (taxiCategory === "rollstuhl") {
      categoryInfo = `
*Rollstuhl-Details:*
→ Typ: ${rollstuhlType === "sitzend" ? "Sitzend" : "Mit Tragestuhl"}
→ KV-Genehmigung: ${kvApproval === "ja" ? "Ja" : "Nein"}
→ Zuzahlungsbefreit: ${paymentExempt === "ja" ? "Ja" : "Nein"}`;
    } else if (taxiCategory === "flughafen" && airportPrice) {
      categoryInfo = `
*Flughafen-Details:*
→ Festpreis: ${airportPrice},- €`;
    }

    const pickupMapsLink = generateMapsLink(pickup.trim());
    const destinationMapsLink = generateMapsLink(destination.trim());
    
    const message = `Hallo, ich möchte ein Taxi buchen:

→ *Kategorie:* ${taxiCategories.find(c => c.value === taxiCategory)?.label || "Normal"}
${categoryInfo}

→ *Name:* ${name.trim()}
→ *Telefon:* ${phone.trim()}
→ *Abholort:* ${pickup.trim()}
   📍 Maps: ${pickupMapsLink}
→ *Ziel:* ${destination.trim()}
   📍 Maps: ${destinationMapsLink}
→ *Datum:* ${formattedDate}
→ *Uhrzeit:* ${time}
→ *Personen:* ${persons}
→ *Gepäck:* ${bags}
${notes.trim() ? `→ *Anmerkungen:* ${notes.trim()}` : ""}

Vielen Dank!`;
    
    if (bookingMethod === "whatsapp") {
      const whatsappUrl = `https://wa.me/491711670001?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    } else {
      const emailSubject = encodeURIComponent("Taxi Buchungsanfrage - MiniTAXI Royal");
      const emailBody = encodeURIComponent(message);
      const emailUrl = `mailto:kamranalifrmrbw@gmail.com?subject=${emailSubject}&body=${emailBody}`;
      window.location.href = emailUrl;
    }
  };

  return (
    <section id="booking" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 tracking-wide">
            <span className="gold-text">{t("booking.title")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("booking.subtitle")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 md:p-10 space-y-6">
              
              {/* Taxi Category */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  {t("booking.category")} <span className="text-primary">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {taxiCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.value}
                        type="button"
                        onClick={() => handleTaxiCategoryChange(category.value)}
                        className={cn(
                          "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200",
                          taxiCategory === category.value
                            ? "border-primary bg-primary/10"
                            : "border-border bg-input hover:border-primary/50"
                        )}
                      >
                        <Icon className={cn(
                          "w-6 h-6",
                          taxiCategory === category.value ? "text-primary" : "text-muted-foreground"
                        )} />
                        <span className={cn(
                          "text-xs font-medium text-center",
                          taxiCategory === category.value ? "text-primary" : "text-foreground"
                        )}>
                          {category.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Rollstuhl Sub-options */}
              {taxiCategory === "rollstuhl" && (
                <div className="space-y-4 p-4 rounded-xl bg-muted/30 border border-border">
                  <h4 className="font-medium text-foreground">{t("booking.rollstuhlDetails")}</h4>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">{t("booking.rollstuhlTyp")}</label>
                    <Select value={rollstuhlType} onValueChange={setRollstuhlType}>
                      <SelectTrigger className="bg-input border-border rounded-xl h-12">
                        <SelectValue placeholder={t("booking.selectOption")} />
                      </SelectTrigger>
                      <SelectContent>
                        {rollstuhlTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">{t("booking.kvApproval")}</label>
                      <RadioGroup value={kvApproval} onValueChange={setKvApproval} className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="ja" id="kv-ja" />
                          <Label htmlFor="kv-ja">{t("booking.yes")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="nein" id="kv-nein" />
                          <Label htmlFor="kv-nein">{t("booking.no")}</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">{t("booking.paymentExempt")}</label>
                      <RadioGroup value={paymentExempt} onValueChange={setPaymentExempt} className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="ja" id="exempt-ja" />
                          <Label htmlFor="exempt-ja">{t("booking.yes")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="nein" id="exempt-nein" />
                          <Label htmlFor="exempt-nein">{t("booking.no")}</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              )}

              {/* Flughafen Price Display */}
              {taxiCategory === "flughafen" && airportPrice && (
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                  <div className="flex items-center gap-3">
                    <Plane className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">
                      {t("booking.fixedPrice")}: <span className="text-primary text-lg">{airportPrice},- €</span>
                    </span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {t("booking.name")} <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("booking.namePlaceholder")}
                    required
                    maxLength={100}
                    autoComplete="name"
                    className="bg-input border-border rounded-xl h-12"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {t("booking.phone")} <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t("booking.phonePlaceholder")}
                    required
                    maxLength={20}
                    autoComplete="tel"
                    className="bg-input border-border rounded-xl h-12"
                  />
                </div>
              </div>

              {/* Pickup */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  {t("booking.pickup")} <span className="text-primary">*</span>
                </label>
                <AddressAutocomplete
                  value={pickup}
                  onChange={setPickup}
                  placeholder={t("booking.pickupPlaceholder")}
                  required
                />
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  {t("booking.destination")} <span className="text-primary">*</span>
                </label>
                <AddressAutocomplete
                  value={destination}
                  onChange={setDestination}
                  placeholder={t("booking.destinationPlaceholder")}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {t("booking.date")} <span className="text-primary">*</span>
                  </label>
                  <Popover open={dateOpen} onOpenChange={setDateOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-input border-border rounded-xl h-12",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP", { locale: language === "de" ? de : enUS }) : t("booking.datePlaceholder")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(selectedDate) => {
                          setDate(selectedDate);
                          setDateOpen(false);
                        }}
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {t("booking.time")} <span className="text-primary">*</span>
                  </label>
                  <Select value={time} onValueChange={setTime} required>
                    <SelectTrigger className="bg-input border-border rounded-xl h-12">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <SelectValue placeholder={t("booking.timePlaceholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot} Uhr
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Persons */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {t("booking.persons")} <span className="text-primary">*</span>
                  </label>
                  <Select value={persons} onValueChange={setPersons} required>
                    <SelectTrigger className="bg-input border-border rounded-xl h-12">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      <SelectValue placeholder={t("booking.personsPlaceholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      {personOptions.map((num) => (
                        <SelectItem key={num} value={num}>
                          {num} {language === "de" ? (num === "1" ? "Person" : "Personen") : (num === "1" ? "Person" : "Persons")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Bags */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {t("booking.bags")}
                  </label>
                  <Select value={bags} onValueChange={setBags}>
                    <SelectTrigger className="bg-input border-border rounded-xl h-12">
                      <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                      <SelectValue placeholder={t("booking.bagsPlaceholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      {bagOptions.map((num) => (
                        <SelectItem key={num} value={num}>
                          {num} {language === "de" ? "Gepäckstück(e)" : "Bag(s)"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  {t("booking.notes")}
                </label>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t("booking.notesPlaceholder")}
                  maxLength={500}
                  className="bg-input border-border min-h-[100px] rounded-xl"
                />
              </div>

              {/* Booking Method Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  {t("booking.bookingMethod")} <span className="text-primary">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setBookingMethod("whatsapp")}
                    className={cn(
                      "flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all duration-200",
                      bookingMethod === "whatsapp"
                        ? "border-whatsapp bg-whatsapp/10"
                        : "border-border bg-input hover:border-whatsapp/50"
                    )}
                  >
                    <MessageCircle className={cn(
                      "w-5 h-5",
                      bookingMethod === "whatsapp" ? "text-whatsapp" : "text-muted-foreground"
                    )} />
                    <span className={cn(
                      "font-medium",
                      bookingMethod === "whatsapp" ? "text-whatsapp" : "text-foreground"
                    )}>
                      WhatsApp
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingMethod("email")}
                    className={cn(
                      "flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all duration-200",
                      bookingMethod === "email"
                        ? "border-primary bg-primary/10"
                        : "border-border bg-input hover:border-primary/50"
                    )}
                  >
                    <Mail className={cn(
                      "w-5 h-5",
                      bookingMethod === "email" ? "text-primary" : "text-muted-foreground"
                    )} />
                    <span className={cn(
                      "font-medium",
                      bookingMethod === "email" ? "text-primary" : "text-foreground"
                    )}>
                      E-Mail
                    </span>
                  </button>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className={cn(
                  "w-full text-lg py-7 rounded-xl transition-all duration-300 hover:scale-[1.02]",
                  bookingMethod === "whatsapp"
                    ? "bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                    : "gold-gradient text-primary-foreground hover:opacity-90"
                )}
                disabled={!name || !phone || !pickup || !destination || !date || !time || !persons || !taxiCategory}
              >
                {bookingMethod === "whatsapp" ? (
                  <MessageCircle className="w-6 h-6 mr-3" />
                ) : (
                  <Mail className="w-6 h-6 mr-3" />
                )}
                {bookingMethod === "whatsapp" ? t("booking.submitWhatsApp") : t("booking.submitEmail")}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                <span className="text-primary">*</span> {t("booking.required")}
              </p>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BookingForm;
