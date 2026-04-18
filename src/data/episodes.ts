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
    id: 'ep-placeholder',
    number: 1,
    title: 'Building Strategic Partnerships between India & Japan',
    guest: 'Guest Name',
    affiliation: 'Organisation',
    description: 'Episode details to be added. Contact Gupta san\'s team for the full episode list.',
    youtubeId: 'PLACEHOLDER',
  },
];
