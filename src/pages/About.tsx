
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    {
      number: '120+',
      label: 'Zaključenih projektov',
      description: 'Uspešno izvedeni projekti v različnih panogah',
      icon: '🚀'
    },
    {
      number: '80+',
      label: 'Zadovoljnih naročnikov',
      description: 'Dolgoročno partnerstvo z zaupanja vrednimi strankami',
      icon: '💙'
    },
    {
      number: '15+',
      label: 'Let združenih izkušenj',
      description: 'Bogata zgodovina v digitalni industriji',
      icon: '⭐'
    },
    {
      number: '6',
      label: 'Področij delovanja',
      description: 'Od spletnih strani do AI rešitev',
      icon: '🎯'
    },
    {
      number: '99%',
      label: 'Zadovoljstvo naročnikov',
      description: 'Kakovost, ki govori sama zase',
      icon: '✨'
    },
    {
      number: '24/7',
      label: 'Podpora',
      description: 'Vedno na voljo za naše stranke',
      icon: '🛡️'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />
      
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-radial opacity-30"></div>
      <div className="fixed top-1/3 right-1/4 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className={`max-w-4xl mx-auto text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-black mb-8">
            <span className="text-gradient">O nas</span>
          </h1>
          
          <div className="glass rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold electric-blue mb-6">
              Filozofija Paradoksa
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              "Paradoks pomeni preseganje norm. Gradimo estetske in učinkovite rešitve, ki izstopajo."
            </p>
            <div className="neon-line w-24 mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* Achievement Cards */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 electric-blue">
            Naši dosežki
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-blue rounded-2xl p-8 hover:glow-blue transition-all duration-500 hover:scale-105 group animate-scale-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {achievement.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold electric-blue mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {achievement.label}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="relative py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
            Naše vrednote
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: 'Inovativnost',
                description: 'Vedno iščemo nove načine za rešavanje izzivov in presegamo pričakovanja.'
              },
              {
                title: 'Kakovost',
                description: 'Vsak projekt obravnavamo z najvišjo pozornostjo do detajlov in strokovnostjo.'
              },
              {
                title: 'Partnerstvo',
                description: 'Z našimi strankami gradimo dolgoročne odnose, osnovane na zaupanju in transparentnosti.'
              },
              {
                title: 'Učinkovitost',
                description: 'Kombiniramo kreativnost z analitičnim pristopom za optimalne rezultate.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:border-electric-blue border border-white/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <h3 className="text-xl font-bold electric-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-white/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
