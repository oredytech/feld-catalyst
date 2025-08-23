import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Eye, MessageCircle, Share2, Facebook, Instagram, Phone } from "lucide-react";
import { getSlugFromTitle } from "@/lib/articleSlug";
import leadershipImage from "@/assets/blog-leadership-feminin.jpg";
import formationImage from "@/assets/blog-formation-leadership.jpg";
import agricultureImage from "@/assets/blog-agriculture-durable.jpg";
import journeeFemmeImage from "@/assets/blog-journee-femme.jpg";
import partenariatImage from "@/assets/blog-partenariat-unicef.jpg";
import microcreditImage from "@/assets/blog-microcredit.jpg";

export default function BlogPost() {
  const { slug } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: "L'autonomisation économique des femmes : Un levier de développement durable",
      excerpt: "Découvrez comment l'autonomisation économique des femmes transforme les communautés rurales en RDC et contribue au développement durable du pays.",
      content: `L'autonomisation économique des femmes est l'un des piliers fondamentaux du développement durable en République Démocratique du Congo. Cette approche transformatrice ne se limite pas à l'amélioration des conditions de vie individuelles, mais s'étend à l'ensemble des communautés rurales et urbaines.

Dans nos programmes d'intervention, nous avons observé que lorsque les femmes accèdent aux ressources économiques, elles investissent prioritairement dans l'éducation de leurs enfants, la santé familiale et l'amélioration de l'habitat. Cette redistribution des revenus crée un cercle vertueux de développement qui bénéficie à toute la société.

Les défis restent nombreux : accès limité au crédit, barrières culturelles, manque de formation en gestion d'entreprise. Cependant, les succès que nous documentons quotidiennement nous encouragent à poursuivre nos efforts. Chaque femme autonomisée devient un agent de changement dans sa communauté.

L'impact de l'autonomisation économique se mesure également en termes de participation à la prise de décision. Les femmes économiquement indépendantes prennent davantage la parole dans les instances communautaires et familiales, contribuant ainsi à une société plus équitable et inclusive.

Notre engagement à FELD ASBL consiste à créer un écosystème favorable où chaque femme peut développer son potentiel entrepreneurial et contribuer activement au développement de son pays.`,
      author: "Marie Mukendi",
      date: "2024-01-15",
      category: "Développement",
      image: leadershipImage,
      readTime: "5 min",
      views: 1250,
      comments: 23,
      tags: ["Autonomisation", "Femmes", "Développement", "RDC"]
    },
    {
      id: 2,
      title: "Formation en leadership : 50 femmes diplômées à Kinshasa",
      excerpt: "FELD ASBL a récemment organisé une cérémonie de remise de diplômes pour 50 femmes ayant suivi notre programme de formation en leadership.",
      content: `Ce samedi 13 janvier 2024, FELD ASBL a organisé une cérémonie émouvante de remise de diplômes à 50 femmes exceptionnelles qui ont suivi avec succès notre programme intensif de formation en leadership.

Cette formation de six mois a couvert des modules essentiels : communication efficace, gestion d'équipe, prise de décision stratégique, négociation et résolution de conflits. Les participantes, âgées de 25 à 55 ans, viennent de diverses communes de Kinshasa et exercent dans différents secteurs d'activité.

Parmi les diplômées, nous comptons des enseignantes, des commerçantes, des infirmières, des agricultrices et des entrepreneurs. Cette diversité a enrichi les échanges et créé un réseau solide de femmes leaders prêtes à transformer leurs communautés.

Les témoignages recueillis lors de la cérémonie révèlent des transformations profondes : confiance en soi renforcée, nouvelles perspectives de carrière, projets communautaires initiés. Plusieurs participantes ont déjà commencé à appliquer leurs nouvelles compétences dans leurs environnements professionnels.

Cette initiative s'inscrit dans notre vision à long terme de créer une génération de femmes leaders capables de relever les défis du développement en RDC. Le succès de cette première cohorte nous encourage à étendre le programme à d'autres provinces.`,
      author: "Josephine Mbuyi",
      date: "2024-01-13",
      category: "Actualités",
      image: formationImage,
      readTime: "3 min",
      views: 890,
      comments: 15,
      tags: ["Formation", "Leadership", "Kinshasa", "Cérémonie"]
    },
    {
      id: 3,
      title: "Agriculture durable : Les femmes au cœur de la sécurité alimentaire",
      excerpt: "Comment les femmes congolaises adoptent les techniques d'agriculture durable pour améliorer la sécurité alimentaire de leurs familles.",
      content: `L'agriculture représente plus de 70% de l'activité économique en RDC, et les femmes constituent 60% de la main-d'œuvre agricole. Malgré cette contribution majeure, elles font face à de nombreux défis : accès limité à la terre, manque d'équipements modernes, techniques agricoles traditionnelles peu productives.

FELD ASBL a lancé un programme d'agriculture durable qui forme les femmes rurales aux techniques agroécologiques. Ces méthodes respectueuses de l'environnement permettent d'augmenter les rendements tout en préservant la fertilité des sols.

Les résultats sont encourageants : les participantes au programme ont observé une augmentation moyenne de 40% de leurs récoltes. L'utilisation de compost naturel, la rotation des cultures et l'agroforesterie contribuent non seulement à améliorer la productivité mais aussi à lutter contre l'érosion et le changement climatique.

Au-delà des aspects techniques, le programme renforce la position économique des femmes. Elles diversifient leurs cultures, créent des coopératives agricoles et accèdent aux marchés urbains. Cette autonomisation économique leur permet d'investir dans l'éducation de leurs enfants et l'amélioration de leurs conditions de vie.

L'impact social est tout aussi significatif : les femmes formées deviennent des références dans leurs communautés et transmettent leurs connaissances à d'autres agricultrices, créant un effet multiplicateur bénéfique pour l'ensemble de la région.`,
      author: "Dr. Sarah Kabongo",
      date: "2024-01-10",
      category: "Agriculture",
      image: agricultureImage,
      readTime: "7 min",
      views: 756,
      comments: 18,
      tags: ["Agriculture", "Sécurité alimentaire", "Durabilité"]
    },
    {
      id: 4,
      title: "Journée Internationale de la Femme : Célébration à Kinshasa",
      excerpt: "Retour sur notre célébration de la Journée Internationale de la Femme et les activités organisées pour promouvoir l'égalité des genres.",
      content: `Le 8 mars dernier, FELD ASBL a organisé une série d'activités remarquables pour célébrer la Journée Internationale de la Femme sous le thème "Investir en faveur des femmes : accélérer le rythme". Cette journée a rassemblé plus de 500 femmes de Kinshasa et des environs.

La matinée a débuté par une conférence-débat animée par des personnalités influentes du monde politique, économique et social congolais. Les discussions ont porté sur les avancées réalisées en matière d'égalité des genres et les défis qui persistent dans notre société.

L'après-midi a été consacrée à des ateliers pratiques : création d'entreprise, leadership féminin, droits de la femme, et santé reproductive. Ces sessions interactives ont permis aux participantes d'acquérir des compétences concrètes et de créer des réseaux de solidarité.

Un moment fort de la journée a été la remise de prix à des femmes entrepreneures qui se sont distinguées par leur contribution au développement économique et social. Ces success stories inspirantes démontrent le potentiel immense des femmes congolaises quand elles bénéficient du soutien nécessaire.

La journée s'est clôturée par un spectacle culturel mettant en valeur les talents artistiques féminins locaux. Cette célébration de la diversité culturelle congolaise a renforcé le sentiment d'appartenance et de fierté des participantes.`,
      author: "Grace Mulumba",
      date: "2024-01-08",
      category: "Événements",
      image: journeeFemmeImage,
      readTime: "4 min",
      views: 1120,
      comments: 31,
      tags: ["Journée de la Femme", "Égalité", "Événement"]
    },
    {
      id: 5,
      title: "Partenariat avec l'UNICEF : Nouveau projet éducatif",
      excerpt: "FELD ASBL annonce un nouveau partenariat avec l'UNICEF pour un projet d'éducation des jeunes filles dans les zones rurales.",
      content: `Nous sommes fiers d'annoncer notre nouveau partenariat stratégique avec l'UNICEF pour le lancement d'un projet ambitieux d'éducation des jeunes filles dans les zones rurales de la RDC. Ce partenariat de trois ans vise à améliorer l'accès à l'éducation de qualité pour 5000 filles dans cinq provinces du pays.

Le projet "Éducation pour l'Avenir" se concentre sur plusieurs axes prioritaires : construction et réhabilitation d'écoles, formation des enseignants, distribution de matériel scolaire, et sensibilisation des communautés à l'importance de l'éducation des filles.

Un aspect innovant du projet est l'intégration de technologies éducatives adaptées au contexte rural. Des tablettes solaires équipées de contenus pédagogiques seront distribuées dans les écoles participantes, permettant un apprentissage interactif même dans les zones sans électricité.

Le volet sensibilisation communautaire est crucial pour le succès du projet. FELD ASBL mobilisera ses réseaux locaux pour dialoguer avec les familles et les leaders traditionnels sur l'importance de maintenir les filles à l'école, particulièrement pendant l'adolescence.

Ce partenariat avec l'UNICEF renforce notre capacité d'intervention et valide notre approche holistique du développement. Ensemble, nous créons les conditions pour qu'une nouvelle génération de femmes éduquées puisse contribuer pleinement au développement de la RDC.`,
      author: "Directrice Exécutive",
      date: "2024-01-05",
      category: "Partenariats",
      image: partenariatImage,
      readTime: "6 min",
      views: 1450,
      comments: 27,
      tags: ["UNICEF", "Partenariat", "Éducation", "Zones rurales"]
    },
    {
      id: 6,
      title: "L'impact des microcrédits sur l'entrepreneuriat féminin",
      excerpt: "Analyse de l'impact de nos programmes de microcrédit sur le développement de l'entrepreneuriat féminin en milieu rural.",
      content: `Depuis le lancement de notre programme de microcrédit il y a deux ans, FELD ASBL a accordé plus de 800 microcrédits à des femmes entrepreneures, représentant un montant total de 150 000 dollars américains. Cette initiative transforme profondément l'écosystème entrepreneurial féminin en RDC.

L'analyse de l'impact révèle des résultats remarquables : 85% des bénéficiaires ont développé ou créé leur activité économique, 70% ont augmenté leurs revenus de plus de 50%, et 60% ont créé des emplois pour d'autres femmes de leurs communautés.

Les secteurs d'activité soutenus sont variés : agriculture, transformation alimentaire, commerce, artisanat, services. Cette diversification économique renforce la résilience des communautés rurales face aux chocs économiques et climatiques.

Au-delà des chiffres, les témoignages recueillis révèlent des transformations humaines profondes. Les femmes bénéficiaires gagnent en confiance, deviennent des modèles dans leurs communautés et transmettent leurs compétences entrepreneuriales à d'autres femmes.

Le taux de remboursement de 95% démontre la responsabilité et l'engagement des bénéficiaires. Cette performance exceptionnelle nous permet de renouveler et d'étendre le programme, créant un cycle vertueux de développement économique inclusif.

Notre approche intègre formation en gestion d'entreprise, accompagnement personnalisé et mise en réseau des entrepreneures. Cette méthode holistique explique largement le succès du programme et son impact durable sur les communautés.`,
      author: "Économiste FELD",
      date: "2024-01-03",
      category: "Économie",
      image: microcreditImage,
      readTime: "8 min",
      views: 923,
      comments: 12,
      tags: ["Microcrédit", "Entrepreneuriat", "Rural", "Impact"]
    }
  ];

  const currentPost = blogPosts.find(post => getSlugFromTitle(post.title) === slug) || blogPosts[0];
  const relatedPosts = blogPosts.filter(post => post.id !== currentPost.id).slice(0, 3);

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

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(currentPost.title);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`${currentPost.title} - ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const shareOnInstagram = () => {
    // Instagram doesn't support direct sharing via URL, so we'll copy to clipboard
    navigator.clipboard.writeText(`${currentPost.title} - ${window.location.href}`);
    alert("Lien copié ! Vous pouvez maintenant le partager sur Instagram.");
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au blog
            </Link>

            {/* Article Header */}
            <div className="mb-8">
              <Badge className={`${getCategoryColor(currentPost.category)} text-white border-0 mb-4`}>
                {currentPost.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-foreground">
                {currentPost.title}
              </h1>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {currentPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(currentPost.date).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {currentPost.views}
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {currentPost.comments}
                  </div>
                </div>
                <span>{currentPost.readTime} de lecture</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img 
                src={currentPost.image} 
                alt={currentPost.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8 text-foreground">
              {currentPost.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {currentPost.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-foreground border-border">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Social Share */}
            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Partager cet article</h3>
              <div className="flex space-x-4">
                <Button 
                  onClick={shareOnFacebook}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  size="sm"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button 
                  onClick={shareOnWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white"
                  size="sm"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  onClick={shareOnInstagram}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  size="sm"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              {/* Related Articles */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Articles similaires</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((post) => (
                       <Link 
                         key={post.id} 
                         to={`/blog/${getSlugFromTitle(post.title)}`}
                         className="block group"
                       >
                        <div className="flex space-x-3">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium group-hover:text-primary line-clamp-2 text-foreground">
                              {post.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {new Date(post.date).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Recevez nos derniers articles directement dans votre boîte mail.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Votre email"
                      className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm"
                    />
                    <Button className="w-full" size="sm">
                      S'abonner
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Catégories</h3>
                  <div className="space-y-2">
                    {["Développement", "Actualités", "Agriculture", "Événements", "Partenariats", "Économie"].map((category) => (
                      <Link 
                        key={category}
                        to="/blog"
                        className="block text-sm text-muted-foreground hover:text-primary"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}