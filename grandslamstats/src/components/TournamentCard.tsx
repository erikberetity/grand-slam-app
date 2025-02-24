'use client';
import React, { useEffect, useState } from 'react';
// import { fetchTournamentData } from '../services/tennisApiService';

interface TournamentCardProps {
// tournamentId: string;
  tournamentName: string;
}

interface Tournament {
//  id: string;
  name: string;
  category: string;
  country: string;
//  startDate: number | undefined; 
//  endDate: number | undefined; 
//  titleHolder: { name: string };
//  userCount: number;
  tier: number;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ tournamentName }) => {
//const TournamentCard: React.FC<TournamentCardProps> = ({ tournamentId }) => {
    const [tournament, setTournament] = useState<Tournament | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      // const getTournamentData = async () => {
      //   try {
      //     const data = await fetchTournamentData(tournamentId);
      //     setTournament(data);
      //   } catch (error: unknown) {
      //     if (error instanceof Error) {
      //       setError(error.message);
      //     } else {
      //       setError('An unknown error occurred.');
      //     }
      //   } finally {
      //     setLoading(false);
      //   }
      // };
  
      // getTournamentData();

      // Fetching tournament data from local JSON
      const getTournamentFromJson = async () => {
        try {
          const response = await fetch('../data/tournaments.json');
          const data = await response.json();
  
          // Find the tournament by the provided tournamentName
          const selectedTournament = data.find(
            (tournament: Tournament) => tournament.name === tournamentName
          );
          setTournament(selectedTournament || null); // Set selected tournament or null if not found
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
  
      getTournamentFromJson();
    }, [tournamentName]);
  
    if (loading) return <p>Loading tournament...</p>;
    if (error) return <p>{error}</p>;
  
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Name: {tournament!.name}</h2>
        <p className="text-gray-300">🌍 Country: {tournament!.country}</p> {/* Adjusted for string */}
        <p className="text-gray-300">🏆 Category: {tournament!.category}</p> {/* Adjusted for string */}
        <p className="text-gray-300">🎾 Tier: {tournament!.tier}</p>
      </div>
    );
  };
  
  export default TournamentCard;