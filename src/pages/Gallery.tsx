import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, MapPin, Users, Play, Download, Share2 } from "lucide-react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const galleryItems = [
    {
      id: 1,
      title: "Formation Entrepreneuriat Féminin",
      description: "Femmes bénéficiaires montrant leurs produits artisanaux et sacs tissés",
      type: "image",
      category: "Formations",
      date: "2024-03-15",
      location: "Kinshasa, RDC",
      participants: 25,
      image: "/lovable-uploads/d5049915-f592-46ff-be3b-b7b6c9b1fe9b.png",
      images: ["/lovable-uploads/d5049915-f592-46ff-be3b-b7b6c9b1fe9b.png", "/lovable-uploads/721e3c21-e374-44f2-8a38-1a44f3eeafc2.png"]
    },
    {
      id: 2,
      title: "Équipe FELD ASBL",
      description: "Photo de groupe devant le siège de FELD avec toute l'équipe",
      type: "image",
      category: "Événements",
      date: "2024-02-20",
      location: "Kinshasa, RDC",
      participants: 45,
      image: "/lovable-uploads/457ff5e8-34c7-40b5-b959-c74e910c87d5.png",
      images: ["/lovable-uploads/457ff5e8-34c7-40b5-b959-c74e910c87d5.png"]
    },
    {
      id: 3,
      title: "Célébration Nationale",
      description: "Célébration avec le drapeau congolais lors d'un événement spécial",
      type: "image",
      category: "Événements",
      date: "2024-06-30",
      location: "Kinshasa, RDC",
      participants: 60,
      image: "/lovable-uploads/0db6bbdb-0393-4f30-99ab-65955302de95.png",
      images: ["/lovable-uploads/0db6bbdb-0393-4f30-99ab-65955302de95.png"]
    },
    {
      id: 4,
      title: "Distribution d'Aide Humanitaire",
      description: "Distribution de vivres et matériel aux familles dans le besoin",
      type: "image",
      category: "Projets",
      date: "2024-01-25",
      location: "Province rurale, RDC",
      participants: 200,
      image: "/lovable-uploads/dfa1bba4-c8fe-496a-bce2-eea1defdf7ed.png",
      images: ["/lovable-uploads/dfa1bba4-c8fe-496a-bce2-eea1defdf7ed.png"]
    },
    {
      id: 5,
      title: "Assemblée de Femmes Leaders",
      description: "Grande assemblée de femmes lors d'une conférence de leadership",
      type: "image",
      category: "Formations",
      date: "2024-03-08",
      location: "Kinshasa, RDC",
      participants: 120,
      image: "/lovable-uploads/855507ec-ce73-4654-9d35-20a2767ccd04.png",
      images: ["/lovable-uploads/855507ec-ce73-4654-9d35-20a2767ccd04.png"]
    },
    {
      id: 6,
      title: "Agriculture du Cacao",
      description: "Femmes agricultrices dans les plantations de cacao - formation agriculture durable",
      type: "image",
      category: "Projets",
      date: "2024-04-10",
      location: "Bandundu, RDC",
      participants: 15,
      image: "/lovable-uploads/2e2aad75-7c66-4822-af7e-450285fd3fa5.png",
      images: ["/lovable-uploads/2e2aad75-7c66-4822-af7e-450285fd3fa5.png", "/lovable-uploads/b898c6c8-fe68-4d9f-b434-3ac5407f448d.png"]
    },
    {
      id: 7,
      title: "Formation Technique",
      description: "Atelier de formation technique avec machines à coudre",
      type: "image",
      category: "Formations",
      date: "2024-02-05",
      location: "Goma, Nord-Kivu",
      participants: 20,
      image: "/lovable-uploads/d4c294bd-9977-4b72-a629-907d39e9b12b.png",
      images: ["/lovable-uploads/d4c294bd-9977-4b72-a629-907d39e9b12b.png"]
    },
    {
      id: 8,
      title: "Rassemblement Communautaire",
      description: "Grande mobilisation communautaire pour un projet de développement",
      type: "image",
      category: "Projets",
      date: "2024-05-15",
      location: "Lubumbashi, RDC",
      participants: 300,
      image: "/lovable-uploads/7c146006-a09b-4dad-9b55-ac988cea132f.png",
      images: ["/lovable-uploads/7c146006-a09b-4dad-9b55-ac988cea132f.png"]
    }
  ];

  const categories = ["Tous", "Formations", "Projets", "Événements"];

  const filteredItems = selectedCategory === "Tous" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Formations": "bg-blue-500",
      "Projets": "bg-green-500",
      "Événements": "bg-purple-500",
      "Documentaires": "bg-orange-500",
      "Partenariats": "bg-pink-500",
      "Témoignages": "bg-yellow-500"
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Galerie Multimédia
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez en images et en vidéos nos actions sur le terrain, 
            nos événements et les témoignages de nos bénéficiaires.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button 
              key={category} 
              variant={selectedCategory === category ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="hover-scale"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card key={item.id} className="overflow-hidden hover-scale animate-fade-in bg-card border-border shadow-lg group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
                />
                
                {/* Type Badge */}
                <Badge className={`absolute top-4 left-4 ${getCategoryColor(item.category)} text-white border-0`}>
                  {item.category}
                </Badge>

                {/* Image count for albums */}
                {item.type === "image" && item.images && (
                  <Badge className="absolute bottom-4 right-4 bg-black/70 text-white border-0">
                    {item.images.length} photos
                  </Badge>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="space-y-2 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-2" />
                    {new Date(item.date).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-2" />
                    {item.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-2" />
                    {item.participants} participants
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Voir l'album
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {item.images?.map((img, idx) => (
                          <img 
                            key={idx}
                            src={img} 
                            alt={`${item.title} - ${idx + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-muted-foreground">Photos</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-muted-foreground">Vidéos</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-bold gradient-text mb-2">100+</div>
            <div className="text-muted-foreground">Événements</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl font-bold gradient-text mb-2">7</div>
            <div className="text-muted-foreground">Années d'activité</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 rounded-lg bg-primary/10 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Partagez vos moments FELD</h3>
          <p className="text-muted-foreground mb-6">
            Vous avez participé à un de nos événements ? Partagez vos photos et vidéos avec nous !
          </p>
          <Button size="lg" className="gradient-gold">
            Envoyer vos médias
          </Button>
        </div>
      </div>
    </div>
  );
}