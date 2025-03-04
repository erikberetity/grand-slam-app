'use client';

import { useState } from 'react';
import Image from 'next/image';

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

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  const stats = player.stats || { wins: 0, losses: 0, titles: 0 };

  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
          <Image
            src={player.image}
            alt={player.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 truncate">{player.name}</h3>
          <p className="text-sm text-gray-500">{player.country}</p>
          <p className="text-sm font-medium text-green-600">Ranking: #{player.ranking}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 border-t border-gray-100 pt-4">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-900">{stats.wins}</p>
          <p className="text-xs text-gray-500">Wins</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-900">{stats.losses}</p>
          <p className="text-xs text-gray-500">Losses</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-900">{stats.titles}</p>
          <p className="text-xs text-gray-500">Titles</p>
        </div>
      </div>
    </div>
  );
}