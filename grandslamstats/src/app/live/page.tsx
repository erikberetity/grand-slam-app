import LiveMatchList from '@/components/LiveMatchList';
import { UpcomingMatches } from '@/components/UpcomingMatches';

export default function LivePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Live Scores</h1>
        <p className="mt-2 text-lg text-gray-600">
          Follow live matches and upcoming games from all Grand Slam tournaments.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LiveMatchList />
        </div>
        <div>
          <UpcomingMatches />
        </div>
      </div>
    </div>
  );
} 