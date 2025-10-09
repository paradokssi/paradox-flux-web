
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { Button } from '../components/ui/button';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('Vse');

  const projects = [
    {
      id: 1,
      title: 'Glasbena šola Vili Marinšek',
      category: 'Branding',
      description: 'Za Glasbeno šolo Vili Marinšek je bila izvedena celostna prenova vizualne identitete, s ciljem osvežitve podobe in boljše komunikacije s ciljnimi skupinami. Projekt združuje klasično glasbeno estetiko s sodobnim, dostopnim oblikovanjem, primernim za mlade učence in starše.',
      image: '/lovable-uploads/vm-1.png',
      images: [
        '/lovable-uploads/vm-1.png',
        '/lovable-uploads/vm-2.png',
        '/lovable-uploads/vm-3.png',
        '/lovable-uploads/vm-4.png',
        '/lovable-uploads/vm-5.png',
        '/lovable-uploads/vm-6.png',
        '/lovable-uploads/vm-7.png',
        '/lovable-uploads/vm-8.png'
      ],
      technologies: ['Celostna grafična podoba', 'Oblikovanje logotipa', 'Spletna stran', 'Oblikovanje tiskovin', 'Vizualno svetovanje'],
      details: 'Za Glasbeno šolo Vili Marinšek je bila izvedena celostna prenova vizualne identitete, s ciljem osvežitve podobe in boljše komunikacije s ciljnimi skupinami. Projekt združuje klasično glasbeno estetiko s sodobnim, dostopnim oblikovanjem, primernim za mlade učence in starše. S prenovo je šola pridobila prepoznavno in profesionalno vizualno prisotnost tako v tisku kot na spletu.'
    },
    {
      id: 2,
      title: 'Nejc Velkavrh Produkcija',
      category: 'Branding',
      description: 'Za Nejc Velkavrh Produkcija sem pripravil celostno grafično podobo, ki odraža profesionalnost in kreativnost v svetu videoprodukcije. Vizualna identiteta temelji na sodobnem, čistem dizajnu z močnim poudarkom na osebni blagovni znamki.',
      image: '/lovable-uploads/02f212e9-aecc-4bd4-8277-3f142561eccc.png',
      images: [
        '/lovable-uploads/02f212e9-aecc-4bd4-8277-3f142561eccc.png',
        '/lovable-uploads/5de6fbd3-c007-4b67-ba2d-7acf0b37f740.png'
      ],
      technologies: ['Celostna grafična podoba (CGP)', 'Oblikovanje logotipa', 'Spletna stran', 'Oblikovanje tiskovin', 'Vizualno svetovanje'],
      details: 'Za Nejc Velkavrh Produkcija sem pripravil celostno grafično podobo, ki odraža profesionalnost in kreativnost v svetu videoprodukcije. Vizualna identiteta temelji na sodobnem, čistem dizajnu z močnim poudarkom na osebni blagovni znamki. Projekt vključuje tudi oblikovanje in razvoj spletne strani, ki jasno predstavi storitve, projekte in kontaktne možnosti.'
    },
    {
      id: 3,
      title: 'Toper – Lifestyle fotografiranje',
      category: 'Fotografija',
      description: 'Za blagovno znamko Toper smo v sodelovanju z agencijo Great Agency izvedli lifestyle fotografiranje ob jezeru Jasna. Fotografirali smo dva modela v kolekciji oblačil Toper, z namenom ustvariti naravne, avtentične vizuale za spletno stran in družbena omrežja.',
      image: '/lovable-uploads/c4ce2d6e-50c2-4fab-a65e-487f54529cb6.png',
      images: [
        '/lovable-uploads/c4ce2d6e-50c2-4fab-a65e-487f54529cb6.png',
        '/lovable-uploads/e173e791-08bd-48ac-a789-d5a09a606d78.png',
        '/lovable-uploads/ca4c0184-e2c1-4826-a45a-d3e45cac69cf.png',
        '/lovable-uploads/5a9de308-a5b6-4d58-b5c7-f090252c9e05.png',
        '/lovable-uploads/3c988df9-3363-4a0b-8655-114b79dd86a1.png'
      ],
      technologies: ['Fotografiranje', 'Urejanje fotografij', 'Vsebina za spletno stran', 'Vsebina za družbena omrežja'],
      details: 'Za blagovno znamko Toper smo v sodelovanju z agencijo Great Agency izvedli lifestyle fotografiranje ob jezeru Jasna. Fotografirali smo dva modela v kolekciji oblačil Toper, z namenom ustvariti naravne, avtentične vizuale za spletno stran in družbena omrežja. Ambient gorskega jezera je dopolnil sproščeno, a vizualno močno zgodbo znamke.'
    },
    {
      id: 4,
      title: 'Gripsi',
      category: 'Branding',
      description: 'Za blagovno znamko Gripsi smo zasnovali celostno grafično podobo in strategijo vizualne identitete. Ključni element logotipa je minimalistična ikona, ki združuje črko G in simbol neskončnosti – kar ponazarja neprekinjen razvoj, zanesljivost in inovativnost znamke.',
      image: '/lovable-uploads/gripsi-1.png',
      images: [
        '/lovable-uploads/gripsi-1.png',
        '/lovable-uploads/gripsi-2.png',
        '/lovable-uploads/gripsi-3.png',
        '/lovable-uploads/gripsi-4.png',
        '/lovable-uploads/gripsi-5.png',
        '/lovable-uploads/gripsi-6.png'
      ],
      technologies: ['Grafično oblikovanje', 'Strategija blagovne znamke'],
      details: 'Za blagovno znamko Gripsi smo zasnovali celostno grafično podobo in strategijo vizualne identitete. Ključni element logotipa je minimalistična ikona, ki združuje črko G in simbol neskončnosti – kar ponazarja neprekinjen razvoj, zanesljivost in inovativnost znamke. Celotna vizualna podoba je zasnovana v estetskem, prečiščenem in elegantnem slogu, ki izraža sodobnost in profesionalnost.'
    },
    {
      id: 5,
      title: 'Šabec Transport',
      category: 'Branding',
      description: 'Za podjetje Šabec Transport smo ustvarili prepoznavno grafično podobo, sodobno spletno stran ter celovit nabor promocijskih materialov in tiskovin. Logotip združuje motiv ceste in črko Š, kar simbolizira povezanost, gibanje in zanesljivost.',
      image: '/lovable-uploads/st-1.png',
      images: [
        '/lovable-uploads/st-1.png',
        '/lovable-uploads/st-2.png',
        '/lovable-uploads/st-3.png',
        '/lovable-uploads/st-4.png',
        '/lovable-uploads/st-5.png',
        '/lovable-uploads/st-6.png',
        '/lovable-uploads/st-7.png',
        '/lovable-uploads/st-8.png'
      ],
      technologies: ['Grafično oblikovanje', 'Spletna stran', 'Tiskovine', 'Promo materiali'],
      details: 'Za podjetje Šabec Transport smo ustvarili prepoznavno grafično podobo, sodobno spletno stran ter celovit nabor promocijskih materialov in tiskovin. Logotip združuje motiv ceste in črko Š, kar simbolizira povezanost, gibanje in zanesljivost. Vizualna identiteta temelji na modernem, minimalističnem pristopu, ki izraža dinamiko transportnih storitev in profesionalnost podjetja.'
    }
  ];

  // Get unique categories
  const categories = ['Vse', ...Array.from(new Set(projects.map(project => project.category)))];

  // Filter projects based on selected filter
  const filteredProjects = selectedFilter === 'Vse' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

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

      {/* Filter Section */}
      <section className="relative py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                onClick={() => setSelectedFilter(category)}
                className={`
                  ${selectedFilter === category 
                    ? 'bg-galactic-purple hover:bg-galactic-purple/90 text-white border-galactic-purple' 
                    : 'glass border-white/20 text-white hover:bg-white/10 hover:border-galactic-purple/50'
                  }
                  transition-all duration-300 rounded-full px-6 py-2 font-medium
                `}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group glass rounded-2xl overflow-hidden hover:glow-purple transition-all duration-500 hover:scale-105 cursor-pointer animate-scale-up"
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
                    <span className="glass-purple px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 galactic-purple group-hover:text-white transition-colors">
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
            className="glass-purple rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const project = filteredProjects.find(p => p.id === selectedProject);
              if (!project) return null;

              return (
                <div>
                  <div className="relative">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.images.map((image, index) => (
                          <CarouselItem key={index} className="basis-1/2">
                            <div className="w-full px-2">
                              <img
                                src={image}
                                alt={`${project.title} - slika ${index + 1}`}
                                className="w-full h-auto object-contain rounded-lg"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4" />
                      <CarouselNext className="right-4" />
                    </Carousel>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 glass rounded-full w-10 h-10 flex items-center justify-center hover:glow-purple transition-all z-10"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold galactic-purple">
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
                      <h3 className="text-lg font-semibold galactic-purple">
                        Uporabljene storitve
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
