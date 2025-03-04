import { TournamentCard } from '@/components/TournamentCard';

const tournaments = [
  {
    id: 1,
    name: 'Australian Open',
    date: 'Jan 14 - Jan 28, 2024',
    location: 'Melbourne, Australia',
    image: '/tournaments/ao.jpg',
    surface: 'Hard',
    prizeMoney: '$76.5M',
    defendingChampions: {
      mens: 'Novak Djokovic',
      womens: 'Aryna Sabalenka',
    },
  },
  {
    id: 2,
    name: 'Roland Garros',
    date: 'May 26 - Jun 09, 2024',
    location: 'Paris, France',
    image: '/tournaments/rg.jpg',
    surface: 'Clay',
    prizeMoney: '$54.5M',
    defendingChampions: {
      mens: 'Novak Djokovic',
      womens: 'Iga Świątek',
    },
  },
  {
    id: 3,
    name: 'Wimbledon',
    date: 'Jul 01 - Jul 14, 2024',
    location: 'London, UK',
    image: '/tournaments/wimbledon.jpg',
    surface: 'Grass',
    prizeMoney: '$56.5M',
    defendingChampions: {
      mens: 'Carlos Alcaraz',
      womens: 'Markéta Vondroušová',
    },
  },
  {
    id: 4,
    name: 'US Open',
    date: 'Aug 26 - Sep 08, 2024',
    location: 'New York, USA',
    image: '/tournaments/usopen.jpg',
    surface: 'Hard',
    prizeMoney: '$65M',
    defendingChampions: {
      mens: 'Novak Djokovic',
      womens: 'Coco Gauff',
    },
  },
];

export default function TournamentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Grand Slam Tournaments</h1>
        <p className="mt-2 text-lg text-gray-600">
          Explore the four major tennis tournaments that make up the Grand Slam.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
}
