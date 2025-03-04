'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Tournament {
  id: number;
  name: string;
  date: string;
  location: string;
  image: string;
}

interface FeaturedTournamentCardProps {
  tournament: Tournament;
}

export function FeaturedTournamentCard({ tournament }: FeaturedTournamentCardProps) {
  return (
    <Link href={`/tournaments/${tournament.id}`}>
      <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
          <Image
            src={tournament.image}
            alt={tournament.name}
            width={800}
            height={400}
            className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">{tournament.name}</h3>
          <div className="mt-2 space-y-1">
            <p className="text-sm text-gray-500">{tournament.date}</p>
            <p className="text-sm text-gray-500">{tournament.location}</p>
          </div>
        </div>
      </div>
    </Link>
  );
} 