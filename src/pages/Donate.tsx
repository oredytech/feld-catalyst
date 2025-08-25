import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, CreditCard, Smartphone, Building, Users, Target, Globe, Shield } from "lucide-react";

export default function Donate() {
  const donationAmounts = [25, 50, 100, 250, 500, 1000];
  
  const impactAreas = [
    {
      icon: Users,
      title: "Formation Leadership",
      description: "Former 50 femmes leaders avec 250$",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Microcrédits",
      description: "Financer 10 micros entreprises avec 500$",
      color: "text-secondary"
    },
    {
      icon: Globe,
      title: "Éducation",
      description: "Scolariser 20 enfants pendant 1 mois avec 100$",
      color: "text-accent"
    },
    {
      icon: Heart,
      title: "Santé communautaire",
      description: "Campagne de sensibilisation avec 150$",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Faire un Don</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Votre générosité contribue directement à l'autonomisation des femmes congolaises 
              et au développement durable de la RDC. Chaque don, petit ou grand, fait la différence.
            </p>
            <div className="flex items-center justify-center space-x-4 text-primary">
              <Heart className="h-8 w-8" />
              <span className="text-lg font-semibold">Ensemble, transformons des vies</span>
              <Heart className="h-8 w-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Votre Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez comment votre don peut transformer concrètement la vie des femmes et communautés
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover-lift animate-scale-in rounded-xl">
                <CardContent className="p-6">
                  <area.icon className={`h-12 w-12 mx-auto mb-4 ${area.color}`} />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Quick Donation Amounts */}
            <div className="animate-fade-in">
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Montant du don</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    {donationAmounts.map((amount) => (
                     <Button
                        key={amount}
                        variant="outline"
                        className="h-16 text-lg hover-lift rounded-xl border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  
                  <div>
                    <Label htmlFor="customAmount">Montant personnalisé (USD)</Label>
                    <Input 
                      id="customAmount" 
                      type="number" 
                      placeholder="Entrez le montant" 
                      className="mt-1 text-lg rounded-xl"
                    />
                  </div>

                  <div>
                    <Label htmlFor="donationType">Type de don</Label>
                    <Select>
                      <SelectTrigger className="mt-1 rounded-xl">
                        <SelectValue placeholder="Choisissez le type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="unique">Don unique</SelectItem>
                        <SelectItem value="monthly">Don mensuel</SelectItem>
                        <SelectItem value="quarterly">Don trimestriel</SelectItem>
                        <SelectItem value="annual">Don annuel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="purpose">Destination du don</Label>
                    <Select>
                      <SelectTrigger className="mt-1 rounded-xl">
                        <SelectValue placeholder="Choisissez un programme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Fonds général</SelectItem>
                        <SelectItem value="leadership">Formation Leadership</SelectItem>
                        <SelectItem value="microcredit">Microcrédits</SelectItem>
                        <SelectItem value="education">Éducation</SelectItem>
                        <SelectItem value="health">Santé</SelectItem>
                        <SelectItem value="agriculture">Agriculture durable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Methods */}
            <div className="animate-slide-in-right">
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Méthodes de paiement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Mobile Money */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center">
                      <Smartphone className="h-5 w-5 mr-2 text-primary" />
                      Mobile Money
                    </h3>
                    <div className="grid gap-3">
                      <Button variant="outline" className="justify-start h-12 hover-lift rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                            O
                          </div>
                          <span>Orange Money: +243 995 021 267</span>
                        </div>
                      </Button>
                      <Button variant="outline" className="justify-start h-12 hover-lift rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                            M
                          </div>
                          <span>M-Pesa: +243 997 713 286</span>
                        </div>
                      </Button>
                      <Button variant="outline" className="justify-start h-12 hover-lift rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-yellow-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                            A
                          </div>
                          <span>Airtel Money: +243 999 147 627</span>
                        </div>
                      </Button>
                    </div>
                  </div>

                  {/* Bank Transfer */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center">
                      <Building className="h-5 w-5 mr-2 text-primary" />
                      Virement bancaire
                    </h3>
                    <div className="bg-muted p-4 rounded-xl space-y-2 text-sm">
                      <div><strong>Banque:</strong> Equity Bank Congo</div>
                      <div><strong>Nom du compte:</strong> FELD ASBL</div>
                      <div><strong>Numéro de compte:</strong> 0012345678</div>
                      <div><strong>Code SWIFT:</strong> EQBLCDKI</div>
                    </div>
                  </div>

                  {/* International Donations */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-primary" />
                      Dons internationaux
                    </h3>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 hover:shadow-lg hover:scale-105 transition-all duration-300 h-12 rounded-xl">
                      💳 Donner par carte bancaire
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Paiement sécurisé avec Stripe
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Donor Information Form */}
          <Card className="mt-8 border-0 shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Informations du donateur</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="donorFirstName">Prénom *</Label>
                  <Input id="donorFirstName" placeholder="Votre prénom" className="mt-1 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="donorLastName">Nom *</Label>
                  <Input id="donorLastName" placeholder="Votre nom" className="mt-1 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="donorEmail">Email *</Label>
                  <Input id="donorEmail" type="email" placeholder="votre.email@exemple.com" className="mt-1 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="donorPhone">Téléphone</Label>
                  <Input id="donorPhone" placeholder="+243 XXX XXX XXX" className="mt-1 rounded-xl" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="donorAddress">Adresse</Label>
                  <Input id="donorAddress" placeholder="Votre adresse complète" className="mt-1 rounded-xl" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="donorMessage">Message (optionnel)</Label>
                  <Textarea 
                    id="donorMessage" 
                    placeholder="Un message d'encouragement ou des remarques..." 
                    className="mt-1 rounded-xl" 
                  />
                </div>
                <div className="md:col-span-2 flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="rounded-xl" />
                  <Label htmlFor="newsletter" className="text-sm">
                    Je souhaite recevoir les actualités de FELD ASBL
                  </Label>
                </div>
                <div className="md:col-span-2">
                  <Button className="w-full bg-secondary text-secondary-foreground border-0 hover:opacity-90 h-12 rounded-xl">
                    Confirmer le don
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-6 text-foreground">Sécurité et Transparence</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vos dons sont traités de manière sécurisée et transparente. FELD ASBL s'engage 
              à utiliser chaque contribution de façon responsable et efficace pour maximiser 
              l'impact sur le terrain.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">🔒 Sécurisé</h4>
                <p className="text-muted-foreground">Toutes les transactions sont cryptées et sécurisées</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">📊 Transparent</h4>
                <p className="text-muted-foreground">Rapports financiers annuels disponibles</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">🎯 Efficace</h4>
                <p className="text-muted-foreground">95% des dons vont directement aux programmes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}