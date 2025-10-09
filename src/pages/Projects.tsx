
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
      categories: ['Branding', 'Spletna stran'],
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
      categories: ['Branding', 'Spletna stran'],
      description: 'Za Nejc Velkavrh Produkcija sem pripravil celostno grafično podobo, ki odraža profesionalnost in kreativnost v svetu videoprodukcije. Vizualna identiteta temelji na sodobnem, čistem dizajnu z močnim poudarkom na osebni blagovni znamki.',
      image: '/lovable-uploads/nv-1.png',
      images: [
        '/lovable-uploads/nv-1.png',
        '/lovable-uploads/nv-2.png',
        '/lovable-uploads/nv-3.png',
        '/lovable-uploads/nv-4.png',
        '/lovable-uploads/nv-5.png',
        '/lovable-uploads/nv-6.png',
        '/lovable-uploads/nv-7.png'
      ],
      technologies: ['Celostna grafična podoba (CGP)', 'Oblikovanje logotipa', 'Spletna stran', 'Oblikovanje tiskovin', 'Vizualno svetovanje'],
      details: 'Za Nejc Velkavrh Produkcija sem pripravil celostno grafično podobo, ki odraža profesionalnost in kreativnost v svetu videoprodukcije. Vizualna identiteta temelji na sodobnem, čistem dizajnu z močnim poudarkom na osebni blagovni znamki. Projekt vključuje tudi oblikovanje in razvoj spletne strani, ki jasno predstavi storitve, projekte in kontaktne možnosti.'
    },
    {
      id: 3,
      title: 'Toper – Lifestyle fotografiranje',
      categories: ['Fotografija'],
      description: 'Za blagovno znamko Toper smo v sodelovanju z agencijo Great Agency izvedli lifestyle fotografiranje ob jezeru Jasna. Fotografirali smo dva modela v kolekciji oblačil Toper, z namenom ustvariti naravne, avtentične vizuale za spletno stran in družbena omrežja.',
      image: '/lovable-uploads/toper-1.jpg',
      images: [
        '/lovable-uploads/toper-1.jpg',
        '/lovable-uploads/toper-2.jpg',
        '/lovable-uploads/toper-3.jpg',
        '/lovable-uploads/toper-4.jpg',
        '/lovable-uploads/toper-5.jpg',
        '/lovable-uploads/toper-6.jpg',
        '/lovable-uploads/toper-7.jpg',
        '/lovable-uploads/toper-8.jpg',
        '/lovable-uploads/toper-9.jpg',
        '/lovable-uploads/toper-10.jpg'
      ],
      technologies: ['Fotografiranje', 'Urejanje fotografij', 'Vsebina za spletno stran', 'Vsebina za družbena omrežja'],
      details: 'Za blagovno znamko Toper smo v sodelovanju z agencijo Great Agency izvedli lifestyle fotografiranje ob jezeru Jasna. Fotografirali smo dva modela v kolekciji oblačil Toper, z namenom ustvariti naravne, avtentične vizuale za spletno stran in družbena omrežja. Ambient gorskega jezera je dopolnil sproščeno, a vizualno močno zgodbo znamke.'
    },
    {
      id: 4,
      title: 'Gripsi',
      categories: ['Branding'],
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
      categories: ['Branding', 'Spletna stran'],
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
    },
    {
      id: 6,
      title: 'Kovinoplastika',
      categories: ['Branding', 'Spletna stran', 'Fotografija'],
      description: 'Za podjetje Kovinoplastika smo zasnovali celostno grafično podobo in sodobno spletno stran, dopolnjeno s promocijskimi materiali, tiskovinami ter prodajnimi predstavitvami in katalogom izdelkov.',
      image: '/lovable-uploads/kp-1.png',
      images: [
        '/lovable-uploads/kp-1.png',
        '/lovable-uploads/kp-2.png',
        '/lovable-uploads/kp-3.png',
        '/lovable-uploads/kp-4.png',
        '/lovable-uploads/kp-5.png',
        '/lovable-uploads/kp-6.png',
        '/lovable-uploads/kp-7.png',
        '/lovable-uploads/kp-7-1.png',
        '/lovable-uploads/kp-8.png',
        '/lovable-uploads/kp-9.png',
        '/lovable-uploads/kp-10.png',
        '/lovable-uploads/kp-11.png'
      ],
      technologies: ['Grafično oblikovanje', 'Spletna stran', 'Tiskovine', 'Foto in video produkcija', 'Studijska fotografija', 'Katalog izdelkov'],
      details: 'Za podjetje Kovinoplastika smo zasnovali celostno grafično podobo in sodobno spletno stran, dopolnjeno s promocijskimi materiali, tiskovinami ter prodajnimi predstavitvami in katalogom izdelkov. Izvedli smo tudi studijsko fotografiranje ter foto in video produkcijo proizvodnega procesa, s čimer smo poudarili natančnost in kakovost izdelave. Vizualna identiteta temelji na modrih tonih in sivinah, ki izražajo tehnično zanesljivost, stabilnost in strokovnost podjetja.'
    },
    {
      id: 7,
      title: 'Košarkarsko društvo Postojna',
      categories: ['Branding'],
      description: 'Za Košarkarsko društvo Postojna smo pripravili celovito strategijo prenove kluba, posodobili grafično podobo, oblikovali nove drese, tiskovine ter sodelovali pri organizaciji dogodkov.',
      image: '/lovable-uploads/kdp-1.png',
      images: [
        '/lovable-uploads/kdp-1.png',
        '/lovable-uploads/kdp-2.png',
        '/lovable-uploads/kdp-3.png',
        '/lovable-uploads/kdp-4.png',
        '/lovable-uploads/kdp-5.png',
        '/lovable-uploads/kdp-6.png',
        '/lovable-uploads/kdp-7.png',
        '/lovable-uploads/kdp-8.png'
      ],
      technologies: ['Strategija blagovne znamke', 'Grafično oblikovanje', 'Oblikovanje dresov', 'Tiskovine', 'Organizacija dogodkov'],
      details: 'Za Košarkarsko društvo Postojna smo pripravili celovito strategijo prenove kluba, posodobili grafično podobo, oblikovali nove drese, tiskovine ter sodelovali pri organizaciji dogodkov. Osrednji element novega grba združuje človeško ribico – simbol podzemnega sveta Postojnske jame – in zmaja iz legende o pastirčku, ki predstavlja moč, pogum in vztrajnost. Ta spoj ustvarja edinstveno zgodbo kluba, ki temelji na lokalni identiteti in športnem duhu. Vizualna podoba ohranja izvorne barve kluba, medtem ko luske na dresih subtilno ponazarjajo zmajevo moč in zaščito.'
    },
    {
      id: 8,
      title: 'Vizion Investment',
      categories: ['Branding', 'Spletna stran'],
      description: 'V sodelovanju z agencijo GREAT smo za podjetje Vizion Investment razvili novo grafično podobo, zasnovali promocijske materiale in oblikovali spletno stran, ki odraža eleganco in prestiž sveta investicij.',
      image: '/lovable-uploads/vizion-1.png',
      images: [
        '/lovable-uploads/vizion-1.png',
        '/lovable-uploads/vizion-2.png',
        '/lovable-uploads/vizion-3.png',
        '/lovable-uploads/vizion-4.png',
        '/lovable-uploads/vizion-5.png',
        '/lovable-uploads/vizion-6.png',
        '/lovable-uploads/vizion-7.png',
        '/lovable-uploads/vizion-8.png'
      ],
      technologies: ['Grafično oblikovanje', 'Spletna stran', 'Promo materiali'],
      details: 'V sodelovanju z agencijo GREAT smo za podjetje Vizion Investment razvili novo grafično podobo, zasnovali promocijske materiale in oblikovali spletno stran, ki odraža eleganco in prestiž sveta investicij. Glavni simbol znamke je ikona, ki združuje črko V in krila, kar ponazarja vizijo, rast in svobodo v investiranju. Barvna paleta temelji na zlatih tonih, ki simbolizirajo bogastvo, zaupanje in stabilnost — vrednote, povezane z investicijami v Dubaju in nepremičninskem sektorju.'
    },
    {
      id: 9,
      title: 'Ansambel Obisk',
      categories: ['Branding'],
      description: 'Za Ansambel Obisk smo oblikovali novo grafično podobo in pripravili tiskovine, ki poudarjajo prepoznavnost in glasbeni značaj skupine.',
      image: '/lovable-uploads/obisk-1.png',
      images: [
        '/lovable-uploads/obisk-1.png',
        '/lovable-uploads/obisk-2.png',
        '/lovable-uploads/obisk-3.png',
        '/lovable-uploads/obisk-4.png',
        '/lovable-uploads/obisk-5.png'
      ],
      technologies: ['Grafično oblikovanje', 'Tiskovine'],
      details: 'Za Ansambel Obisk smo oblikovali novo grafično podobo in pripravili tiskovine, ki poudarjajo prepoznavnost in glasbeni značaj skupine. Glavni element logotipa je črka O, združena z glasbeno noto, kar simbolizira povezanost med identiteto ansambla in njegovo glasbo. Barvna paleta temelji na rdečih odtenkih, značilnih za oberkrainerski slog, ki izražajo energijo, tradicijo in veselje do glasbe.'
    },
    {
      id: 10,
      title: 'Marija',
      categories: ['Fotografija'],
      description: 'Studijsko fotografiranje modela v vintage stilu, združenem z modernim pridihom. Fotografije izražajo preprostost, eleganco in toplino.',
      image: '/lovable-uploads/marija-1.jpg',
      images: [
        '/lovable-uploads/marija-1.jpg',
        '/lovable-uploads/marija-2.jpg',
        '/lovable-uploads/marija-3.jpg',
        '/lovable-uploads/marija-4.jpg',
        '/lovable-uploads/marija-5.jpg',
        '/lovable-uploads/marija-6.jpg',
        '/lovable-uploads/marija-7.jpg',
        '/lovable-uploads/marija-8.jpg',
        '/lovable-uploads/marija-9.jpg',
        '/lovable-uploads/marija-10.jpg'
      ],
      technologies: ['Studijska fotografija', 'Urejanje fotografij', 'Vsebina za družbena omrežja'],
      details: 'Studijsko fotografiranje modela v vintage stilu, združenem z modernim pridihom. Fotografije izražajo preprostost, eleganco in toplino.'
    },
    {
      id: 11,
      title: 'Boudoir fotografiranje',
      categories: ['Fotografija'],
      description: 'Intimno boudoir fotografiranje, ki združuje čutnost in eleganco s prefinjenim stilom ter mehkimi svetlobnimi efekti.',
      image: '/lovable-uploads/boudoir-1.jpg',
      images: [
        '/lovable-uploads/boudoir-1.jpg',
        '/lovable-uploads/boudoir-2.jpg',
        '/lovable-uploads/boudoir-3.jpg',
        '/lovable-uploads/boudoir-4.jpg',
        '/lovable-uploads/boudoir-5.jpg',
        '/lovable-uploads/boudoir-6.jpg',
        '/lovable-uploads/boudoir-7.jpg',
        '/lovable-uploads/boudoir-8.jpg',
        '/lovable-uploads/boudoir-9.jpg',
        '/lovable-uploads/boudoir-10.jpg'
      ],
      technologies: ['Fotografija', 'Urejanje fotografij'],
      details: 'Intimno boudoir fotografiranje, ki združuje čutnost in eleganco s prefinjenim stilom ter mehkimi svetlobnimi efekti.'
    }
  ];

  // Get unique categories
  const categories = ['Vse', ...Array.from(new Set(projects.flatMap(project => project.categories)))];

  // Filter projects based on selected filter
  const filteredProjects = selectedFilter === 'Vse' 
    ? projects 
    : projects.filter(project => project.categories.includes(selectedFilter));

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
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.categories.map((cat, catIndex) => (
                      <span key={catIndex} className="glass-purple px-3 py-1 rounded-full text-sm font-medium">
                        {cat}
                      </span>
                    ))}
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
                      <div className="flex gap-2">
                        {project.categories.map((cat, catIndex) => (
                          <span key={catIndex} className="glass px-3 py-1 rounded-full text-sm">
                            {cat}
                          </span>
                        ))}
                      </div>
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
