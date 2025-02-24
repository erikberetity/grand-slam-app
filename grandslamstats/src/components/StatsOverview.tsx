import React from 'react';

const StatsOverview: React.FC = () => {
  return (
    <section className="text-center py-16 bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-6  mt-[4%]">🎾 GrandSlamStats</h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Track real-time tennis scores, player stats, and Grand Slam tournaments.
        Get personalized notifications and stay updated on all matches!
      </p>
      <a href="#matches" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition">
        View Live Matches
      </a>
    </section>
  );
};

export default StatsOverview;
