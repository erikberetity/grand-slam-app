import { PlayerList } from '@/components/PlayerList';

export default function PlayersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Top Players</h1>
      </div>
      <PlayerList />
    </div>
  );
}
