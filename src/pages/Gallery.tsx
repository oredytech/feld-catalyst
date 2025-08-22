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
      title: "Formation en Leadership - Kinshasa 2024",
      description: "Cérémonie de remise de diplômes pour 50 femmes leaders",
      type: "image",
      category: "Formations",
      date: "2024-01-13",
      location: "Kinshasa, RDC",
      participants: 50,
      image: "/placeholder.svg",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
      id: 2,
      title: "Projet Agriculture Durable - Bandundu",
      description: "Visite de terrain dans les jardins communautaires",
      type: "video",
      category: "Projets",
      date: "2024-01-10",
      location: "Bandundu, RDC",
      participants: 30,
      image: "/placeholder.svg",
      duration: "5:30"
    },
    {
      id: 3,
      title: "Journée Internationale de la Femme 2024",
      description: "Célébration et sensibilisation à l'égalité des genres",
      type: "image",
      category: "Événements",
      date: "2024-03-08",
      location: "Kinshasa, RDC",
      participants: 200,
      image: "/placeholder.svg",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
      id: 4,
      title: "Atelier Entrepreneuriat Féminin",
      description: "Formation sur la création et gestion d'entreprise",
      type: "image",
      category: "Formations",
      date: "2024-01-05",
      location: "Goma, Nord-Kivu",
      participants: 40,
      image: "/placeholder.svg",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
      id: 5,
      title: "Documentaire : Femmes Rurales et Développement",
      description: "Témoignages de femmes bénéficiaires de nos programmes",
      type: "video",
      category: "Documentaires",
      date: "2023-12-15",
      location: "Provinces rurales, RDC",
      participants: 15,
      image: "/placeholder.svg",
      duration: "12:45"
    },
    {
      id: 6,
      title: "Partenariat UNICEF - Signature d'accord",
      description: "Signature du partenariat pour l'éducation des jeunes filles",
      type: "image",
      category: "Partenariats",
      date: "2024-01-05",
      location: "Kinshasa, RDC",
      participants: 10,
      image: "/placeholder.svg",
      images: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      id: 7,
      title: "Micro-crédit : Histoires de Réussite",
      description: "Portraits de femmes entrepreneures soutenues par FELD",
      type: "video",
      category: "Témoignages",
      date: "2023-11-20",
      location: "Diverses provinces, RDC",
      participants: 8,
      image: "/placeholder.svg",
      duration: "8:15"
    },
    {
      id: 8,
      title: "Conférence Annuelle FELD 2023",
      description: "Bilan des activités et perspectives d'avenir",
      type: "image",
      category: "Événements",
      date: "2023-12-10",
      location: "Kinshasa, RDC",
      participants: 150,
      image: "/placeholder.svg",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    }
  ];

  const categories = ["Tous", "Formations", "Projets", "Événements", "Documentaires", "Partenariats", "Témoignages"];

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
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Type Badge */}
                <Badge className={`absolute top-4 left-4 ${getCategoryColor(item.category)} text-white border-0`}>
                  {item.category}
                </Badge>

                {/* Video Play Button */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="lg" className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                          <Play className="h-6 w-6 text-white" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                          <div className="text-white text-center">
                            <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                            <p>Lecteur vidéo - {item.duration}</p>
                            <p className="text-sm opacity-75 mt-2">{item.title}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}

                {/* Duration for videos */}
                {item.type === "video" && (
                  <Badge className="absolute bottom-4 right-4 bg-black/70 text-white border-0">
                    {item.duration}
                  </Badge>
                )}

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
                  {item.type === "image" ? (
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
                  ) : (
                    <Button variant="outline" size="sm">
                      Regarder la vidéo
                    </Button>
                  )}
                  
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