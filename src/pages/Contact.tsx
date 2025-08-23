import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: "12, Avenue de l'Avenir\nQuartier Basoko, Commune Ngaliema\nKinshasa, République Démocratique du Congo",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: "+243 995 021 267\n+243 997 713 286\n+243 999 147 627",
      color: "text-secondary"
    },
    {
      icon: Mail,
      title: "Email",
      details: "feldrdc1@gmail.com",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: "Lundi - Vendredi: 8h00 - 17h00\nSamedi: 8h00 - 12h00",
      color: "text-primary"
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", color: "text-blue-600" },
    { icon: Instagram, label: "Instagram", color: "text-pink-600" },
    { icon: Twitter, label: "Twitter", color: "text-sky-500" },
    { icon: Linkedin, label: "LinkedIn", color: "text-blue-700" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Contactez-Nous</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question, 
              suggestion ou pour rejoindre notre mission.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover-lift animate-scale-in">
                <CardContent className="p-6">
                  <info.icon className={`h-12 w-12 mx-auto mb-4 ${info.color}`} />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{info.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{info.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Envoyez-nous un message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input id="firstName" placeholder="Votre prénom" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input id="lastName" placeholder="Votre nom" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="votre.email@exemple.com" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" placeholder="+243 XXX XXX XXX" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Sujet *</Label>
                      <Input id="subject" placeholder="Objet de votre message" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Votre message..." 
                        className="mt-1 min-h-[120px]" 
                      />
                    </div>
                    
                    <Button className="w-full gradient-gold text-white border-0 hover:opacity-90">
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="animate-slide-in-right space-y-8">
              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Notre Localisation</h3>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 mx-auto mb-2 text-primary" />
                      <p className="text-muted-foreground">Carte interactive</p>
                      <p className="text-sm text-muted-foreground">Quartier Basoko, Kinshasa</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Nous sommes situés dans le quartier Basoko, un quartier dynamique 
                    de la commune de Ngaliema à Kinshasa, facilement accessible par 
                    les transports en commun.
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Suivez-nous</h3>
                  <p className="text-muted-foreground mb-6">
                    Restez connecté avec FELD ASBL sur nos réseaux sociaux pour 
                    suivre nos actualités et événements.
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        className="hover-lift"
                      >
                        <social.icon className={`h-5 w-5 ${social.color}`} />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-20 gradient-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Rejoignez Notre Communauté</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Vous partagez notre vision ? Devenez membre de FELD ASBL et participez 
            activement à la transformation de la société congolaise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="outline" className="bg-white text-accent border-white hover:bg-white/90">
              Formulaire d'adhésion
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Devenir partenaire
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}