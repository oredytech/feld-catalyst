import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/21771e6a-d9f1-45e9-82cc-4fb8ed10c065.png" 
              alt="FELD ASBL" 
              className="h-16 w-auto"
            />
            <h3 className="text-lg font-semibold">FELD ASBL</h3>
            <p className="text-sm text-gray-300">
              Femmes Engagées pour le Leadership et le Développement. 
              Une association apolitique œuvrant pour la promotion du leadership féminin et la paix en RDC.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">À propos</Link></li>
              <li><Link to="/domains" className="text-gray-300 hover:text-primary transition-colors">Nos domaines</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-primary transition-colors">Projets</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-primary transition-colors">Actualités</Link></li>
              <li><Link to="/publications" className="text-gray-300 hover:text-primary transition-colors">Publications</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-primary" />
                <p className="text-gray-300">
                  12, Avenue de l'Avenir<br />
                  Quartier Basoko, Commune Ngaliema<br />
                  Kinshasa, RDC
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <div className="text-gray-300">
                  <p>+243 995 021 267</p>
                  <p>+243 997 713 286</p>
                  <p>+243 999 147 627</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <p className="text-gray-300">feldrdc1@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-gray-300">
              Restez informé(e) de nos actualités et événements
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full gradient-gold text-white border-0">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              © 2025 FELD ASBL. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};