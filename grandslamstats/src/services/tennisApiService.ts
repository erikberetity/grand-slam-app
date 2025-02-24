import axios, { AxiosError } from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
const API_HOST = process.env.NEXT_PUBLIC_RAPIDAPI_HOST;
const BASE_URL = 'https://tennisapi1.p.rapidapi.com/api/tennis';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  },
});

// Retry logic for handling rate limits (429 status)
const fetchWithRetry = async (url: string, retries: number = 5) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await axiosInstance.get(url);
      return response.data; // return data if request is successful
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        // Log more detailed error information
        console.error('Error details:', error.response?.data || error.message);

        if (error.response?.status === 429) {
          if (attempt < retries) {
            // Exponential backoff: increasing delay with each retry attempt
            const delay = Math.pow(2, attempt) * 1000; // 2^attempt seconds
            console.log(`Rate limit exceeded, retrying in ${delay / 1000} seconds...`);
            await new Promise((resolve) => setTimeout(resolve, delay));
          } else {
            console.error('Max retries reached. Rate limit still exceeded.');
            throw new Error('Rate limit exceeded');
          }
        } else if (error.response?.status === 400) {
          console.error('Bad request, check your endpoint or parameters.');
          throw new Error('Bad request - invalid parameters or endpoint');
        } else {
          console.error('Error fetching data:', error.message);
          throw error; // Rethrow if it's another error
        }
      } else {
        console.error('Non-Axios error:', error);
        throw error;
      }
    }
  }
};

// Fetch ATP Live Rankings
export const fetchAtpLiveRankings = async () => {
    try {
      // Modify the URL to include the limit parameter
      return await fetchWithRetry('/rankings/atp/live?limit=10');
    } catch (error) {
      console.error('Error fetching ATP live rankings:', error);
      throw error;
    }
  };
  

// Fetch Tournament Data
export const fetchTournamentData = async (tournamentId: string) => {
  try {
    const response = await axiosInstance.get(`/tournament/${tournamentId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching tournament ${tournamentId}:`, error);
    throw error;
  }
};
