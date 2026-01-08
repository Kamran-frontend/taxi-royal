import { useState } from "react";
import { format } from "date-fns";
import { de, enUS } from "date-fns/locale";
import { CalendarIcon, Clock, MessageCircle, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

const BookingForm = () => {
  const { t, language } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [persons, setPersons] = useState("");
  const [bags, setBags] = useState("");
  const [notes, setNotes] = useState("");

  const timeSlots = [
    "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
    "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30",
    "22:00", "22:30", "23:00", "23:30", "00:00",
  ];

  const personOptions = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const bagOptions = ["0", "1", "2", "3", "4", "5", "6+"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedDate = date ? format(date, "dd.MM.yyyy") : "";
    
    const message = `Hallo, ich möchte ein Taxi buchen:

    *Name:* ${name.trim()}
    *Telefon:* ${phone.trim()}
    *Abholort:* ${pickup.trim()}
    *Ziel:* ${destination.trim()}
    *Datum:* ${formattedDate}
    *Uhrzeit:* ${time}
    *Personen:* ${persons}
    *Gepäck:* ${bags}
    ${notes.trim() ? `*Anmerkungen:* ${notes.trim()}` : ""}
    
    Vielen Dank!`;
    
    const whatsappUrl = `https://wa.me/491711670001?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

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
                <Input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder={t("booking.pickupPlaceholder")}
                  required
                  maxLength={200}
                  autoComplete="street-address"
                  className="bg-input border-border rounded-xl h-12"
                />
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  {t("booking.destination")} <span className="text-primary">*</span>
                </label>
                <Input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder={t("booking.destinationPlaceholder")}
                  required
                  maxLength={200}
                  autoComplete="off"
                  className="bg-input border-border rounded-xl h-12"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {t("booking.date")} <span className="text-primary">*</span>
                  </label>
                  <Popover>
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
                        onSelect={setDate}
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

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-lg py-7 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                disabled={!name || !phone || !pickup || !destination || !date || !time || !persons}
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                {t("booking.submit")}
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
