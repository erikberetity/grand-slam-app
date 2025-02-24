'use client';

import React, { useEffect, useState } from 'react';
// import { fetchAtpLiveRankings } from '../services/tennisApiService';

// Define types for the ranking response
// interface Team {
//   name: string;
//   country?: {
//     name: string;
//   };
// }

// interface Ranking {
//   team: Team;
//   ranking: number;
//   points: number;
// }

interface Player {
  name: string;
  rank: number;
  country: string;
  points: number;
}

const PlayerCard: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // const getPlayers = async () => {
    //   try {
    //     const data = await fetchAtpLiveRankings();
    //     console.log('Fetched ATP Live Rankings:', data); // Log the response
    //     if (data && data.rankings) {
    //       const playerList = data.rankings.map((ranking: Ranking) => ({
    //         name: ranking.team.name,
    //         rank: ranking.ranking,
    //         country: ranking.team.country?.name || 'N/A', // Check for country and fallback to 'N/A'
    //         points: ranking.points,
    //       }));
    //       setPlayers(playerList.slice(0, 10)); // Show top 10 players
    //     } else {
    //       setError('No player data available.');
    //     }
    //   } catch (error: unknown) {
    //     if (error instanceof Error) {
    //       setError(error.message);
    //     } else {
    //       setError('An unknown error occurred.');
    //     }
    //   } finally {
    //     setLoading(false); // Stop loading after data is fetched or error occurs
    //   }
    // };

    // getPlayers();

    // Fetching players data from local JSON
    const getPlayersFromJson = async () => {
        try {
          const response = await fetch('/data/players.json');
          const data = await response.json();
          console.log("Fetched data:", data); // Log the data to check its structure
      
          // Ensure data is an array before calling map
          if (Array.isArray(data)) {
            const playerList = data.map((player: Player) => ({
              name: player.name,
              rank: player.rank,
              country: player.country || 'N/A',
              points: player.points,
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
          setLoading(false); // Stop loading after data is fetched or error occurs
        }
      };
      
      
      getPlayersFromJson();
    }, []);
  
    if (loading) return <p>Loading rankings...</p>;
    if (error) return <p>{error}</p>; {/* Display error if exists */}
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{player.name}</h3>
            <p>Rank: {player.rank}</p>
            <p>Country: {player.country}</p>
            <p>Points: {player.points}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default PlayerCard;