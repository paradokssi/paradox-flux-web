
import { useState, useMemo } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('Vse');
  const [sortBy, setSortBy] = useState<string>('priporoceno');

  const projects = [
    {
      id: 34,
      title: 'Fresh Agency',
      categories: ['Branding'],
      description: 'Sveža in energična celostna grafična podoba za medijsko agencijo Fresh. Vizualna identiteta temelji na živahni zeleni barvni paleti in igrivi tipografiji z organskim simbolom, ki izraža dinamičnost, kreativnost in svežino v svetu medijev in marketinga.',
      image: '/lovable-uploads/fresh-1.png',
      images: [
        '/lovable-uploads/fresh-1.png',
        '/lovable-uploads/fresh-2.png',
        '/lovable-uploads/fresh-3.png',
        '/lovable-uploads/fresh-4.png',
        '/lovable-uploads/fresh-5.png',
        '/lovable-uploads/fresh-6.png'
      ],
      technologies: ['Celostna grafična podoba', 'Oblikovanje logotipa', 'Barvna strategija', 'Vizualna identiteta'],
      details: 'Sveža in energična celostna grafična podoba za medijsko agencijo Fresh. Vizualna identiteta temelji na živahni zeleni barvni paleti in igrivi tipografiji z organskim simbolom, ki izraža dinamičnost, kreativnost in svežino v svetu medijev in marketinga.'
    },
    {
      id: 33,
      title: 'HBT Studio',
      categories: ['Branding'],
      description: 'Celostna grafična podoba za HBT Studio – prostor elegance in mirnega luksuza, kjer se estetika, minimalizem in premišljeni kontrasti združijo v brezčasno vizualno identiteto. Dizajn temelji na ravnotežju, redu in občutku vrednosti za vsakega obiskovalca.',
      image: '/lovable-uploads/hbt-1.png',
      images: [
        '/lovable-uploads/hbt-1.png',
        '/lovable-uploads/hbt-2.png',
        '/lovable-uploads/hbt-3.png',
        '/lovable-uploads/hbt-4.png',
        '/lovable-uploads/hbt-5.png',
        '/lovable-uploads/hbt-6.png',
        '/lovable-uploads/hbt-7.png',
        '/lovable-uploads/hbt-8.png',
        '/lovable-uploads/hbt-9.png',
        '/lovable-uploads/hbt-10.png'
      ],
      technologies: ['Celostna grafična podoba', 'Oblikovanje logotipa', 'Tiskovine', 'Social media design', 'Strategija blagovne znamke'],
      details: 'Celostna grafična podoba za HBT Studio – prostor elegance in mirnega luksuza, kjer se estetika, minimalizem in premišljeni kontrasti združijo v brezčasno vizualno identiteto. Dizajn temelji na ravnotežju, redu in občutku vrednosti za vsakega obiskovalca.'
    },
    {
      id: 30,
      title: 'Luxe Label by Vane Trajkov',
      categories: ['Branding'],
      description: 'Celostna grafična podoba za luksuzni beauty salon Luxe Label by Vane Trajkov. Znamka združuje eleganco, zaupanje in vrhunsko storitev v brezčasno vizualno identiteto, ki odraža prestiž in skrb za vsakega posameznika.',
      image: '/lovable-uploads/luxelabel-1.png',
      images: [
        '/lovable-uploads/luxelabel-1.png',
        '/lovable-uploads/luxelabel-2.png',
        '/lovable-uploads/luxelabel-3.png',
        '/lovable-uploads/luxelabel-4.png',
        '/lovable-uploads/luxelabel-5.png',
        '/lovable-uploads/luxelabel-6.png',
        '/lovable-uploads/luxelabel-7.png'
      ],
      technologies: ['Celostna grafična podoba', 'Oblikovanje logotipa', 'Tiskovine', 'Strategija blagovne znamke'],
      details: 'Celostna grafična podoba za luksuzni beauty salon Luxe Label by Vane Trajkov. Znamka združuje eleganco, zaupanje in vrhunsko storitev v brezčasno vizualno identiteto, ki odraža prestiž in skrb za vsakega posameznika.'
    },
    {
      id: 31,
      title: 'Bike Center Cerknica',
      categories: ['Branding'],
      description: 'Oblikovanje celovitega nabora nalepk za okna in vrata kolesarskega centra Bike Center Cerknica. Vizualni elementi vključujejo logotip, partnerske znamke in ključne informacije, zasnovane za maksimalno prepoznavnost in profesionalen prvi vtis.',
      image: '/lovable-uploads/bike-center-1.png',
      images: [
        '/lovable-uploads/bike-center-1.png'
      ],
      technologies: ['Grafično oblikovanje', 'Oblikovanje nalepk', 'Vizualna komunikacija'],
      details: 'Oblikovanje celovitega nabora nalepk za okna in vrata kolesarskega centra Bike Center Cerknica. Vizualni elementi vključujejo logotip, partnerske znamke in ključne informacije, zasnovane za maksimalno prepoznavnost in profesionalen prvi vtis.'
    },
    {
      id: 32,
      title: 'ProPepa – Polep vozil',
      categories: ['Branding'],
      description: 'Grafično oblikovanje in izvedba celostnega polepa voznega parka podjetja ProPepa. Dizajn poudarja prepoznavnost blagovne znamke na cesti z dosledno uporabo barvne palete, logotipa in kontaktnih podatkov na vozilih.',
      image: '/lovable-uploads/propepa-1.png',
      images: [
        '/lovable-uploads/propepa-1.png'
      ],
      technologies: ['Grafično oblikovanje', 'Polep vozil', 'Vizualna identiteta'],
      details: 'Grafično oblikovanje in izvedba celostnega polepa voznega parka podjetja ProPepa. Dizajn poudarja prepoznavnost blagovne znamke na cesti z dosledno uporabo barvne palete, logotipa in kontaktnih podatkov na vozilih.'
    },
    {
      id: 29,
      title: 'Jan Plestenjak - VINAKOPER',
      categories: ['Fotografija'],
      description: 'Energija in emocije Jana Plestenjaka na odru VINAKOPER 2025.',
      image: '/lovable-uploads/vinakoper-1.png',
      images: [
        '/lovable-uploads/vinakoper-1.png',
        '/lovable-uploads/vinakoper-2.png'
      ],
      technologies: ['Koncertna fotografija', 'Event fotografija'],
      details: 'Energija in emocije Jana Plestenjaka na odru VINAKOPER 2025.'
    },
    {
      id: 14,
      title: 'Lamborghini Revuelto',
      categories: ['Fotografija'],
      description: 'Fotografiranje športnega avtomobila Lamborghini Revuelto na lokaciji Malega Lošinja, z fokusom na eleganco in moč vozila.',
      image: '/lovable-uploads/lambo-5.jpg',
      images: [
        '/lovable-uploads/lambo-1.jpg',
        '/lovable-uploads/lambo-2.jpg',
        '/lovable-uploads/lambo-3.jpg',
        '/lovable-uploads/lambo-4.jpg',
        '/lovable-uploads/lambo-5.jpg',
        '/lovable-uploads/lambo-6.jpg',
        '/lovable-uploads/lambo-7.jpg',
        '/lovable-uploads/lambo-8.jpg',
        '/lovable-uploads/lambo-9.jpg'
      ],
      technologies: ['Outdoor fotografija', 'Avtomobilska fotografija'],
      details: 'Fotografiranje športnega avtomobila Lamborghini Revuelto na lokaciji Malega Lošinja, z fokusom na eleganco in moč vozila.'
    },
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
      id: 28,
      title: 'Mama Moves',
      categories: ['Spletna stran'],
      description: 'Za agencijo GREAT smo ustvarili UI in UX dizajn za prodajno spletno stran Mama Moves, optimizirano za visoke konverzije in prodajo. Dizajn vključuje prijazno navigacijo, pregledno strukturo vsebin in vizualne elemente, ki spodbujajo nakup ter angažiranost uporabnikov. Barvna paleta temelji na roza odtenkih, skladno z CGP, kar poudarja prepoznavnost blagovne znamke.',
      image: '/lovable-uploads/mama-moves-1.png',
      images: [
        '/lovable-uploads/mama-moves-1.png',
        '/lovable-uploads/mama-moves-2.png'
      ],
      technologies: ['Spletna stran', 'Grafično oblikovanje', 'UI/UX'],
      details: 'Za agencijo GREAT smo ustvarili UI in UX dizajn za prodajno spletno stran Mama Moves, optimizirano za visoke konverzije in prodajo. Dizajn vključuje prijazno navigacijo, pregledno strukturo vsebin in vizualne elemente, ki spodbujajo nakup ter angažiranost uporabnikov. Barvna paleta temelji na roza odtenkih, skladno z CGP, kar poudarja prepoznavnost blagovne znamke.'
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
      id: 24,
      title: 'NU Rally',
      categories: ['Social Media', 'Branding'],
      description: 'Oblikovanje objav za Instagram profil ameriškega kluba športnih in luksuznih avtomobilov NU Rally, z namenom ustvariti privlačno in prepoznavno vizualno podobo.',
      image: '/lovable-uploads/nu-rally-1.png',
      images: [
        '/lovable-uploads/nu-rally-1.png',
        '/lovable-uploads/nu-rally-2.png',
        '/lovable-uploads/nu-rally-3.png',
        '/lovable-uploads/nu-rally-4.png',
        '/lovable-uploads/nu-rally-5.png',
        '/lovable-uploads/nu-rally-6.png'
      ],
      technologies: ['Grafično oblikovanje', 'Social media design'],
      details: 'Oblikovanje objav za Instagram profil ameriškega kluba športnih in luksuznih avtomobilov NU Rally, z namenom ustvariti privlačno in prepoznavno vizualno podobo.'
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
      id: 27,
      title: 'Prodajni Banner Oglasi',
      categories: ['Branding', 'Social Media'],
      description: 'Izdelava prodajnih bannerjev za agencijo GREAT za podjetja kot so HOFER, Alpina, FitAkademija, Bestway, Toper, Elan, Vitapur in drugi. Bannerji so zasnovani na prodajnem nivoju, z močno vizualno privlačnostjo, jasnim sporočilom in strategijo, ki povečuje angažiranost ter zagotavlja visoko konverzijo.',
      image: '/lovable-uploads/ads-1.png',
      images: [
        '/lovable-uploads/ads-1.png',
        '/lovable-uploads/ads-2.png'
      ],
      technologies: ['Grafično oblikovanje', 'Banner design'],
      details: 'Izdelava prodajnih bannerjev za agencijo GREAT za podjetja kot so HOFER, Alpina, FitAkademija, Bestway, Toper, Elan, Vitapur in drugi. Bannerji so zasnovani na prodajnem nivoju, z močno vizualno privlačnostjo, jasnim sporočilom in strategijo, ki povečuje angažiranost ter zagotavlja visoko konverzijo.'
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
      id: 12,
      title: 'Miki Vlahovič',
      categories: ['Fotografija'],
      description: 'Outdoor in studijsko fotografiranje benda, ki združuje energijo nastopa in umetniško prefinjenost.',
      image: '/lovable-uploads/miki-1.jpg',
      images: [
        '/lovable-uploads/miki-1.jpg',
        '/lovable-uploads/miki-2.jpg',
        '/lovable-uploads/miki-3.jpg',
        '/lovable-uploads/miki-4.jpg',
        '/lovable-uploads/miki-5.jpg',
        '/lovable-uploads/miki-6.jpg',
        '/lovable-uploads/miki-7.jpg',
        '/lovable-uploads/miki-8.jpg',
        '/lovable-uploads/miki-9.jpg',
        '/lovable-uploads/miki-10.jpg'
      ],
      technologies: ['Fotografija', 'Studijsko fotografiranje', 'Outdoor fotografija'],
      details: 'Outdoor in studijsko fotografiranje benda, ki združuje energijo nastopa in umetniško prefinjenost.'
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
      id: 25,
      title: 'Forma By Eva',
      categories: ['Spletna stran'],
      description: 'Izdelava UI in UX dizajna za prodajno spletno stran, posebej zasnovane za maksimalno prodajnost in visoke konverzije.',
      image: '/lovable-uploads/forma-1.png',
      images: [
        '/lovable-uploads/forma-1.png',
        '/lovable-uploads/forma-2.png',
        '/lovable-uploads/forma-3.png'
      ],
      technologies: ['UI/UX dizajn', 'Spletna stran', 'Grafično oblikovanje'],
      details: 'Izdelava UI in UX dizajna za prodajno spletno stran, posebej zasnovane za maksimalno prodajnost in visoke konverzije. Dizajn vključuje intuitivno navigacijo, jasno strukturo produktov in vizualne elemente, ki usmerjajo uporabnika k nakupu. Poleg tega smo ustvarili platformo z bogato fitnes vsebino, ki uporabnikom nudi dodano vrednost in krepi angažiranost. Barvna paleta temelji na roza odtenkih, skladno z CGP, kar ustvarja prijetno in prepoznavno vizualno identiteto.'
    },
    {
      id: 10,
      title: 'Marija',
      categories: ['Fotografija'],
      description: 'Studijsko fotografiranje modela v vintage stilu, združenem z modernim pridihom. Fotografije izražajo preprostost, eleganco in toplino.',
      image: '/lovable-uploads/marija-10.jpg',
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
      id: 26,
      title: 'HK Olimpija',
      categories: ['Social Media', 'Branding'],
      description: 'Za agencijo GREAT smo ustvarili objave in Photoshop montaže za hokejski klub Olimpija, z namenom izboljšanja vizualne predstavitve in povečanja angažiranosti na družbenih omrežjih.',
      image: '/lovable-uploads/hk-olimpija-1.png',
      images: [
        '/lovable-uploads/hk-olimpija-1.png',
        '/lovable-uploads/hk-olimpija-2.png',
        '/lovable-uploads/hk-olimpija-3.jpg',
        '/lovable-uploads/hk-olimpija-4.jpg',
        '/lovable-uploads/hk-olimpija-5.jpg',
        '/lovable-uploads/hk-olimpija-6.jpg',
        '/lovable-uploads/hk-olimpija-7.jpg',
        '/lovable-uploads/hk-olimpija-8.jpg'
      ],
      technologies: ['Grafično oblikovanje', 'Photoshop', 'Social media design'],
      details: 'Za agencijo GREAT smo ustvarili objave in Photoshop montaže za hokejski klub Olimpija, z namenom izboljšanja vizualne predstavitve in povečanja angažiranosti na družbenih omrežjih.'
    },
    {
      id: 13,
      title: 'OrtoMG',
      categories: ['Fotografija'],
      description: 'Fotografiranje klinike OrtoMG v njihovih prostorih za spletno stran in socialna omrežja, z fokusom na profesionalnost in prijazno vzdušje.',
      image: '/lovable-uploads/ortomg-1.jpg',
      images: [
        '/lovable-uploads/ortomg-1.jpg',
        '/lovable-uploads/ortomg-2.jpg',
        '/lovable-uploads/ortomg-3.jpg',
        '/lovable-uploads/ortomg-4.jpg',
        '/lovable-uploads/ortomg-5.jpg',
        '/lovable-uploads/ortomg-6.jpg',
        '/lovable-uploads/ortomg-7.jpg',
        '/lovable-uploads/ortomg-8.jpg'
      ],
      technologies: ['Fotografija', 'Studijsko fotografiranje'],
      details: 'Fotografiranje klinike OrtoMG v njihovih prostorih za spletno stran in socialna omrežja, z fokusom na profesionalnost in prijazno vzdušje.'
    },
    {
      id: 15,
      title: 'Kolektor',
      categories: ['Branding'],
      description: 'Grafično oblikovanje strateških predstavitev podjetja Kolektor, ki zajemajo različne programe, veje in izdelke. Namen projekta je bil ustvariti pregledne, profesionalne in vizualno privlačne predstavitve, ki učinkovito komunicirajo vrednote in inovacije podjetja ter podpirajo poslovno strategijo.',
      image: '/lovable-uploads/kolektor-1.png',
      images: [
        '/lovable-uploads/kolektor-1.png'
      ],
      technologies: ['Grafično oblikovanje'],
      details: 'Grafično oblikovanje strateških predstavitev podjetja Kolektor, ki zajemajo različne programe, veje in izdelke. Namen projekta je bil ustvariti pregledne, profesionalne in vizualno privlačne predstavitve, ki učinkovito komunicirajo vrednote in inovacije podjetja ter podpirajo poslovno strategijo.'
    },
    {
      id: 16,
      title: 'Kolektor - Sejmi',
      categories: ['Branding'],
      description: 'Grafično oblikovanje promocijskih materialov za sejme, vključno z letaki, plakati in bannerji za ozadje, ki izražajo profesionalnost in prepoznavnost blagovne znamke.',
      image: '/lovable-uploads/kolektor-3.png',
      images: [
        '/lovable-uploads/kolektor-2.png',
        '/lovable-uploads/kolektor-3.png'
      ],
      technologies: ['Grafično oblikovanje', 'Tiskovine', 'Sejemski materiali'],
      details: 'Grafično oblikovanje promocijskih materialov za sejme, vključno z letaki, plakati in bannerji za ozadje, ki izražajo profesionalnost in prepoznavnost blagovne znamke.'
    },
    {
      id: 17,
      title: 'Dan Kolektorja 2023',
      categories: ['Video produkcija', 'Fotografija'],
      description: 'Video in foto produkcija celotnega dogodka, zajem vsega dogajanja, vzdušja in ključnih trenutkov za promocijo in arhiv.',
      image: '/lovable-uploads/kolektor-dan-1.png',
      images: [
        '/lovable-uploads/kolektor-dan-1.png',
        '/lovable-uploads/kolektor-dan-2.png',
        '/lovable-uploads/kolektor-dan-3.png'
      ],
      technologies: ['Video produkcija', 'Fotografija'],
      details: 'Video in foto produkcija celotnega dogodka, zajem vsega dogajanja, vzdušja in ključnih trenutkov za promocijo in arhiv.',
      videoUrl: 'https://www.youtube.com/embed/HsNxiX0whLg'
    },
    {
      id: 18,
      title: 'Kolektor Construction Zabavnik',
      categories: ['Branding'],
      description: 'Oblikovali smo zabavnik z pobarvankami, križankami in igrami za podjetje Kolektor Construction. Projekt je vključeval tudi ustvarjanje novih likov – superjunakov gradbincev, ki zabavnik naredijo unikatnega in privlačnega.',
      image: '/lovable-uploads/kolektor-construction-1.png',
      images: [
        '/lovable-uploads/kolektor-construction-1.png'
      ],
      technologies: ['Grafično oblikovanje', 'Ilustracija', 'Oblikovanje tiskovin'],
      details: 'Oblikovali smo zabavnik z pobarvankami, križankami in igrami za podjetje Kolektor Construction. Projekt je vključeval tudi ustvarjanje novih likov – superjunakov gradbincev, ki zabavnik naredijo unikatnega in privlačnega.'
    },
    {
      id: 19,
      title: 'Horjulski Kvintet',
      categories: ['Branding'],
      description: 'Oblikovali smo grafično podobo Horjulskega Kvinteta v črno-zlati kombinaciji, z logotipom v stilu Oberkrainarja, ki izraža tradicijo, eleganco in prepoznavnost ansambla.',
      image: '/lovable-uploads/horjulski-1.png',
      images: [
        '/lovable-uploads/horjulski-1.png',
        '/lovable-uploads/horjulski-2.png',
        '/lovable-uploads/horjulski-3.png',
        '/lovable-uploads/horjulski-4.png',
        '/lovable-uploads/horjulski-5.png',
        '/lovable-uploads/horjulski-6.png',
        '/lovable-uploads/horjulski-7.png'
      ],
      technologies: ['Grafično oblikovanje'],
      details: 'Oblikovali smo grafično podobo Horjulskega Kvinteta v črno-zlati kombinaciji, z logotipom v stilu Oberkrainarja, ki izraža tradicijo, eleganco in prepoznavnost ansambla.'
    },
    {
      id: 20,
      title: 'TMF Racing',
      categories: ['Branding'],
      description: 'Grafično oblikovanje in ilustracija mercha z unikatnim izrisom dirkalnika, ki izraža dinamiko, hitrost in prepoznavnost blagovne znamke.',
      image: '/lovable-uploads/tmf-1.png',
      images: [
        '/lovable-uploads/tmf-1.png',
        '/lovable-uploads/tmf-2.png'
      ],
      technologies: ['Grafično oblikovanje', 'Ilustracija', 'Merch design'],
      details: 'Grafično oblikovanje in ilustracija mercha z unikatnim izrisom dirkalnika, ki izraža dinamiko, hitrost in prepoznavnost blagovne znamke.'
    },
    {
      id: 21,
      title: 'Špilam Kolikor Sem Plačan',
      categories: ['Branding'],
      description: 'Grafično oblikovanje za znamko mercha ViliM, vključno s posebno ilustracijo za kolekcijo Špilam Kolikor Sem Plačan, ki združuje unikaten dizajn in prepoznaven slog.',
      image: '/lovable-uploads/vilim-1.png',
      images: [
        '/lovable-uploads/vilim-1.png',
        '/lovable-uploads/vilim-2.png',
        '/lovable-uploads/vilim-3.png'
      ],
      technologies: ['Grafično oblikovanje', 'Ilustracija', 'Merch design'],
      details: 'Grafično oblikovanje za znamko mercha ViliM, vključno s posebno ilustracijo za kolekcijo Špilam Kolikor Sem Plačan, ki združuje unikaten dizajn in prepoznaven slog.'
    },
    {
      id: 22,
      title: 'Highlife Club – Instagram',
      categories: ['Branding', 'Social Media'],
      description: 'Oblikovanje vizualnih objav za Instagram profil Highlife Club, z namenom ustvariti privlačno in konsistentno grafično podobo profila.',
      image: '/lovable-uploads/highlife-1.png',
      images: [
        '/lovable-uploads/highlife-1.png',
        '/lovable-uploads/highlife-2.png',
        '/lovable-uploads/highlife-3.png',
        '/lovable-uploads/highlife-4.png',
        '/lovable-uploads/highlife-5.png',
        '/lovable-uploads/highlife-6.png'
      ],
      technologies: ['Grafično oblikovanje', 'Social media design'],
      details: 'Oblikovanje vizualnih objav za Instagram profil Highlife Club, z namenom ustvariti privlačno in konsistentno grafično podobo profila.'
    },
    {
      id: 23,
      title: 'ASTECH',
      categories: ['Branding'],
      description: 'Oblikovanje jumbo plakata za Agencijo GO4 Digit, ki združuje jasen vizual in močno sporočilo za učinkovito promocijo blagovne znamke ASTECH.',
      image: '/lovable-uploads/astech-1.png',
      images: [
        '/lovable-uploads/astech-1.png'
      ],
      technologies: ['Grafično oblikovanje', 'Tiskovine'],
      details: 'Oblikovanje jumbo plakata za Agencijo GO4 Digit, ki združuje jasen vizual in močno sporočilo za učinkovito promocijo blagovne znamke ASTECH.'
    }
  ];

  // Get unique categories
  const categories = ['Vse', ...Array.from(new Set(projects.flatMap(project => project.categories)))];

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = selectedFilter === 'Vse' 
      ? projects 
      : projects.filter(project => project.categories.includes(selectedFilter));

    // Sort based on selected option
    switch (sortBy) {
      case 'cas':
        return [...filtered].sort((a, b) => b.id - a.id); // Newest first
      case 'abeceda':
        return [...filtered].sort((a, b) => a.title.localeCompare(b.title, 'sl'));
      case 'priporoceno':
      default:
        return filtered; // Keep the mixed order
    }
  }, [projects, selectedFilter, sortBy]);

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
          <div className="flex flex-col gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
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
            
            {/* Sort Dropdown */}
            <div className="flex justify-center">
              <div className="glass rounded-full px-4 py-2 border border-white/20">
                <div className="flex items-center gap-3">
                  <span className="text-white/80 text-sm">Razvrsti:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px] border-0 bg-transparent text-white focus:ring-0 focus:ring-offset-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/20 bg-black/90 text-white">
                      <SelectItem value="priporoceno" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">
                        Priporočeno
                      </SelectItem>
                      <SelectItem value="cas" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">
                        Po času
                      </SelectItem>
                      <SelectItem value="abeceda" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">
                        Po abecedi
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProjects.map((project, index) => (
              <div
                key={project.id}
                className="group glass rounded-2xl overflow-hidden hover:glow-purple transition-all duration-500 hover:scale-105 cursor-pointer animate-scale-up"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
              const project = filteredAndSortedProjects.find(p => p.id === selectedProject);
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

                    {project.videoUrl && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold galactic-purple mb-4">
                          Video
                        </h3>
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src={project.videoUrl}
                            title={project.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                    
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
