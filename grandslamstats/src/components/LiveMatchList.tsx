'use client';

import { useTennisData } from '@/hooks/useTennisData';
import { LiveMatchCard } from './LiveMatchCard';

export default function LiveMatchList() {
  const { data: liveMatches, isLoading, error } = useTennisData.useLiveMatches();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error loading live matches. Please try again later.</p>
        <p className="text-sm text-gray-500 mt-2">Error details: {error.message}</p>
      </div>
    );
  }

  if (!liveMatches || liveMatches.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No live matches at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {liveMatches.map((match: any) => (
        <LiveMatchCard key={match.id} match={match} />
      ))}
    </div>
  );
} 