import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Target, Award, Heart, Globe } from "lucide-react";

export default function About() {
  const values = [
    { 
      title: "Solidarité", 
      description: "Nous croyons en la force du collectif et de l'entraide",
      icon: Heart,
      color: "text-red-500"
    },
    { 
      title: "Leadership", 
      description: "Développer les capacités de direction et d'influence positive",
      icon: Target,
      color: "text-primary"
    },
    { 
      title: "Paix", 
      description: "Promouvoir la cohésion sociale et la résolution pacifique des conflits",
      icon: Globe,
      color: "text-accent"
    },
    { 
      title: "Développement durable", 
      description: "Œuvrer pour un avenir respectueux de l'environnement et des générations futures",
      icon: Users,
      color: "text-secondary"
    }
  ];

  const timeline = [
    {
      year: "2017",
      title: "Création de FELD ASBL",
      description: "Fondation officielle le 7 août 2017 à Kinshasa avec une vision claire : promouvoir le leadership féminin en RDC."
    },
    {
      year: "2018-2019",
      title: "Premiers programmes",
      description: "Lancement des premiers programmes de formation en leadership et entrepreneuriat pour les femmes de Kinshasa."
    },
    {
      year: "2020-2021",
      title: "Expansion nationale",
      description: "Extension des activités à plusieurs provinces de la RDC avec des partenariats locaux stratégiques."
    },
    {
      year: "2022-2023",
      title: "Reconnaissance internationale",
      description: "Établissement de partenariats avec des organisations internationales et obtention de financements majeurs."
    },
    {
      year: "2024-2025",
      title: "Vision 2030",
      description: "Lancement du plan stratégique 2024-2030 pour toucher 10,000 femmes à travers le pays."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">À Propos de FELD ASBL</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre histoire, notre mission et les valeurs qui nous animent 
              depuis notre création en 2017
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/21771e6a-d9f1-45e9-82cc-4fb8ed10c065.png" 
                alt="FELD ASBL Logo" 
                className="w-full max-w-md mx-auto hover-lift rounded-xl"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Notre Identité</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Femmes Engagées pour le Leadership et le Développement (FELD ASBL) est une 
                organisation apolitique à but non lucratif, créée le 7 août 2017 à Kinshasa. 
                Nous œuvrons pour la promotion du leadership féminin, la paix, la solidarité 
                et le développement durable en République Démocratique du Congo.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span><strong>Fondée :</strong> 7 août 2017</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-secondary" />
                  <span><strong>Statut :</strong> Association apolitique à but non lucratif</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-accent" />
                  <span><strong>Zone d'action :</strong> République Démocratique du Congo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full gradient-gold text-white mr-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Notre Mission</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Promouvoir le leadership féminin, renforcer les capacités des femmes 
                  et contribuer au développement durable de la République Démocratique 
                  du Congo à travers des programmes innovants d'éducation, de formation 
                  et d'accompagnement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full gradient-blue text-white mr-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Notre Vision</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Être une organisation de référence dans la promotion du leadership 
                  féminin en Afrique centrale, contribuant à l'émergence d'une société 
                  plus équitable, pacifique et prospère où chaque femme peut réaliser 
                  son plein potentiel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Nos Valeurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes fondamentaux qui guident notre action et définissent notre identité
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover-lift animate-scale-in">
                <CardContent className="p-6">
                  <value.icon className={`h-12 w-12 mx-auto mb-4 ${value.color}`} />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Notre Histoire</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un parcours de 8 années d'engagement et d'impact au service des femmes congolaises
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-lg hover-lift">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-3">{item.year}</Badge>
                        <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Distinction */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Ce Qui Nous Distingue</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="p-4 rounded-full gradient-gold text-white w-fit mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Approche Apolitique</h3>
                <p className="text-muted-foreground">
                  Notre neutralité politique nous permet de rassembler toutes les femmes 
                  autour d'objectifs communs de développement.
                </p>
              </div>
              
              <div className="text-center">
                <div className="p-4 rounded-full gradient-green text-white w-fit mx-auto mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Focus Leadership</h3>
                <p className="text-muted-foreground">
                  Spécialisées dans le développement des capacités de leadership 
                  et d'autonomisation des femmes congolaises.
                </p>
              </div>
              
              <div className="text-center">
                <div className="p-4 rounded-full gradient-blue text-white w-fit mx-auto mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Impact Durable</h3>
                <p className="text-muted-foreground">
                  Nos programmes visent un changement profond et durable 
                  pour les générations actuelles et futures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}