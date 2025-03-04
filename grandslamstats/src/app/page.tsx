import Link from 'next/link';
import { LiveMatchCard } from '@/components/LiveMatchCard';
import { FeaturedTournamentCard } from '@/components/FeaturedTournamentCard';

export default function Home() {
  // This would be fetched from an API in a real app
  const liveMatches = [
    {
      id: 1,
      player1: 'Novak Djokovic',
      player2: 'Carlos Alcaraz',
      score: '6-4, 3-6, 2-1',
      tournament: 'Australian Open',
      round: 'Quarter Final',
    },
    {
      id: 2,
      player1: 'Iga Świątek',
      player2: 'Coco Gauff',
      score: '4-6, 6-3, 3-2',
      tournament: 'Australian Open',
      round: 'Semi Final',
    },
  ];

  const featuredTournaments = [
    {
      id: 1,
      name: 'Australian Open',
      date: 'Jan 14 - Jan 28, 2024',
      location: 'Melbourne, Australia',
      image: '/tournaments/ao.jpg',
    },
    {
      id: 2,
      name: 'Roland Garros',
      date: 'May 26 - Jun 09, 2024',
      location: 'Paris, France',
      image: '/tournaments/rg.jpg',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Live Tennis Scores & Stats
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Track live matches, view player statistics, and stay updated with the latest Grand Slam tournaments.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/live"
                    className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Live Scores
                  </Link>
                  <Link href="/tournaments" className="text-sm font-semibold leading-6 text-gray-900">
                    View Tournaments <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Matches Section */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Live Matches</h2>
          <Link href="/live" className="text-sm font-semibold text-green-600 hover:text-green-500">
            View all matches →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {liveMatches.map((match) => (
            <LiveMatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>

      {/* Featured Tournaments Section */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Featured Tournaments</h2>
          <Link href="/tournaments" className="text-sm font-semibold text-green-600 hover:text-green-500">
            View all tournaments →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {featuredTournaments.map((tournament) => (
            <FeaturedTournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      </div>
    </div>
  );
}
