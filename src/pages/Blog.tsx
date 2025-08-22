import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, MessageCircle, Share2, Eye } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "L'autonomisation économique des femmes : Un levier de développement durable",
      excerpt: "Découvrez comment l'autonomisation économique des femmes transforme les communautés rurales en RDC et contribue au développement durable du pays.",
      content: "L'autonomisation économique des femmes est l'un des piliers fondamentaux du développement durable...",
      author: "Marie Mukendi",
      date: "2024-01-15",
      category: "Développement",
      image: "/placeholder.svg",
      readTime: "5 min",
      views: 1250,
      comments: 23,
      tags: ["Autonomisation", "Femmes", "Développement", "RDC"]
    },
    {
      id: 2,
      title: "Formation en leadership : 50 femmes diplômées à Kinshasa",
      excerpt: "FELD ASBL a récemment organisé une cérémonie de remise de diplômes pour 50 femmes ayant suivi notre programme de formation en leadership.",
      content: "Ce samedi 13 janvier 2024, FELD ASBL a organisé une cérémonie émouvante...",
      author: "Josephine Mbuyi",
      date: "2024-01-13",
      category: "Actualités",
      image: "/placeholder.svg",
      readTime: "3 min",
      views: 890,
      comments: 15,
      tags: ["Formation", "Leadership", "Kinshasa", "Cérémonie"]
    },
    {
      id: 3,
      title: "Agriculture durable : Les femmes au cœur de la sécurité alimentaire",
      excerpt: "Comment les femmes congolaises adoptent les techniques d'agriculture durable pour améliorer la sécurité alimentaire de leurs familles.",
      content: "L'agriculture représente plus de 70% de l'activité économique en RDC...",
      author: "Dr. Sarah Kabongo",
      date: "2024-01-10",
      category: "Agriculture",
      image: "/placeholder.svg",
      readTime: "7 min",
      views: 756,
      comments: 18,
      tags: ["Agriculture", "Sécurité alimentaire", "Durabilité"]
    },
    {
      id: 4,
      title: "Journée Internationale de la Femme : Célébration à Kinshasa",
      excerpt: "Retour sur notre célébration de la Journée Internationale de la Femme et les activités organisées pour promouvoir l'égalité des genres.",
      content: "Le 8 mars dernier, FELD ASBL a organisé une série d'activités...",
      author: "Grace Mulumba",
      date: "2024-01-08",
      category: "Événements",
      image: "/placeholder.svg",
      readTime: "4 min",
      views: 1120,
      comments: 31,
      tags: ["Journée de la Femme", "Égalité", "Événement"]
    },
    {
      id: 5,
      title: "Partenariat avec l'UNICEF : Nouveau projet éducatif",
      excerpt: "FELD ASBL annonce un nouveau partenariat avec l'UNICEF pour un projet d'éducation des jeunes filles dans les zones rurales.",
      content: "Nous sommes fiers d'annoncer notre nouveau partenariat...",
      author: "Directrice Exécutive",
      date: "2024-01-05",
      category: "Partenariats",
      image: "/placeholder.svg",
      readTime: "6 min",
      views: 1450,
      comments: 27,
      tags: ["UNICEF", "Partenariat", "Éducation", "Zones rurales"]
    },
    {
      id: 6,
      title: "L'impact des microcrédits sur l'entrepreneuriat féminin",
      excerpt: "Analyse de l'impact de nos programmes de microcrédit sur le développement de l'entrepreneuriat féminin en milieu rural.",
      content: "Depuis le lancement de notre programme de microcrédit...",
      author: "Économiste FELD",
      date: "2024-01-03",
      category: "Économie",
      image: "/placeholder.svg",
      readTime: "8 min",
      views: 923,
      comments: 12,
      tags: ["Microcrédit", "Entrepreneuriat", "Rural", "Impact"]
    }
  ];

  const categories = ["Tous", "Développement", "Actualités", "Agriculture", "Événements", "Partenariats", "Économie"];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Développement": "bg-green-500",
      "Actualités": "bg-blue-500",
      "Agriculture": "bg-orange-500",
      "Événements": "bg-purple-500",
      "Partenariats": "bg-pink-500",
      "Économie": "bg-yellow-500"
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Blog & Actualités
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Suivez nos dernières actualités, découvrez nos réflexions sur le leadership féminin 
            et restez informés de nos actions sur le terrain.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button 
              key={category} 
              variant={index === 0 ? "default" : "outline"} 
              size="sm"
              className="hover-scale"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden animate-fade-in bg-card border-border shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <Badge className={`${getCategoryColor(blogPosts[0].category)} text-white border-0 mb-4`}>
                À la Une
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blogPosts[0].date).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {blogPosts[0].views}
                  </div>
                </div>
                <span>{blogPosts[0].readTime} de lecture</span>
              </div>
              <Button size="lg" className="w-full md:w-auto">
                Lire l'article complet
              </Button>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={post.id} className="overflow-hidden hover-scale animate-fade-in bg-card border-border shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className={`absolute top-4 left-4 ${getCategoryColor(post.category)} text-white border-0`}>
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg leading-tight line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.date).toLocaleDateString('fr-FR')}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {post.views}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      {post.comments}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm">
                    Lire plus
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Charger plus d'articles
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 p-8 rounded-lg bg-primary/10 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4">Restez informé(e)</h3>
          <p className="text-muted-foreground mb-6">
            Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et articles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse e-mail"
              className="flex-1 px-4 py-2 rounded-md border border-border bg-background"
            />
            <Button className="gradient-gold">
              S'abonner
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}