
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Moderna spletna trgovina',
      category: 'E-commerce',
      description: 'Futuristična spletna trgovina z AI priporočili in naprednim UX dizajnom.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
      technologies: ['React', 'AI', 'UX/UI'],
      details: 'Kompleksna spletna trgovina z integrirano umetno inteligenco za personalizirane priporočila produktov.'
    },
    {
      id: 2,
      title: 'Korporativna identiteta',
      category: 'Branding',
      description: 'Celovita vizualna identiteta za tehnološko podjetje z modularnim dizajnom.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      technologies: ['Branding', 'Print', 'Digital'],
      details: 'Razvoj celotne vizualne identitete, od logotipa do poslovnih materialov in spletne prisotnosti.'
    },
    {
      id: 3,
      title: 'AI Dashboard',
      category: 'Web aplikacija',
      description: 'Interaktivna dashboard aplikacija za upravljanje AI sistemov v podjetju.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      technologies: ['React', 'AI', 'Dashboard'],
      details: 'Napredna spletna aplikacija za real-time monitoring in upravljanje AI sistemov.'
    },
    {
      id: 4,
      title: 'Video produkcija',
      category: 'Video',
      description: 'Promocijski video za startup z animacijami in motion graphics.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      technologies: ['Video', 'Animation', 'Motion Graphics'],
      details: 'Kreativni promocijski video z naprednimi vizualnimi efekti in animacijami.'
    },
    {
      id: 5,
      title: 'Fotografska serija',
      category: 'Fotografija',
      description: 'Arhitekturna fotografija z uporabo naprednih tehnik osvetlitve.',
      image: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=800&h=600&fit=crop',
      technologies: ['Fotografija', 'Post-produkcija', 'Arhitektura'],
      details: 'Profesionalna arhitekturna fotografija za prestižne nepremičninske projekte.'
    },
    {
      id: 6,
      title: 'AI Chatbot sistem',
      category: 'AI rešitve',
      description: 'Pametni chatbot za avtomatizacijo kupruške podpore.',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&h=600&fit=crop',
      technologies: ['AI', 'NLP', 'Automation'],
      details: 'Inteligentni chatbot sistem za avtomatizacijo komunikacije s strankami.'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />
      
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-radial opacity-30"></div>
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-black mb-8">
            <span className="text-gradient">Projekti</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Odkrijte naša najnovejša dela in uspešno izvedene projekte, ki presegajo pričakovanja.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group glass rounded-2xl overflow-hidden hover:glow-blue transition-all duration-500 hover:scale-105 cursor-pointer animate-scale-up"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="glass-blue px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 electric-blue group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 group-hover:text-white/90 transition-colors">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-blue rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;

              return (
                <div>
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-t-2xl"
                    />
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 glass rounded-full w-10 h-10 flex items-center justify-center hover:glow-blue transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold electric-blue">
                        {project.title}
                      </h2>
                      <span className="glass px-3 py-1 rounded-full text-sm">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-white/80 mb-6">
                      {project.details}
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold electric-blue">
                        Uporabljene tehnologije
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="glass px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;
