
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      gradient: 'from-white/10 to-blue-500/20'
    },
    {
      title: 'Projekti',
      description: 'Odkrijte naša najnovejša dela',
      path: '/projects',
      gradient: 'from-blue-500/20 to-white/10'
    },
    {
      title: 'Storitve',
      description: 'Celovite digitalne rešitve',
      path: '/services',
      gradient: 'from-white/10 to-blue-500/20'
    },
    {
      title: 'Kontakt',
      description: 'Povežimo se in ustvarimo skupaj',
      path: '/contact',
      gradient: 'from-blue-500/20 to-white/10'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />
      
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-radial opacity-50"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className={`text-center space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-gradient">Paradoks</span>
            <br />
            <span className="text-white">Digitalna agencija</span>
            <br />
            <span className="electric-blue">prihodnosti</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Združujemo estetiko, tehnologijo in učinkovitost.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link
              to="/contact"
              className="glass-blue px-8 py-4 rounded-full text-white font-semibold glow-blue-hover transition-all duration-300 hover:scale-105"
            >
              Stopi v stik
            </Link>
            <Link
              to="/projects"
              className="glass border border-white/20 px-8 py-4 rounded-full text-white font-semibold hover:border-electric-blue transition-all duration-300 hover:scale-105"
            >
              Oglej si projekte
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse"></div>
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
                className="group glass rounded-2xl p-6 hover:glow-blue transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`h-32 bg-gradient-to-br ${feature.gradient} rounded-xl mb-4 group-hover:animate-pulse`}></div>
                <h3 className="text-xl font-bold mb-2 electric-blue group-hover:text-white transition-colors">
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
                className="glass-blue rounded-xl p-6 animate-scale-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold electric-blue mb-2">
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
