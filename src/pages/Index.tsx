
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Target, Rocket, Camera, Palette, Video, Bot, TrendingUp } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: 'O nas',
      description: 'Spoznajte našo filozofijo in dosežke',
      path: '/about',
      gradient: 'from-white/10 to-purple-500/20'
    },
    {
      title: 'Projekti',
      description: 'Odkrijte naša najnovejša dela',
      path: '/projects',
      gradient: 'from-purple-500/20 to-white/10'
    },
    {
      title: 'Storitve',
      description: 'Celovite digitalne rešitve',
      path: '/services',
      gradient: 'from-white/10 to-purple-500/20'
    },
    {
      title: 'Kontakt',
      description: 'Povežimo se in ustvarimo skupaj',
      path: '/contact',
      gradient: 'from-purple-500/20 to-white/10'
    }
  ];

  const services = [
    { icon: Target, title: 'Spletne strani', desc: 'Sodobne in odzivne spletne rešitve' },
    { icon: Palette, title: 'Grafično oblikovanje', desc: 'Branding in marketing design' },
    { icon: Video, title: 'Video produkcija', desc: 'Profesionalna video vsebina' },
    { icon: Camera, title: 'Fotografija', desc: 'Vizualno pripovedovanje' },
    { icon: Bot, title: 'AI rešitve', desc: 'Avtomatizacija in pametni sistemi' },
    { icon: TrendingUp, title: 'Poslovno svetovanje', desc: 'Digitalna preobrazba' }
  ];

  const projects = [
    { title: 'E-commerce platforma', category: 'Spletna trgovina', color: 'from-purple-600 to-blue-600' },
    { title: 'Brand identiteta', category: 'Grafično oblikovanje', color: 'from-pink-600 to-purple-600' },
    { title: 'Korporativni video', category: 'Video produkcija', color: 'from-blue-600 to-indigo-600' }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />
      
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-radial opacity-50"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-galactic-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className={`text-center space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-gradient">Paradoks</span>
            <br />
            <span className="text-white">Digitalna agencija</span>
            <br />
            <span className="galactic-purple">prihodnosti</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Združujemo estetiko, tehnologijo in učinkovitost.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link
              to="/contact"
              className="glass-purple px-8 py-4 rounded-full text-white font-semibold glow-purple-hover transition-all duration-300 hover:scale-105"
            >
              Stopi v stik
            </Link>
            <Link
              to="/projects"
              className="glass border border-white/20 px-8 py-4 rounded-full text-white font-semibold hover:border-galactic-purple transition-all duration-300 hover:scale-105"
            >
              Oglej si projekte
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-galactic-purple rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
            Raziščite naš svet
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={feature.path}
                to={feature.path}
                className="group glass rounded-2xl p-6 hover:glow-purple transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`h-32 bg-gradient-to-br ${feature.gradient} rounded-xl mb-4 group-hover:animate-pulse`}></div>
                <h3 className="text-xl font-bold mb-2 galactic-purple group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">
            Naše storitve
          </h2>
          <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
            Celovite digitalne rešitve za vaš uspeh
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-purple rounded-xl p-6 group hover:glow-purple transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="w-8 h-8 galactic-purple mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:galactic-purple transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="glass border border-galactic-purple px-8 py-3 rounded-full text-galactic-purple font-semibold hover:bg-galactic-purple hover:text-white transition-all duration-300"
            >
              Vse storitve
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">
            Izbrani projekti
          </h2>
          <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
            Oglejte si naša najnovejša dela in dosežke
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass rounded-xl overflow-hidden group hover:glow-purple transition-all duration-500 hover:scale-105"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm galactic-purple mb-2">{project.category}</div>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="glass border border-galactic-purple px-8 py-3 rounded-full text-galactic-purple font-semibold hover:bg-galactic-purple hover:text-white transition-all duration-300"
            >
              Vsi projekti
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Preview */}
      <section className="relative py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient">
            Paradoks v številkah
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '120+', label: 'Projektov' },
              { number: '80+', label: 'Zadovoljnih strank' },
              { number: '15+', label: 'Let izkušenj' },
              { number: '99%', label: 'Zadovoljstvo' }
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-purple rounded-xl p-6 animate-scale-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold galactic-purple mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
