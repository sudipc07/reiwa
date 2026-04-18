export interface Client {
  id: string;
  name: string;
  logo: string;
}

export const clients: Client[] = [
  { id: 'nec', name: 'NEC Technologies', logo: '/logos/nec.jpg' },
  { id: 'hcl', name: 'HCL Technologies', logo: '/logos/hcl.webp' },
  { id: 'hagiwara', name: 'Hagiwara', logo: '/logos/hagiwara.png' },
  { id: 'vara', name: 'VARA', logo: '/logos/vara.png' },
  { id: 'axtria', name: 'Axtria', logo: '/logos/axtria.jpg' },
  { id: 'caret-capital', name: 'Caret Capital', logo: '/logos/caret-capital.jpeg' },
  { id: 'cymetrix', name: 'Cymetrix', logo: '/logos/cymetrix.jpeg' },
  { id: 'trainocate', name: 'Trainocate', logo: '/logos/trainocate.jpg' },
  { id: 'jae', name: 'JAE', logo: '/logos/jae.jpg' },
  { id: 'jp-tokyo', name: 'JP Tokyo & Co.', logo: '/logos/jp-tokyo.png' },
  { id: 'logomotion', name: 'Logomotion', logo: '/logos/logomotion.png' },
  { id: 'nehan', name: 'Nehan Technologies', logo: '/logos/nehan.jpeg' },
  { id: 'vvtn-sequor', name: 'VVTnsequor', logo: '/logos/vvtn-sequor.png' },
];
