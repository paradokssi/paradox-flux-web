import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Show success message
    alert('Sporočilo je bilo uspešno poslano!');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <div className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />
      
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-radial opacity-30"></div>
      <div className="fixed bottom-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-black mb-8">
            <span className="text-gradient">Kontakt</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Pripravili smo se. Povežimo se in skupaj ustvarimo nekaj izjemnega.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <h2 className="text-2xl font-bold electric-blue mb-6">
              Pošljite nam sporočilo
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                  Ime *
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all" placeholder="Vaše ime" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                  E-mail *
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all" placeholder="vase.ime@email.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                  Sporočilo *
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all resize-none" placeholder="Opišite svoj projekt ali potrebe..." />
              </div>
              
              <button type="submit" className="w-full glass-blue py-4 rounded-lg font-semibold glow-blue-hover transition-all duration-300 hover:scale-105">
                Povežimo se
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{
          animationDelay: '0.4s'
        }}>
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold electric-blue mb-6">
                Kontaktni podatki
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="glass-blue rounded-full p-3">
                    <Mail className="w-6 h-6 electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">E-mail</h3>
                    <a href="mailto:nejc@paradoks.si" className="text-white/70 hover:electric-blue transition-colors">
                      nejc@paradoks.si
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="glass-blue rounded-full p-3">
                    <Phone className="w-6 h-6 electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Telefon</h3>
                    <a href="tel:+38641550886" className="text-white/70 hover:electric-blue transition-colors">
                      +386 41 550 886
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="glass-blue rounded-full p-3">
                    <MapPin className="w-6 h-6 electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Lokacija</h3>
                    <span className="text-white/70">Ljubljana, Slovenija</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold electric-blue mb-4">
                Zakaj izbrati nas?
              </h3>
              
              <div className="space-y-4">
                {[{
                icon: '⚡',
                text: 'Hitro odzivanje'
              }, {
                icon: '🎯',
                text: 'Individualni pristop'
              }, {
                icon: '💎',
                text: 'Kakovost nad vsem'
              }, {
                icon: '🤝',
                text: 'Dolgoročno partnerstvo'
              }].map((item, index) => <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-white/80">{item.text}</span>
                  </div>)}
              </div>
            </div>

            {/* Light Map Background */}
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="neon-line absolute top-1/4 left-0 right-0"></div>
                <div className="neon-line absolute bottom-1/4 left-0 right-0" style={{
                animationDelay: '1s'
              }}></div>
                <div className="neon-line absolute top-0 bottom-0 left-1/4 w-px" style={{
                animationDelay: '2s'
              }}></div>
                <div className="neon-line absolute top-0 bottom-0 right-1/4 w-px" style={{
                animationDelay: '3s'
              }}></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold electric-blue mb-4">
                  Obiščite nas
                </h3>
                <p className="text-white/80">Naša pisarna v Ljubljani je odprta za sestanke po predhodni najavi. Z veseljem se vidimo osebno in razpravljamo o vaših projektih.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;