export interface Tour {
  slug: string
  title: string
  category: string
  location: string
  duration: string
  description: string
  longDescription: string
  image: string
  highlights: string[]
  includes: string[]
}

export const tours: Tour[] = [
  {
    slug: 'puskas-arena-tour',
    title: 'Puskás Aréna – Stadionlátogatás',
    category: 'Labdarúgás',
    location: 'Budapest, XIV. kerület',
    duration: '1,5–2 óra',
    description:
      'Magyarország büszkesége – a világ egyik legmodernebb stadionja. Látogasson el az öltözőkbe, a pályára és fedezze fel a Magyar Labdarúgó-szövetség történetét.',
    longDescription:
      'A Puskás Aréna 2019-ben nyílt meg, és azóta Közép-Európa egyik legnagyobb és legmodernebb stadionja. 67 889 férőhelyes kapacitásával otthont ad a magyar válogatott mérkőzéseinek, Bajnokok Ligája-meccseknek, valamint nagyszabású kulturális és sportrendezvényeknek. Túránk során bejárjuk az öltözőket, a sajtótermeket, a VIP-szinteket és közelről megnézhetjük a hibátlan gyepszőnyeget. Tapasztalt idegenvezetőink Puskás Ferenc legendás karrierjéről és a magyar futball aranykoráról is megemlékeznek.',
    image: '/images/tour-football.jpg',
    highlights: [
      'Öltöző- és labdarúgó-csatorna látogatása',
      'VIP-szintek és páholyok megtekintése',
      'Sajtóterem és interjúzóna',
      'Pályaszéli fotózási lehetőség',
      'Magyar futballtörténeti kiállítás',
    ],
    includes: [
      'Szakképzett idegenvezető',
      'Belépő a stadionba',
      'Kiscsoportos létszám (max. 15 fő)',
      'Magyar és angol nyelvű tájékoztatás',
    ],
  },
  {
    slug: 'hungaroring-f1-tour',
    title: 'Hungaroring – F1 Körverseny Túra',
    category: 'Motorsport',
    location: 'Mogyoród',
    duration: '2,5–3 óra',
    description:
      'A Magyar Nagydíj otthona 1986 óta. Járjon be a Forma–1 legendás pit lane-jébe, a paddockba és a csapatgarázsokba – a versenyidőszakon kívül is egyedülálló élmény.',
    longDescription:
      'A Hungaroring 1986 óta ad otthont a Formula–1 Magyar Nagydíjának. A 4,381 km hosszú pálya Budapest közelében, festői dombok között kanyarog. Egyedi túránk lehetővé teszi, hogy a paddockon, a pit lane-en és a csapatgarázsokon keresztül megnézzük azokat a helyszíneket, ahol a világ legjobb pilótái mérkőznek évente. Idegenvezetőnk bemutatja a pálya fejlődését, a nevezetes futamokat és azokat a technológiai csodákat, amelyek minden versenyidényt lehetővé tesznek.',
    image: '/images/tour-motorsport.jpg',
    highlights: [
      'Pit lane és versenygarázsok bejárása',
      'Paddock és csapatépítmények megtekintése',
      'Rajtrácsozás szimulációja',
      'Körverseny-stratégiai bemutató',
      'F1 Magyar Nagydíj fotóarchívum',
    ],
    includes: [
      'Szakképzett motorsport-idegenvezető',
      'Belépő a pályaterületre',
      'Kiscsoportos látogatás (max. 12 fő)',
      'Magyar és angol nyelvű magyarázat',
    ],
  },
  {
    slug: 'duna-arena-vizisport',
    title: 'Duna Aréna – Vízisport-túra',
    category: 'Vízisport',
    location: 'Budapest, XIII. kerület',
    duration: '1,5 óra',
    description:
      'A 2017-es Úszó-világbajnokság helyszíne. Fedezze fel az olimpiai mérető medencéket, a versenyuszoda kulisszatitkait és az uszodai versenyrendszer részleteit.',
    longDescription:
      'A Duna Aréna Európa egyik legmodernebb uszodája, amelyet a 2017-es Budapesti Úszó-világbajnokságra építettek. A 10 000 nézőt befogadó létesítmény egy 50 méteres versenymedencét, egy bemelegítőmedencét és egy ugrómedencét tartalmaz. Túránk során bejárjuk az olimpiai medencéket, a versenyuszodai technológiai rendszereket és az életmentők munkaállásait, miközben halljuk a legendás magyar úszók történeteit, akik világ- és olimpiai bajnoki eredményeket értek el.',
    image: '/images/tour-aquatics.jpg',
    highlights: [
      'Olimpiai méretű versenymedence megtekintése',
      'Technológiai rendszerek bemutatója',
      'Éremtörténeti kiállítás',
      'Magyar úszólegendák históriái',
      'Ugrómedence közelről',
    ],
    includes: [
      'Szakképzett idegenvezető',
      'Belépő a létesítménybe',
      'Kiscsoportos látogatás (max. 15 fő)',
      'Magyar és angol nyelvű tájékoztatás',
    ],
  },
  {
    slug: 'mvm-dome-kezilabda',
    title: 'MVM Dome – Kézilabda-aréna Túra',
    category: 'Kézilabda',
    location: 'Budapest',
    duration: '1–1,5 óra',
    description:
      'Budapest legújabb multifunkcionális arénája. Ahol a magyar kézilabda-válogatott házigazdaként lép pályára – ez az a hely, ahol a legszenvedélyesebb tömeg a sportot ünnepli.',
    longDescription:
      'Az MVM Dome 2023-ban nyílt meg és Magyarország legnagyobb fedett arénája. A létesítmény 20 000 néző befogadására képes, és otthont ad a Kézilabda Európa-bajnokságoknak, NHL-mérkőzéseknek, koncerteknek és számos más eseménynek. Túránk bemutatja a sportlétesítmény modern infrastruktúráját, a pályavilágítási rendszereket, az öltözőket, a VIP-szinteket és azt, hogy miként zajlik egy kézilabda-mérkőzés előkészítése.',
    image: '/images/tour-handball.jpg',
    highlights: [
      'Főarénaterem és sportpadló megtekintése',
      'VIP-szint és páholytúra',
      'Öltözők és edzőterem',
      'Kézilabda-történeti tárlat',
      'Hangrendszer és fénytechnikai bemutató',
    ],
    includes: [
      'Tapasztalt idegenvezető',
      'Belépő az arénába',
      'Kiscsoportos élmény (max. 15 fő)',
      'Magyar és angol nyelvű kísérés',
    ],
  },
  {
    slug: 'nemzeti-atletikai-kozpont',
    title: 'Nemzeti Atlétikai Központ – Túra',
    category: 'Atlétika',
    location: 'Budapest',
    duration: '1,5–2 óra',
    description:
      'A 2023-as Atlétikai Világbajnokság helyszíne. Egy rendkívüli létesítmény, ahol a világ legjobb atléták írtak történelmet. Tárja fel az arénát belülről.',
    longDescription:
      'A Nemzeti Atlétikai Központot a 2023-as Budapesti Atlétikai Világbajnokságra adták át – az első VB volt, amelyet Közép-Kelet-Európában rendeztek. Az arénában 35 000 néző kapott helyet, és a verseny minden rekordot megdöntött mind szervezési, mind sporteredményi szempontból. Túránk során bejárjuk a futópályát, a mezőnyszámok helyszíneit, a sajtóközpontot és megismerjük a VB szervezésének folyamatát, miközben az arany-, ezüst- és bronzérmesek történeteit hallgatjuk.',
    image: '/images/tour-athletics.jpg',
    highlights: [
      'Tartán futópálya és ugrógödör megtekintése',
      'Dobókörök és rúdugrópálya közelről',
      'Sajtóközpont és interjúzóna',
      '2023-as VB fotókiállítás',
      'Rekordok és eredmények bemutatása',
    ],
    includes: [
      'Szakképzett idegenvezető',
      'Belépő a létesítménybe',
      'Kiscsoportos látogatás (max. 15 fő)',
      'Magyar és angol nyelvű tájékoztatás',
    ],
  },
  {
    slug: 'pannon-golf-tura',
    title: 'Pannon Golf – Sportlátogatás',
    category: 'Golf',
    location: 'Alcsútdoboz',
    duration: '2–3 óra',
    description:
      'Magyarország prémium golfpályájának felfedezése. Ismerje meg a hazai golfkultúrát, a pálya tervezési elveit és a versenyszerű golf hátterét.',
    longDescription:
      'A Pannon Golf & Country Club Alcsútdoboznál, festői dombvidéken terül el. Magyarország egyik legrangosabb golfklubja, ahol nemzeti és regionális bajnokságokat rendeznek. Látogatásunk során bemutatjuk a 18 lyukas versenykarikás pálya tervezési koncepcióját, a pályakarbantartás modern technológiáját, a klubház golfakadémiáját és azokat a sportolókat, akik a hazai golf fejlődéséhez járultak hozzá.',
    image: '/images/tour-golf.jpg',
    highlights: [
      'Golfpálya tervező bejárás és magyarázat',
      'Greens és fairwayek megtekintése',
      'Pályakarbantartási technológia bemutatása',
      'Golfakadémia és edzőberendezések',
      'Magyar golfverseny-história',
    ],
    includes: [
      'Tapasztalt golfszakértő kísérő',
      'Pályalátogatási jogosultság',
      'Kiscsoportos élmény (max. 10 fő)',
      'Magyar és angol tájékoztatás',
    ],
  },
]

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug)
}

export const tourCategories = [
  'Összes',
  'Labdarúgás',
  'Motorsport',
  'Vízisport',
  'Kézilabda',
  'Atlétika',
  'Golf',
]
