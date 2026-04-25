export interface Episode {
  id: string;
  number: number;
  title: string;
  guest: string;
  affiliation: string;
  description: string;
  youtubeId: string;
}

export const episodes: Episode[] = [
  {
    id: 'india-japan-dialogue-2',
    number: 1,
    title: 'Building Strategic Partnerships between India and Japan',
    guest: 'Anil Gupta',
    affiliation: 'India–Japan Dialogue with Praveen Dogra',
    description: 'Founder Anil Gupta in conversation on the India–Japan Dialogue, on what it takes to build partnerships across the Japan–India corridor.',
    youtubeId: 'ZTiEph7z1ik',
  },
];
