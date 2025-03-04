import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TENNIS_API_KEY;
const BASE_URL = 'https://api.sportradar.com/tennis/trial/v4';

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Helper function to handle API errors
const handleApiError = (error: any) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    throw new Error(error.response.data.message || 'API request failed');
  } else if (error.request) {
    // The request was made but no response was received
    throw new Error('No response received from API');
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new Error('Error setting up API request');
  }
};

export const tennisApi = {
  // Get live matches
  getLiveMatches: async () => {
    try {
      const response = await api.get('/en/schedules/live/summaries.json');
      // The API returns an object with summaries array
      return response.data.summaries || [];
    } catch (error) {
      handleApiError(error);
    }
  },

  // Get upcoming matches
  getUpcomingMatches: async () => {
    try {
      const response = await api.get('/en/schedules/upcoming/summaries.json');
      return response.data.summaries || [];
    } catch (error) {
      handleApiError(error);
    }
  },

  // Get player rankings
  getPlayerRankings: async () => {
    try {
      const response = await api.get('/en/rankings.json');
      return response.data.rankings || [];
    } catch (error) {
      handleApiError(error);
    }
  },

  // Get tournament details
  getTournamentDetails: async (tournamentId: string) => {
    try {
      const response = await api.get(`/en/tournaments/${tournamentId}/summary.json`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  // Get player profile
  getPlayerProfile: async (playerId: string) => {
    try {
      const response = await api.get(`/en/players/${playerId}/profile.json`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },
}; 