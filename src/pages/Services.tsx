
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Spletne strani',
      icon: '🌐',
      description: 'Moderne, responzivne in optimizirane spletne strani.',
      details: [
        'Responziven dizajn za vse naprave',
        'SEO optimizacija',
        'Hitrost nalaganja',
        'CMS sistemi',
        'E-commerce rešitve',
        'Vzdrževanje in podpora'
      ],
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
      id: 2,
      title: 'Grafično oblikovanje',
      icon: '🎨',
      description: 'Kreativne rešitve za tiskane in digitalne medije.',
      details: [
        'Logotipi in branding',
        'Tiskani materiali',
        'Digitalni dizajn',
        'Oblikovanje embalaže',
        'Marketing materiali',
        'Vizualna identiteta'
      ],
      gradient: 'from-pink-500/20 to-red-500/20'
    },
    {
      id: 3,
      title: 'Video produkcija',
      icon: '🎬',
      description: 'Profesionalni video vsebine za vaše potrebe.',
      details: [
        'Promocijski video',
        'Korporativni video',
        'Animacije',
        'Motion graphics',
        'Post-produkcija',
        'Zvočno oblikovanje'
      ],
      gradient: 'from-green-500/20 to-blue-500/20'
    },
    {
      id: 4,
      title: 'Fotografija',
      icon: '📸',
      description: 'Kakovostne fotografije za različne namene.',
      details: [
        'Produktna fotografija',
        'Korporativni portreti',
        'Arhitekturna fotografija',
        'Event fotografija',
        'Post-produkcija',
        'Retuširanje'
      ],
      gradient: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      id: 5,
      title: 'Uvajanje AI rešitev',
      icon: '🤖',
      description: 'Integracija umetne inteligence v vaše poslovanje.',
      details: [
        'AI chatboti',
        'Avtomatizacija procesov',
        'Podatkovna analitika',
        'Machine learning',
        'Priporočilni sistemi',
        'AI svetovanje'
      ],
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 6,
      title: 'Poslovno svetovanje',
      icon: '💼',
      description: 'Strategije za digitalno preobrazbo.',
      details: [
        'Digitalna strategija',
        'Analiza procesov',
        'Tehnološko svetovanje',
        'Optimizacija poslovanja',
        'Inovacijski procesi',
        'Mentorstvo'
      ],
      gradient: 'from-indigo-500/20 to-blue-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />
      
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-radial opacity-30"></div>
      <div className="fixed top-1/4 left-1/3 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-black mb-8">
            <span className="text-gradient">Storitve</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Celovite digitalne rešitve, ki vašemu podjetju omogočajo rast in uspeh v digitalnem svetu.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group glass-blue rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 border border-electric-blue/30 animate-scale-up ${
                  expandedService === service.id ? 'glow-blue' : 'hover:glow-blue'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
              >
                <div className={`h-24 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 flex items-center justify-center text-4xl group-hover:animate-pulse`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 electric-blue group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>
                
                {/* Expanded Details */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  expandedService === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="space-y-3 pt-4 border-t border-white/20">
                    <h4 className="font-semibold electric-blue">Kaj vključuje:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-3 text-white/80">
                          <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <span className="text-electric-blue text-sm font-medium">
                    {expandedService === service.id ? 'Klikni za skrčitev' : 'Klikni za več info'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
            Začnimo skupaj
          </h2>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Poiščite rešitev, ki ustreza vašim potrebam, ali pa se obrnite na nas za prilagojeno ponudbo.
          </p>
          
          <a
            href="/contact"
            className="inline-block glass-blue px-8 py-4 rounded-full text-white font-semibold glow-blue-hover transition-all duration-300 hover:scale-105"
          >
            Povežimo se
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
