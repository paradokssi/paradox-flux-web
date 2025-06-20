
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/7d1e0164-f6a7-439a-8554-2ba04f454964.png" 
              alt="Paradoks logo" 
              className="h-12 w-auto"
            />
            <p className="text-white/70">
              Digitalna agencija prihodnosti. Združujemo estetiko, tehnologijo in učinkovitost.
            </p>
            <div className="neon-line w-full"></div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold galactic-purple">Kontakt</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 galactic-purple" />
                <a href="mailto:nejc@paradoks.si" className="text-white/70 hover:galactic-purple transition-colors">
                  nejc@paradoks.si
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 galactic-purple" />
                <a href="tel:+38641550886" className="text-white/70 hover:galactic-purple transition-colors">
                  +386 41 550 886
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 galactic-purple" />
                <span className="text-white/70">Ljubljana, Slovenija</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold galactic-purple">Storitve</h4>
            <div className="space-y-2 text-white/70">
              <div>Spletne strani</div>
              <div>Grafično oblikovanje</div>
              <div>Video produkcija</div>
              <div>Fotografija</div>
              <div>AI rešitve</div>
              <div>Poslovno svetovanje</div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50">
            © {currentYear} Paradoks. Vse pravice pridržane.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
