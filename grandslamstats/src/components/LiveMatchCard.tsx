'use client';

interface Match {
  id: string;
  sport_event: {
    tournament: {
      name: string;
    };
    competitors: Array<{
      name: string;
      qualifier?: string;
    }>;
    venue: {
      name: string;
    };
    round: {
      name: string;
    };
  };
  sport_event_status: {
    status: string;
    match_status: string;
    home_score: string;
    away_score: string;
    period_scores: Array<{
      home_score: string;
      away_score: string;
    }>;
  };
}

interface LiveMatchCardProps {
  match: Match;
}

export function LiveMatchCard({ match }: LiveMatchCardProps) {
  if (!match?.sport_event?.competitors || match.sport_event.competitors.length < 2) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center text-gray-500">
          Invalid match data
        </div>
      </div>
    );
  }

  const { sport_event, sport_event_status } = match;
  const [homePlayer, awayPlayer] = sport_event.competitors;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-green-600">
          {sport_event?.tournament?.name || 'Tournament'}
        </span>
        <span className="text-sm text-gray-500">
          {sport_event?.round?.name || 'Round'}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900">
              {homePlayer?.name || 'Player 1'}
            </span>
            {homePlayer?.qualifier && (
              <span className="text-xs text-gray-500">({homePlayer.qualifier})</span>
            )}
          </div>
          <span className="text-lg font-bold text-gray-900">
            {sport_event_status?.home_score || '0'}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900">
              {awayPlayer?.name || 'Player 2'}
            </span>
            {awayPlayer?.qualifier && (
              <span className="text-xs text-gray-500">({awayPlayer.qualifier})</span>
            )}
          </div>
          <span className="text-lg font-bold text-gray-900">
            {sport_event_status?.away_score || '0'}
          </span>
        </div>

        {sport_event_status?.period_scores?.length > 0 && (
          <div className="flex justify-center space-x-2 mt-2">
            {sport_event_status.period_scores.map((set, index) => (
              <span
                key={index}
                className="text-sm text-gray-500"
              >
                {set.home_score}-{set.away_score}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <span className="text-sm text-gray-500">
            {sport_event?.venue?.name || 'Venue'}
          </span>
          <span className="text-sm font-medium text-green-600">
            {sport_event_status?.match_status || 'Status'}
          </span>
        </div>
      </div>
    </div>
  );
} 