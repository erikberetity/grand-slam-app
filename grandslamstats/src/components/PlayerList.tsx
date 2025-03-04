'use client';

import { useState, useEffect } from 'react';
import { PlayerCard } from './PlayerCard';

interface Player {
  id: string;
  name: string;
  country: string;
  ranking: number;
  image: string;
  stats?: {
    wins: number;
    losses: number;
    titles: number;
  };
}

export function PlayerList() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPlayersFromJson = async () => {
      try {
        const response = await fetch('/data/players.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        if (Array.isArray(data)) {
          const playerList = data.map((player: any) => ({
            id: player.id || String(Math.random()),
            name: player.name || 'Unknown Player',
            country: player.country || 'N/A',
            ranking: player.ranking || 0,
            image: player.image || '/players/default.jpg',
            stats: player.stats || { wins: 0, losses: 0, titles: 0 },
          }));
          setPlayers(playerList.slice(0, 10)); // Show top 10 players
        } else {
          setError('Data is not in the expected array format');
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    getPlayersFromJson();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        <p className="mt-2 text-sm text-gray-500">Loading players...</p>
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
        <h3 className="mt-2 text-sm font-medium text-gray-900">Error loading players</h3>
        <p className="mt-1 text-sm text-gray-500">{error}</p>
      </div>
    );
  }

  if (players.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-sm text-gray-500">No players found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
} 