export interface Advisor {
  id: string;
  name: string;
  initials: string;
  role: 'Principal' | 'Partner' | 'Advisor';
  title: string;
  credential: string;
  bio: string[];
  tags: string[];
  photo?: string;
}

export const advisors: Advisor[] = [
  {
    id: 'anil-gupta',
    name: 'Anil Gupta',
    initials: 'AG',
    role: 'Principal',
    title: 'Director & Principal Consultant',
    credential: 'Former Chairman & Managing Director, NEC Technologies India',
    bio: [
      'Anil Gupta founded Reiwa after more than four decades at the interface of Japanese and Indian business. He holds a B.Tech from IIT Delhi, completed intensive Japanese-language study at International Christian University in Tokyo, and undertook postgraduate research in computer science at the University of Tsukuba. He is fluent in English and Japanese.',
      'Across thirty-plus years in senior management, Anil served as Vice President of Strategic Alliance, Japan, at HCL Technologies — where he established the NEC–HCL joint venture and drove its growth as CEO. He went on to serve as Chairman and Managing Director of NEC Technologies India.',
      'His background is unusual: alongside his corporate career, he has been a research scholar, a part-time English and yoga teacher in Japan, and a long-time student of Japanese culture and society. This breadth is the substrate of his counsel. He is sought out particularly for his read of senior Japanese executives — a read grounded in four decades of working with them, in their language.',
    ],
    tags: ['Japan–India strategy', 'Cross-border M&A', 'Market entry', 'Senior executive counsel'],
    photo: '/people/Anil-Gupta-rotated.jpg',
  },
  {
    id: 'mukul-jain',
    name: 'Mukul Jain',
    initials: 'MJ',
    role: 'Partner',
    title: 'Partner, Technology',
    credential: 'Founder & CEO, MTree Software; former COO, GlobalLogic',
    bio: [
      'Four decades building software products and scaling technology services. IIT Kanpur in Electrical Engineering. Led R&D at HCL across compilers, operating systems, multi-CPU architectures, and business software.',
      'As COO of GlobalLogic, grew the workforce from 400 to 3,000 in four years, establishing development hubs across India and Ukraine. Now Founder and CEO of MTree Software, focused on computer vision and NLP using deep neural networks.',
      'At Reiwa, Mukul advises on technology strategy, R&D partnerships, and the technical due-diligence aspects of cross-border transactions.',
    ],
    tags: ['Technology strategy', 'Product R&D', 'Scaling operations', 'Technical due diligence'],
  },
  {
    id: 'tom-logan',
    name: 'Tom Logan',
    initials: 'TL',
    role: 'Partner',
    title: 'Partner, Asian Business Development',
    credential: '40+ years in Japan and East Asia; deep Japanese ministerial networks',
    bio: [
      'Fluent in English and Japanese. Loyola Marymount University, intensive Japanese at International Christian University, business research at Waseda University, executive education at the Indian School of Business.',
      'Over twenty years in Tokyo — The Austin Company, PAE International, AeA — building partnerships between Japanese and non-Japanese entities in high-tech and financial services.',
      "Tom's work regularly involves navigation of Japanese ministries, agencies, and political landscapes. He has assisted numerous foreign firms in achieving inward-investment objectives in Japan.",
    ],
    tags: ['Japan market entry', 'Cross-border partnerships', 'Government relations', 'Inward investment'],
  },
  {
    id: 'ken-sugata',
    name: 'Ken Sugata',
    initials: 'KS',
    role: 'Partner',
    title: 'Partner, IT & Global Business',
    credential: '36 years in Japanese enterprise IT; former executive at NEC Solution Innovators',
    bio: [
      "Master's in Electrical Engineering, Kanazawa University. Thirty-six years in IT systems development, sales, and management inside major Japanese technology firms.",
      'As a corporate executive at NEC Solution Innovators, led global cloud solutions and telecom systems development, and drove collaboration with overseas subsidiaries and partners.',
      'At Reiwa, Ken provides the view from inside a Japanese enterprise — how Japanese buyers evaluate technology partners, and how global firms can position themselves to be evaluated well.',
    ],
    tags: ['Japanese enterprise IT', 'Technology partnerships', 'Japan-side buyer perspective'],
  },
  {
    id: 'prakash-mathur',
    name: 'Prakash Mathur',
    initials: 'PM',
    role: 'Partner',
    title: 'Partner, Executive Coaching',
    credential: 'Founder & CEO, Transformative Training (Singapore); ICF Professional Certified Coach',
    bio: [
      'MBA, PCC (ICF). Three decades across Sony, Brooke Bond, Cadbury, IBM-SBM, the World Health Organisation, and Deloitte Consulting. Tutor at the National University of Singapore; Senior Trainer Consultant at the British Council\'s Professional Development Centre, Singapore.',
      'At Reiwa, Prakash works with senior executives at the moment of leadership transition — a new regional role, a bicultural scope, a bigger brief than before. Patient, structured, confidential.',
      'His practice is built on three decades of observing how leaders change — and what conditions make change possible rather than merely demanded.',
    ],
    tags: ['Executive coaching', 'Leadership transitions', 'Cross-cultural leadership'],
  },
  {
    id: 'vijay-batra',
    name: 'Vijay Michihito Batra',
    initials: 'VB',
    role: 'Partner',
    title: 'Partner, Executive Coaching & Cross-Cultural',
    credential: 'Trained at the PHP Institute, Kyoto under Matsushita Konosuke (founder of Panasonic); author; 5,000+ workshops in 14 countries',
    bio: [
      'MBA, University of Pittsburgh. JAIMS, Hawaii. Trained as a facilitator of adult learning at the PHP Institute in Kyoto under Matsushita Konosuke, founder of Panasonic. Author of Ideas By Konosuke Matsushita and Switch On.',
      'Over 5,000 workshops in 14 countries, 25,000 hours of senior-executive facilitation. Clients include Microsoft, Apple, Google, and NEC.',
      'At Reiwa, Vijay advises on the human dimension of Indo-Japanese engagements — specifically, how senior Indian and Japanese executives learn to work productively together.',
    ],
    tags: ['Executive coaching', 'Indo-Japanese cultural fluency', 'Senior facilitation'],
  },
  {
    id: 'puneet-nayyar',
    name: 'Puneet Nayyar',
    initials: 'PN',
    role: 'Advisor',
    title: 'Advisor, Finance & M&A',
    credential: 'FCA; former EY, PwC, AIG, Bharti Airtel',
    bio: [
      'Fellow of the Institute of Chartered Accountants of India. Deep experience in M&A, valuation, due diligence, IFRS and Ind AS implementation, risk advisory, and SOX compliance.',
      'Clients include Maruti Suzuki, JTEKT, Hero, GSK, and the Jubilant Group. At Reiwa, Puneet leads the Financial Advisory practice — the senior finance partner for cross-border transactions, due diligence, and strategic financial thinking at the Japan–India corridor.',
      'His work at EY and PwC across the Japan–India corridor gives him an unusual vantage: he understands how the same transaction reads on both sides of the table.',
    ],
    tags: ['M&A', 'Financial due diligence', 'IFRS & Ind AS', 'Transaction advisory'],
  },
  {
    id: 'rohini-kaul',
    name: 'Rohini Kaul',
    initials: 'RK',
    role: 'Advisor',
    title: 'Advisor, Communications',
    credential: 'Founder, The Narratives; former communications lead at Fidelity, NEC, American Express, HSBC, Genpact',
    bio: [
      'Built and led communication functions across Fidelity International, NEC Corporation, American Express, HSBC, and Genpact — spanning the UK, USA, APAC, Japan, and India.',
      'Founder of The Narratives, an integrated marketing and communications agency. At Reiwa, Rohini advises on corporate communications strategy for cross-border businesses — aligning an organisation\'s voice across markets without losing clarity.',
      'Her focus is specific: helping organisations carry their voice across cultures, so the message lands in each room it enters.',
    ],
    tags: ['Corporate communications', 'Cross-cultural messaging', 'Brand strategy'],
  },
  {
    id: 'atul-gangwar',
    name: 'Atul Gangwar',
    initials: 'AG',
    role: 'Advisor',
    title: 'Advisor, Technology & Sustainability',
    credential: 'IIT Roorkee; co-author of ISSCC paper on the world\'s first GHz-class processor clock design',
    bio: [
      'B.E. Electronics and Communication, IIT Roorkee. Nearly three decades in electronics product design, VLSI, and chip design. Co-authored a paper at ISSCC on the clock design and synthesis of the world\'s first GHz-class processor.',
      'Twenty years at HCL-HP R&D and HCL Technologies — collaborating with Compaq, Renesas, NEC, and Broadcom. Now leads a green solutions enterprise across IT/IoT and solar energy. Clients include Tata Solar, MRF, NEC Technologies, and the Shiv Nadar Foundation.',
      'At Reiwa, Atul advises on the technology and sustainability dimensions of cross-border partnerships — particularly where Japanese precision manufacturing meets Indian green infrastructure.',
    ],
    tags: ['Technology & R&D', 'Semiconductor industry', 'Sustainability & solar', 'IoT'],
  },
  {
    id: 'rahul-gupta',
    name: 'Rahul Gupta',
    initials: 'RG',
    role: 'Advisor',
    title: 'Advisor, HR Strategy & Operations',
    credential: '14 years of cross-border HR across India, Singapore, Japan, Australia, Vietnam, Indonesia',
    bio: [
      'Computer science engineering foundation, human resources practice. Fourteen years across employee lifecycle management, cross-cultural workforce management, and HR compliance in multi-country operations.',
      'At Reiwa, Rahul works on the HR architecture of cross-border operations — people strategies that work when a team is spread across three timezones and two business cultures.',
      'His particular focus is the moment when a Japan–India joint venture starts building its combined workforce: a moment where HR decisions made quickly tend to be undone slowly.',
    ],
    tags: ['Cross-border HR', 'Workforce strategy', 'Compensation & performance'],
  },
  {
    id: 'swati-arora',
    name: 'Swati Arora',
    initials: 'SA',
    role: 'Advisor',
    title: 'Advisor, Executive Search',
    credential: '11 years in talent acquisition across India and Southeast Asia',
    bio: [
      'Postgraduate in human resources. Seven years in India, four in Southeast Asia — Singapore, Malaysia, Philippines, Indonesia. Successful placements across engineering, IT, and finance, from individual contributor to senior management.',
      'At Reiwa, Swati leads senior search mandates — regional leadership and country-head hires. Her network in India and SEA gives access to candidates rarely on public radar.',
      'The placements she is most proud of are those where the candidate was not looking — and where the conversation that led to the role took six months of careful relationship-building.',
    ],
    tags: ['Executive search', 'India & SEA talent', 'Regional leadership hiring'],
  },
];
