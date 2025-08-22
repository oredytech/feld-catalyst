import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Users, Target, Globe, CreditCard, Smartphone, DollarSign, Euro, Check, Gift, Handshake } from "lucide-react";

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");

  const donationOptions = [
    { amount: 25, description: "Forme une femme en entrepreneuriat" },
    { amount: 50, description: "Soutient un microcrédit pour une coopérative" },
    { amount: 100, description: "Finance une formation en leadership" },
    { amount: 250, description: "Équipe un jardin communautaire" },
    { amount: 500, description: "Soutient un projet complet sur 6 mois" },
    { amount: 1000, description: "Parraine une formation complète de 50 femmes" }
  ];

  const impactStats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Femmes formées",
      description: "depuis 2017"
    },
    {
      icon: Target,
      number: "150",
      label: "Projets réalisés",
      description: "dans 8 provinces"
    },
    {
      icon: Globe,
      number: "50",
      label: "Coopératives créées",
      description: "par nos bénéficiaires"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Taux de satisfaction",
      description: "des bénéficiaires"
    }
  ];

  const projects = [
    {
      title: "Autonomisation Économique - Kinshasa",
      description: "Formation de 200 femmes en entrepreneuriat et microfinance",
      needed: 50000,
      raised: 32000,
      supporters: 156,
      image: "/placeholder.svg"
    },
    {
      title: "Éducation et Leadership - Nord-Kivu",
      description: "Sensibilisation à la paix et formation en leadership",
      needed: 75000,
      raised: 58000,
      supporters: 203,
      image: "/placeholder.svg"
    },
    {
      title: "Agriculture Durable - Bandundu",
      description: "Formation en techniques agricoles et jardins communautaires",
      needed: 60000,
      raised: 25000,
      supporters: 98,
      image: "/placeholder.svg"
    }
  ];

  const partnershipLevels = [
    {
      name: "Ami de FELD",
      amount: "10-49 USD/mois",
      benefits: ["Newsletter mensuelle", "Rapport d'impact annuel", "Certificat de soutien"],
      icon: Heart,
      color: "bg-blue-500"
    },
    {
      name: "Partenaire Bronze",
      amount: "50-99 USD/mois",
      benefits: ["Tous les avantages précédents", "Visite virtuelle des projets", "Appel trimestriel avec l'équipe"],
      icon: Gift,
      color: "bg-orange-500"
    },
    {
      name: "Partenaire Argent",
      amount: "100-249 USD/mois",
      benefits: ["Tous les avantages précédents", "Invitation aux événements", "Rapport trimestriel personnalisé"],
      icon: Target,
      color: "bg-gray-400"
    },
    {
      name: "Partenaire Or",
      amount: "250+ USD/mois",
      benefits: ["Tous les avantages précédents", "Visite de terrain", "Projet dédié", "Reconnaissance publique"],
      icon: Handshake,
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Soutenez FELD ASBL
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Votre don nous permet de continuer à autonomiser les femmes congolaises 
            et à construire un avenir plus équitable pour tous.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center animate-fade-in bg-card border-border shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.number}
                </div>
                <div className="font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="donate" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="donate">Faire un don</TabsTrigger>
            <TabsTrigger value="projects">Projets à soutenir</TabsTrigger>
            <TabsTrigger value="partnership">Partenariat</TabsTrigger>
          </TabsList>

          {/* Donation Tab */}
          <TabsContent value="donate" className="space-y-8">
            <Card className="animate-fade-in bg-card border-border shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Choisissez votre contribution</CardTitle>
                <CardDescription>
                  Chaque don, aussi petit soit-il, fait la différence dans la vie des femmes que nous accompagnons.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Donation Type */}
                <div className="flex justify-center space-x-4">
                  <Button 
                    variant={donationType === "one-time" ? "default" : "outline"}
                    onClick={() => setDonationType("one-time")}
                  >
                    Don unique
                  </Button>
                  <Button 
                    variant={donationType === "monthly" ? "default" : "outline"}
                    onClick={() => setDonationType("monthly")}
                  >
                    Don mensuel
                  </Button>
                </div>

                {/* Preset Amounts */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {donationOptions.map((option, index) => (
                    <Card 
                      key={index} 
                      className={`cursor-pointer transition-all hover-scale ${donationAmount === option.amount.toString() ? 'ring-2 ring-primary' : ''}`}
                      onClick={() => setDonationAmount(option.amount.toString())}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary mb-2">
                          ${option.amount}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {option.description}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="space-y-2">
                  <Label htmlFor="custom-amount">Montant personnalisé</Label>
                  <div className="flex">
                    <Select>
                      <SelectTrigger className="w-20">
                        <SelectValue placeholder="$" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">$ USD</SelectItem>
                        <SelectItem value="eur">€ EUR</SelectItem>
                        <SelectItem value="cdf">FC CDF</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input 
                      id="custom-amount"
                      type="number" 
                      placeholder="Entrez un montant"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      className="flex-1 ml-2"
                    />
                  </div>
                </div>

                {/* Donor Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="donor-name">Nom complet</Label>
                    <Input id="donor-name" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="donor-email">Email</Label>
                    <Input id="donor-email" type="email" placeholder="votre.email@exemple.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="donor-message">Message (optionnel)</Label>
                  <Textarea 
                    id="donor-message" 
                    placeholder="Partagez votre motivation ou laissez un message d'encouragement..."
                    rows={3}
                  />
                </div>

                {/* Payment Methods */}
                <div className="space-y-4">
                  <Label>Méthode de paiement</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-16 flex flex-col">
                      <CreditCard className="h-6 w-6 mb-1" />
                      <span className="text-sm">Carte bancaire</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex flex-col">
                      <Smartphone className="h-6 w-6 mb-1" />
                      <span className="text-sm">Mobile Money</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex flex-col">
                      <Globe className="h-6 w-6 mb-1" />
                      <span className="text-sm">PayPal</span>
                    </Button>
                  </div>
                </div>

                <Button size="lg" className="w-full gradient-gold text-lg py-6">
                  <Heart className="h-5 w-5 mr-2" />
                  Faire un don de ${donationAmount || '0'}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 inline mr-1" />
                  Votre don est sécurisé et vous recevrez un reçu fiscal
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Projets à soutenir</h2>
              <p className="text-muted-foreground">
                Choisissez un projet spécifique qui vous tient à cœur
              </p>
            </div>

            <div className="grid gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden animate-fade-in bg-card border-border shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <CardHeader className="p-0">
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-base">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-0 mt-4">
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span>Objectif: ${project.needed.toLocaleString()}</span>
                            <span>Collecté: ${project.raised.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(project.raised / project.needed) * 100}%` }}
                            ></div>
                          </div>
                          <div className="text-sm text-muted-foreground mt-2">
                            {project.supporters} donateurs • {Math.round((project.raised / project.needed) * 100)}% atteint
                          </div>
                        </div>
                        
                        <Button className="w-full md:w-auto">
                          Soutenir ce projet
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Partnership Tab */}
          <TabsContent value="partnership" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Devenez partenaire</h2>
              <p className="text-muted-foreground">
                Engagez-vous durablement à nos côtés avec un partenariat mensuel
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {partnershipLevels.map((level, index) => (
                <Card key={index} className="animate-fade-in hover-scale bg-card border-border shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full ${level.color} text-white mr-4`}>
                        <level.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{level.name}</CardTitle>
                        <CardDescription className="text-lg font-semibold">
                          {level.amount}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {level.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full">
                      Devenir {level.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Trust Indicators */}
        <div className="mt-16 p-8 rounded-lg bg-muted/20 border border-border text-center">
          <h3 className="text-2xl font-bold mb-6">Pourquoi faire confiance à FELD ?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Transparence totale</h4>
              <p className="text-sm text-muted-foreground">
                Rapports financiers publics et suivi en temps réel de l'impact de vos dons
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Impact mesurable</h4>
              <p className="text-sm text-muted-foreground">
                Chaque don est traçable et son impact sur les bénéficiaires est documenté
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">7 ans d'expérience</h4>
              <p className="text-sm text-muted-foreground">
                Une organisation reconnue avec un historique prouvé de réussite
              </p>
            </div>
          </div>
        </div>

        {/* Contact for Large Donations */}
        <div className="mt-16 text-center p-8 rounded-lg bg-primary/10 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Don important ou partenariat stratégique ?</h3>
          <p className="text-muted-foreground mb-6">
            Pour les dons de plus de 1000$ ou les partenariats entreprises, contactez directement notre équipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              Appeler : +243 859 995 800
            </Button>
            <Button size="lg" className="gradient-gold">
              Email : contact@feld-rdc.org
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}