import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Target, Heart, Globe, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const stats = [
    { label: "Années d'expérience", value: "8+", icon: Calendar },
    { label: "Femmes accompagnées", value: "1000+", icon: Users },
    { label: "Projets réalisés", value: "50+", icon: Target },
    { label: "Partenaires", value: "25+", icon: Heart }
  ];

  const domains = [
    { name: "Agropastoral", icon: "🌾", color: "gradient-green" },
    { name: "Éducation", icon: "📚", color: "gradient-blue" },
    { name: "Santé", icon: "🏥", color: "gradient-gold" },
    { name: "Entrepreneuriat", icon: "💼", color: "gradient-green" },
    { name: "Genre", icon: "⚖️", color: "gradient-blue" },
    { name: "Environnement", icon: "🌍", color: "gradient-gold" }
  ];

  const news = [
    {
      title: "Lancement du programme Leadership Féminin 2025",
      date: "15 Janvier 2025",
      excerpt: "Un nouveau programme ambitieux pour former 200 femmes leaders en RDC."
    },
    {
      title: "Partenariat avec l'Union Européenne",
      date: "10 Janvier 2025", 
      excerpt: "Signature d'un accord pour le développement rural et l'autonomisation des femmes."
    },
    {
      title: "Formation en entrepreneuriat à Kinshasa",
      date: "5 Janvier 2025",
      excerpt: "50 femmes entrepreneures formées aux techniques de gestion d'entreprise."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/hero-background.jpg" 
            alt="Femme africaine au champs" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40" />
        </div>
        
        <div className="container mx-auto px-4 text-center z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              FELD ASBL
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-foreground font-medium">
              Femmes Engagées pour le Leadership et le Développement
            </p>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Une association apolitique œuvrant pour la promotion du leadership féminin, 
              la paix, la solidarité et le développement durable en République Démocratique du Congo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gradient-gold text-white border-0 hover:opacity-90 hover-lift">
                Rejoindre notre mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                Découvrir nos projets
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-lift animate-scale-in border-0 shadow-lg">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Notre Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Depuis 2017, FELD ASBL œuvre pour l'émancipation des femmes congolaises 
                à travers des programmes innovants de leadership, de formation et d'accompagnement. 
                Notre approche holistique vise le développement durable et l'égalité des chances.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Leadership féminin et autonomisation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <span>Développement durable et innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Paix, solidarité et cohésion sociale</span>
                </div>
              </div>
              <Button className="mt-6 gradient-green text-white border-0">
                <Link to="/about" className="flex items-center">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="/lovable-uploads/21771e6a-d9f1-45e9-82cc-4fb8ed10c065.png" 
                alt="FELD Mission" 
                className="w-full max-w-md mx-auto hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Nos Domaines d'Intervention</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              FELD ASBL intervient dans plusieurs secteurs clés pour un développement intégré et durable
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {domains.map((domain, index) => (
              <Card key={index} className="text-center hover-lift animate-scale-in border-0 shadow-lg cursor-pointer group">
                <CardContent className="p-6">
                  <div className={`text-4xl mb-3 p-4 rounded-full ${domain.color} text-white mx-auto w-fit group-hover:scale-110 transition-transform`}>
                    {domain.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">{domain.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="hover-lift">
              <Link to="/domains" className="flex items-center">
                Voir tous nos domaines
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Actualités Récentes</h2>
            <p className="text-lg text-muted-foreground">
              Suivez nos dernières activités et réalisations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <Card key={index} className="hover-lift animate-fade-in border-0 shadow-lg cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-sm text-primary mb-2">{article.date}</div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="ghost" className="p-0 text-primary hover:text-primary/80">
                    Lire la suite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="gradient-blue text-white border-0 hover-lift">
              <Link to="/news" className="flex items-center">
                Toutes les actualités
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Rejoignez Notre Mouvement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ensemble, construisons un avenir où chaque femme peut réaliser son potentiel 
            et contribuer au développement de la République Démocratique du Congo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-white/90">
              Devenir membre
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}