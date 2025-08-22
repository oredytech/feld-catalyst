import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Target, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Autonomisation Économique des Femmes Rurales",
      description: "Programme de formation en entrepreneuriat et microfinance pour les femmes en zone rurale de Kinshasa.",
      status: "En cours",
      startDate: "2023-03-15",
      endDate: "2024-12-31",
      location: "Kinshasa, RDC",
      beneficiaries: 200,
      budget: "50,000 USD",
      partners: ["PNUD", "Ministère du Genre"],
      objectives: [
        "Former 200 femmes en entrepreneuriat",
        "Faciliter l'accès au microcrédit",
        "Créer 50 coopératives féminines"
      ],
      image: "/placeholder.svg",
      category: "Économie"
    },
    {
      id: 2,
      title: "Éducation et Leadership pour la Paix",
      description: "Sensibilisation à la paix et formation en leadership pour les jeunes femmes des zones de conflit.",
      status: "Terminé",
      startDate: "2022-06-01",
      endDate: "2023-05-31",
      location: "Nord-Kivu, RDC",
      beneficiaries: 150,
      budget: "75,000 USD",
      partners: ["UNICEF", "Gouvernement Provincial"],
      objectives: [
        "Sensibiliser 150 jeunes femmes à la paix",
        "Former 50 leaders communautaires",
        "Établir 10 clubs de paix"
      ],
      image: "/placeholder.svg",
      category: "Éducation"
    },
    {
      id: 3,
      title: "Agriculture Durable et Sécurité Alimentaire",
      description: "Formation en techniques agricoles modernes et création de jardins communautaires.",
      status: "Planifié",
      startDate: "2024-04-01",
      endDate: "2025-03-31",
      location: "Bandundu, RDC",
      beneficiaries: 300,
      budget: "60,000 USD",
      partners: ["FAO", "Ministère de l'Agriculture"],
      objectives: [
        "Former 300 femmes en agriculture durable",
        "Créer 20 jardins communautaires",
        "Améliorer la sécurité alimentaire"
      ],
      image: "/placeholder.svg",
      category: "Agriculture"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En cours":
        return "bg-blue-500";
      case "Terminé":
        return "bg-green-500";
      case "Planifié":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Nos Projets et Actions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez nos initiatives concrètes pour l'autonomisation des femmes, 
            le développement durable et la promotion de la paix en RDC.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <Card key={project.id} className="animate-fade-in hover-scale bg-card border-border shadow-lg overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className={`${getStatusColor(project.status)} text-white border-0`}>
                        {project.status}
                      </Badge>
                      <Badge variant="secondary">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(project.startDate).toLocaleDateString('fr-FR')} - {new Date(project.endDate).toLocaleDateString('fr-FR')}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {project.beneficiaries} bénéficiaires
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Target className="h-4 w-4 mr-2" />
                        Budget: {project.budget}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Objectifs principaux :</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {project.objectives.map((objective, idx) => (
                          <li key={idx}>{objective}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Partenaires :</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.partners.map((partner, idx) => (
                          <Badge key={idx} variant="outline">
                            {partner}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full md:w-auto">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Voir les détails
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 rounded-lg bg-primary/10 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Vous avez un projet ?</h3>
          <p className="text-muted-foreground mb-6">
            Contactez-nous pour discuter de votre projet et voir comment nous pouvons collaborer.
          </p>
          <Button size="lg" className="gradient-gold">
            Proposer un projet
          </Button>
        </div>
      </div>
    </div>
  );
}