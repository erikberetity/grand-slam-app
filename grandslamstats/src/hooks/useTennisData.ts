import { useQuery } from '@tanstack/react-query';
import { tennisApi } from '@/services/tennisApi';

// Cache keys
const CACHE_KEYS = {
  liveMatches: ['tennis', 'live-matches'],
  upcomingMatches: ['tennis', 'upcoming-matches'],
  playerRankings: ['tennis', 'player-rankings'],
  tournamentDetails: (id: string) => ['tennis', 'tournament', id],
  playerProfile: (id: string) => ['tennis', 'player', id],
};

// Custom hooks for each data type
export const useLiveMatches = () => {
  return useQuery({
    queryKey: CACHE_KEYS.liveMatches,
    queryFn: tennisApi.getLiveMatches,
    // Refetch every 30 seconds for live data
    refetchInterval: 30000,
    // Keep data fresh for 5 minutes
    staleTime: 5 * 60 * 1000,
  });
};

export const useUpcomingMatches = () => {
  return useQuery({
    queryKey: CACHE_KEYS.upcomingMatches,
    queryFn: tennisApi.getUpcomingMatches,
    // Refetch every hour for upcoming matches
    refetchInterval: 60 * 60 * 1000,
    // Keep data fresh for 1 hour
    staleTime: 60 * 60 * 1000,
  });
};

export const usePlayerRankings = () => {
  return useQuery({
    queryKey: CACHE_KEYS.playerRankings,
    queryFn: tennisApi.getPlayerRankings,
    // Refetch daily for rankings
    refetchInterval: 24 * 60 * 60 * 1000,
    // Keep data fresh for 24 hours
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export const useTournamentDetails = (tournamentId: string) => {
  return useQuery({
    queryKey: CACHE_KEYS.tournamentDetails(tournamentId),
    queryFn: () => tennisApi.getTournamentDetails(tournamentId),
    // Refetch every hour for tournament details
    refetchInterval: 60 * 60 * 1000,
    // Keep data fresh for 1 hour
    staleTime: 60 * 60 * 1000,
  });
};

export const usePlayerProfile = (playerId: string) => {
  return useQuery({
    queryKey: CACHE_KEYS.playerProfile(playerId),
    queryFn: () => tennisApi.getPlayerProfile(playerId),
    // Refetch daily for player profiles
    refetchInterval: 24 * 60 * 60 * 1000,
    // Keep data fresh for 24 hours
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export const useTennisData = {
  // Live matches - refresh every 30 seconds
  useLiveMatches: () => {
    return useQuery({
      queryKey: ['liveMatches'],
      queryFn: tennisApi.getLiveMatches,
      refetchInterval: 30000,
    });
  },

  // Upcoming matches - refresh every hour
  useUpcomingMatches: () => {
    return useQuery({
      queryKey: ['upcomingMatches'],
      queryFn: tennisApi.getUpcomingMatches,
      refetchInterval: 3600000,
    });
  },

  // Player rankings - refresh daily
  usePlayerRankings: () => {
    return useQuery({
      queryKey: ['playerRankings'],
      queryFn: tennisApi.getPlayerRankings,
      refetchInterval: 86400000,
    });
  },

  // Player profile - refresh daily
  usePlayerProfile: (playerId: string) => {
    return useQuery({
      queryKey: ['playerProfile', playerId],
      queryFn: () => tennisApi.getPlayerProfile(playerId),
      refetchInterval: 86400000,
      enabled: !!playerId,
    });
  },

  // Tournaments - refresh daily
  useTournaments: () => {
    return useQuery({
      queryKey: ['tournaments'],
      queryFn: tennisApi.getTournaments,
      refetchInterval: 86400000,
    });
  },

  // Tournament details - refresh daily
  useTournamentDetails: (tournamentId: string) => {
    return useQuery({
      queryKey: ['tournamentDetails', tournamentId],
      queryFn: () => tennisApi.getTournamentDetails(tournamentId),
      refetchInterval: 86400000,
      enabled: !!tournamentId,
    });
  },
}; 