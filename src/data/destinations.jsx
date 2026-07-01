import React from 'react';
import { Map, Heart, Users, Sun } from 'lucide-react';

export const destinations = [
  { 
    id: 1, 
    title: 'Char Dham Yatra (Special: 16-09-2026)', 
    icon: <Map size={32} color="var(--brand-accent)" />, 
    image: '/assets/chardham_yatra.png', 
    duration: 'Extensive', 
    description: 'The ultimate spiritual journey to the majestic shrines.',
    specialty: 'The complete circuit including Haridwar, Rishikesh, Badrinath, Kedarnath, Gangotri, and Yamunotri. A comprehensive 12+ day pilgrimage offering complete spiritual cleansing.',
    history: 'The Char Dham Yatra was defined by the great 8th-century philosopher Adi Shankaracharya. It is believed that undertaking this journey washes away the sins of a lifetime and opens the doors to Moksha (liberation).',
    explore: ['Yamunotri Temple & Hot Springs', 'Gangotri Temple & Bhagirathi River', 'Kedarnath Jyotirlinga Trek', 'Badrinath Temple & Mana Village', 'All Pancha Prayags']
  },
  { 
    id: 2, 
    title: 'Kedarnath', 
    icon: <Sun size={32} color="var(--brand-accent)" />, 
    image: '/assets/kedarnath.png', 
    duration: 'Flexible', 
    description: 'The ancient temple dedicated to Lord Shiva set in the snowy Himalayas.',
    specialty: 'A highly sacred Jyotirlinga, featuring a challenging but deeply rewarding mountain trek to the ancient stone temple of Lord Shiva.',
    history: 'Built by the Pandavas and revived by Adi Shankaracharya, Kedarnath is one of the twelve Jyotirlingas. It survived the massive 2013 flash floods, standing as a testament to divine endurance.',
    explore: ['Gaurikund (Starting Point)', 'Kedarnath Temple Darshan', 'Bhairavnath Temple', 'Chorabari Tal (Gandhi Sarovar)', 'Samadhi of Adi Shankaracharya']
  },
  { 
    id: 3, 
    title: 'Badrinath', 
    icon: <Heart size={32} color="var(--brand-accent)" />, 
    image: '/assets/badrinath.png', 
    duration: 'Flexible', 
    description: 'The vibrant, colorful temple in a dramatic mountain valley.',
    specialty: 'One of the holiest shrines for Vaishnavites, situated beautifully on the banks of the Alaknanda river.',
    history: 'Established as a major pilgrimage site in the 9th century by Adi Shankaracharya. The black stone idol of Lord Badrinarayan is believed to be self-manifested (Swayambhu) from the Alaknanda river.',
    explore: ['Badrinath Temple Darshan', 'Tapt Kund (Hot Springs)', 'Brahma Kapal for Ancestral Rites', 'Mana Village', 'Neelkanth Peak View']
  },
  { 
    id: 4, 
    title: 'Amarnath', 
    icon: <Sun size={32} color="var(--brand-accent)" />, 
    image: '/assets/amarnath.png', 
    duration: 'Flexible', 
    description: 'The sacred ice Shiva Lingam in the holy Himalayan cave.',
    specialty: 'A legendary pilgrimage to witness the naturally forming ice stalagmite, representing Lord Shiva.',
    history: 'According to legend, this is the cave where Lord Shiva explained the secret of life and eternity to Goddess Parvati. Discovered by a Muslim shepherd named Buta Malik in the 15th century.',
    explore: ['Pahalgam Base Camp', 'Chandanwari', 'Sheshnag Lake', 'Panchtarni', 'Amarnath Holy Cave Darshan']
  },
  { 
    id: 5, 
    title: 'Haridwar', 
    icon: <Users size={32} color="var(--brand-accent)" />, 
    image: '/assets/haridwar.png', 
    duration: 'Flexible', 
    description: 'The holy Har Ki Pauri ghats and the grand Ganga Aarti.',
    specialty: 'The Gateway to the Gods. Famous for the mesmerizing evening Ganga Aarti and spiritual bathing ghats.',
    history: 'One of the seven holiest places in Hinduism. It is one of the four sites of the Kumbh Mela. Mythology states it is the place where drops of Amrit (elixir of immortality) accidentally spilled from the pitcher carried by Garuda.',
    explore: ['Har Ki Pauri Ghat', 'Evening Ganga Aarti', 'Mansa Devi Temple (Ropeway)', 'Chandi Devi Temple', 'Bharat Mata Mandir']
  },
  { 
    id: 6, 
    title: 'Gangotri', 
    icon: <Map size={32} color="var(--brand-accent)" />, 
    image: '/assets/gangothri.png', 
    duration: 'Flexible', 
    description: 'The spiritual origin of the sacred River Ganges.',
    specialty: 'A deeply peaceful Himalayan shrine surrounded by pine forests, marking the descent of the holy river.',
    history: 'Built in the 18th century by Amar Singh Thapa. It marks the location where Goddess Ganga descended to Earth to absolve the sins of King Bhagirath’s ancestors after his intense penance.',
    explore: ['Gangotri Temple', 'Bhagirath Shila', 'Surya Kund', 'Pandava Gufa', 'Gaumukh Trek (Optional Base)']
  },
  { 
    id: 7, 
    title: 'Yamunotri', 
    icon: <Sun size={32} color="var(--brand-accent)" />, 
    image: '/assets/yamunothri.png', 
    duration: 'Flexible', 
    description: 'The sacred source of the Yamuna River.',
    specialty: 'Features natural thermal hot springs (Surya Kund) where pilgrims cook rice as divine offerings.',
    history: 'Dedicated to Goddess Yamuna, sister of Yama (God of Death). Bathing in the holy waters here is believed to protect one from a painful death. The temple was originally built by Maharani Gularia of Jaipur.',
    explore: ['Yamunotri Temple', 'Surya Kund (Hot Springs)', 'Divya Shila', 'Janki Chatti Trek', 'Hanuman Chatti']
  },
  { 
    id: 8, 
    title: 'Triyuginarayan Temple', 
    icon: <Heart size={32} color="var(--brand-accent)" />, 
    image: '/assets/Triyuginarayan.png', 
    duration: 'Flexible', 
    description: 'The holy site of Lord Shiva and Goddess Parvati\'s marriage.',
    specialty: 'An ancient stone temple featuring an eternal flame (Akhand Dhuni) that has been burning since the divine marriage.',
    history: 'The exact location where Lord Shiva and Goddess Parvati were married in the presence of Lord Vishnu. The Akhand Dhuni (eternal flame) has supposedly been burning continuously since the three Yugas (Tri-yugi).',
    explore: ['Akhand Dhuni (Eternal Flame)', 'Brahma Shila', 'Saraswati Kund', 'Rudra Kund', 'Vishnu Kund']
  },
  { 
    id: 9, 
    title: 'Guptkashi', 
    icon: <Map size={32} color="var(--brand-accent)" />, 
    image: '/assets/Guptkashi.png', 
    duration: 'Flexible', 
    description: 'Home to the ancient Vishwanath Temple.',
    specialty: 'A significant stop on the Kedarnath route, historically known as the hidden Kashi.',
    history: 'Its name translates to "Hidden Kashi." According to legend, Lord Shiva hid here from the Pandavas by taking the form of a bull (Nandi) before escaping to Kedarnath.',
    explore: ['Vishwanath Temple', 'Manikarnik Kund', 'Ardh Narishwar Temple', 'Stunning Views of Chaukhamba Peaks', 'Kedarnath Helicopter Base']
  },
  { 
    id: 10, 
    title: 'Ukhimath', 
    icon: <Sun size={32} color="var(--brand-accent)" />, 
    image: '/assets/Ukhimath.png', 
    duration: 'Flexible', 
    description: 'The revered winter seat of Lord Kedarnath.',
    specialty: 'During harsh winters when Kedarnath is closed, the divine idol is moved here for worship.',
    history: 'Named after Usha, the daughter of Banasur, who married Aniruddha (Lord Krishna’s grandson) here. It becomes the center of pilgrimage during the six winter months when Kedarnath is snowbound.',
    explore: ['Omkareshwar Temple', 'Winter Darshan of Lord Kedarnath', 'Usha and Aniruddha Marriage Site', 'Madhyamaheshwar Winter Darshan', 'Himalayan Sunrise Views']
  },
  { 
    id: 11, 
    title: 'Mana Village', 
    icon: <Users size={32} color="var(--brand-accent)" />, 
    image: '/assets/mana_village.png', 
    duration: 'Flexible', 
    description: 'The last village of India featuring Vyasa and Ganesha Caves.',
    specialty: 'A historically rich village on the Tibetan border, where the Mahabharata was famously dictated.',
    history: 'Known as the "Last Indian Village" on the Indo-Tibet border. It is deeply connected to the epic Mahabharata, as Sage Vyasa composed the epic here while Lord Ganesha wrote it down.',
    explore: ['Vyasa Gufa (Cave)', 'Ganesha Gufa (Cave)', 'Bhim Pul (Rock Bridge)', 'Origin of Saraswati River', 'Vasudhara Falls Trek']
  },
  { 
    id: 12, 
    title: 'Pandukeshwar', 
    icon: <Heart size={32} color="var(--brand-accent)" />, 
    image: '/assets/Pandukeshwar.png', 
    duration: 'Flexible', 
    description: 'Home to the Yogadhyan Badri Temple.',
    specialty: 'The winter abode for the Utsava Murti (festival deity) of Badrinath, steeped in ancient Pandava history.',
    history: 'Established by King Pandu (father of the Pandavas). He meditated here to atone for a curse. The bronze image of Lord Vishnu (Uddhava) is brought here from Badrinath during the winter.',
    explore: ['Yogadhyan Badri Temple', 'Ancient Copper Plate Inscriptions', 'Alaknanda River Views', 'Winter Seat Darshan', 'Pandava Meditation Sites']
  },
  { 
    id: 13, 
    title: 'Joshimath', 
    icon: <Map size={32} color="var(--brand-accent)" />, 
    image: '/assets/Joshimath.png', 
    duration: 'Flexible', 
    description: 'One of the four monasteries established by Adi Shankaracharya.',
    specialty: 'A highly significant spiritual hub and the winter seat of Lord Badrinath.',
    history: 'Established by Adi Shankaracharya in the 8th century as one of the four cardinal mathas (monasteries). It houses the sacred Narasimha Temple where the arm of the deity is believed to be naturally thinning over time.',
    explore: ['Narasimha Temple', 'Shankaracharya Math', 'Kalpavriksha (Ancient Mulberry Tree)', 'Auli Ropeway', 'Bhavishya Kedar Temple']
  },
  { 
    id: 14, 
    title: 'Rudraprayag', 
    icon: <Sun size={32} color="var(--brand-accent)" />, 
    image: '/assets/Rudraprayag.png', 
    duration: 'Flexible', 
    description: 'The confluence of the Mandakini and Alaknanda rivers.',
    specialty: 'One of the Pancha Prayags, offering dramatic views of two powerful rivers merging.',
    history: 'Named after Lord Shiva\'s fierce form (Rudra). Legend says Sage Narada performed rigorous penance here to master music, and Lord Shiva blessed him by appearing as Rudra.',
    explore: ['Confluence of Mandakini & Alaknanda', 'Rudraprayag Temple', 'Koteshwar Mahadev Temple', 'Dhari Devi Temple', 'Stunning Valley Views']
  },
  { 
    id: 15, 
    title: 'Karnaprayag', 
    icon: <Map size={32} color="var(--brand-accent)" />, 
    image: '/assets/Karnaprayag.png', 
    duration: 'Flexible', 
    description: 'The sacred confluence of the Alaknanda and Pindar rivers.',
    specialty: 'A deeply holy river confluence named after Karna from the Mahabharata.',
    history: 'The site where Karna (from the Mahabharata) meditated to please the Sun God and received his impenetrable armor (Kavach) and earrings (Kundal). Swami Vivekananda also meditated here for 18 days.',
    explore: ['Confluence of Alaknanda & Pindar', 'Karna Temple', 'Uma Devi Temple', 'Nauti Village (Origin of Nanda Raj Jat)', 'Himalayan Ghats']
  },
  { 
    id: 16, 
    title: 'Nandaprayag', 
    icon: <Heart size={32} color="var(--brand-accent)" />, 
    image: '/assets/Nandaprayag.png', 
    duration: 'Flexible', 
    description: 'The holy confluence of the Alaknanda and Nandakini rivers.',
    specialty: 'A peaceful, serene river meeting point offering deeply spiritual vibrations.',
    history: 'Named after the Yadava King Nanda (foster father of Lord Krishna). He is believed to have performed a massive Yagna (fire sacrifice) here to attain divine blessings.',
    explore: ['Confluence of Alaknanda & Nandakini', 'Gopalji Temple', 'Chandika Mata Temple', 'Trekking to Roopkund', 'Peaceful Riverside Meditation']
  },
  { 
    id: 17, 
    title: 'Vishnuprayag', 
    icon: <Sun size={32} color="var(--brand-accent)" />, 
    image: '/assets/Vishnuprayag.png', 
    duration: 'Flexible', 
    description: 'The beautiful confluence of the Alaknanda and Dhauliganga rivers.',
    specialty: 'The first of the Pancha Prayags, surrounded by steep, dramatic, and rocky Himalayan gorges.',
    history: 'Named after Lord Vishnu, who appeared here to bless Sage Narada after his intense meditation. It is the first confluence point on the Alaknanda river originating from Badrinath.',
    explore: ['Confluence of Alaknanda & Dhauliganga', 'Vishnu Temple (Built by Ahilya Bai)', 'Kagbhusandi Lake Trek', 'Valley of Flowers Base Route', 'Suspension Bridge Views']
  },
  { 
    id: 18, 
    title: 'Devprayag', 
    icon: <Users size={32} color="var(--brand-accent)" />, 
    image: '/assets/Devprayag.png', 
    duration: 'Flexible', 
    description: 'The confluence of the Alaknanda and Bhagirathi rivers.',
    specialty: 'The most revered prayag where the two rivers merge to officially become the holy Ganges.',
    history: 'The most significant of the Pancha Prayags. According to legend, Lord Rama and King Dasharatha did penance here. The ancient Raghunathji Temple is one of the 108 Divya Desams of Lord Vishnu.',
    explore: ['Origin Point of the Holy Ganga', 'Raghunathji Temple', 'Dashrathshila', 'Suspension Bridges', 'Holy Bathing Ghats']
  },
  { 
    id: 19, 
    title: 'Delhi Akshardham', 
    icon: <Map size={32} color="var(--brand-accent)" />, 
    image: '/assets/delhi_akshardham.png', 
    duration: 'Flexible', 
    description: 'A magnificent spiritual center on the Yamuna banks.',
    specialty: 'An architectural marvel showcasing millennia of traditional Hindu and Indian culture, spirituality, and architecture.',
    history: 'Opened in 2005, this massive temple complex was constructed by BAPS Swaminarayan Sanstha. It holds the Guinness World Record as the World\'s Largest Comprehensive Hindu Temple.',
    explore: ['Main Mandir (Temple)', 'Sahajanand Water Show', 'Abhishek Mandap', 'Cultural Boat Ride (Sanskruti Vihar)', 'Thematic Gardens']
  },
  { 
    id: 20, 
    title: 'Brahma Kapal', 
    icon: <Heart size={32} color="var(--brand-accent)" />, 
    image: '/assets/Brahma_Kapal.png', 
    duration: 'Flexible', 
    description: 'The sacred platform in Badrinath for ancestors\' liberation.',
    specialty: 'The highly auspicious location on the banks of the Alaknanda for performing Pind Daan rituals.',
    history: 'According to mythology, when Lord Shiva chopped off the fifth head of Lord Brahma, it stuck to Shiva\'s trident and finally fell off here. It is believed that performing rituals here grants Moksha to departed ancestors.',
    explore: ['Pind Daan Rituals', 'Alaknanda River Ghat', 'Badrinath Temple Proximity', 'Spiritual Gatherings', 'Priestly Guided Ceremonies']
  },
  { 
    id: 21, 
    title: 'Varanasi Yatra', 
    icon: <Sun size={32} color="var(--brand-accent)" />, 
    image: '/assets/varanasi_kashi.png', 
    duration: 'Flexible', 
    description: 'Experience the holy ghats and Aarti of the Ganges in Kashi.',
    specialty: 'The spiritual capital of India, known for its powerful evening Aartis and deep connection to Lord Shiva.',
    history: 'One of the world\'s oldest continually inhabited cities. Believed to be founded by Lord Shiva himself, Kashi is the ultimate pilgrimage destination for Hindus seeking liberation from the cycle of rebirth.',
    explore: ['Dashashwamedh Ghat (Aarti)', 'Kashi Vishwanath Temple', 'Manikarnika Ghat', 'Sarnath (Buddhist Heritage)', 'Sunrise Ganges Boat Ride']
  },
  { 
    id: 22, 
    title: 'Ayodhya', 
    icon: <Map size={32} color="var(--brand-accent)" />, 
    image: '/assets/Ayodhya.png', 
    duration: 'Flexible', 
    description: 'Visit the majestic, sacred birthplace of Lord Rama.',
    specialty: 'A grand and historical city where devotees can seek blessings at the majestic Ram Mandir.',
    history: 'The legendary capital of the Kosala Kingdom and the birthplace of Lord Rama (Ram Janmabhoomi). It is one of the seven most important pilgrimage sites (Saptapuri) for Hindus.',
    explore: ['Ram Janmabhoomi Temple', 'Hanuman Garhi', 'Kanak Bhawan', 'Nageshwarnath Temple', 'Saryu River Ghats (Aarti)']
  },
  { 
    id: 23, 
    title: 'Rishikesh', 
    icon: <Users size={32} color="var(--brand-accent)" />, 
    image: '/assets/rishikesh.png', 
    duration: 'Flexible', 
    description: 'Find peace at the yoga capital of the world by the Ganges.',
    specialty: 'A beautiful, calm town at the foothills of the Himalayas, perfect for meditation and yoga.',
    history: 'Known as the "Yoga Capital of the World." Legend says Lord Rama did penance here for killing Ravana, and his brother Lakshmana crossed the river using a jute rope bridge (origin of Lakshman Jhula).',
    explore: ['Lakshman Jhula & Ram Jhula', 'Triveni Ghat Aarti', 'Beatles Ashram', 'Neelkanth Mahadev Temple', 'River Rafting & Yoga Centers']
  }
];
