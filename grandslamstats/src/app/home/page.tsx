import React from 'react';
import Navbar from '../../components/Navbar';
import PlayerCard from '../../components/PlayerCard';
import TournamentCard from '../../components/TournamentCard';
import StatsOverview from '../../components/StatsOverview';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Stats Overview Section */}
      <StatsOverview />

      {/* Player Cards */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Top Players</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <PlayerCard />
        </div>
      </section>

      {/* Tournament Cards */}
      <section className="py-12 px-6 bg-gray-800">
        <h2 className="text-3xl font-semibold my-4">Upcoming Tournaments</h2>
        {/* Example tournament IDs - Replace these with actual tournament IDs from API */}
        <TournamentCard tournamentName="Wimbledon" />
        
      </section>
    </div>
  );
};

export default Home;