'use client';

import { useUpcomingMatches } from '@/hooks/useTennisData';

interface Match {
  id: string;
  tournament: {
    name: string;
  };
  home_team: {
    name: string;
  };
  away_team: {
    name: string;
  };
  round: {
    name: string;
  };
  court: {
    name: string;
  };
  scheduled: string;
}

export function UpcomingMatches() {
  const { data: matches, isLoading, error } = useUpcomingMatches();

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        <p className="mt-2 text-sm text-gray-500">Loading upcoming matches...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <svg
          className="mx-auto h-12 w-12 text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">Error loading matches</h3>
        <p className="mt-1 text-sm text-gray-500">
          {error instanceof Error ? error.message : 'Failed to load upcoming matches'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Upcoming Matches</h2>

      <div className="space-y-4">
        {matches?.map((match: Match) => (
          <div
            key={match.id}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">{match.tournament.name}</span>
              <span className="text-sm text-gray-500">
                {new Date(match.scheduled).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>

            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{match.home_team.name}</span>
                <span className="text-sm text-gray-500">vs</span>
                <span className="text-sm font-medium text-gray-900">{match.away_team.name}</span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{match.round.name}</span>
                <span>{match.court.name}</span>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="w-full rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Set Reminder
              </button>
            </div>
          </div>
        ))}
      </div>

      {(!matches || matches.length === 0) && (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No upcoming matches</h3>
          <p className="mt-1 text-sm text-gray-500">
            There are no matches scheduled at the moment.
          </p>
        </div>
      )}
    </div>
  );
} 