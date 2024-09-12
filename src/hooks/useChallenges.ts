import { Challenge } from '@/mongodb/model/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const useAddChallenge = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newAccount: Partial<Challenge>) => {
      const response = await fetch('/api/challenges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAccount),
      });

      if (!response.ok) {
        throw new Error('Error adding account');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['challenges'],
      });
    },
  });
};

const useDeleteChallenge = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/challenges/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error deleting account');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['challenges'],
      });
    },
  });
};

const useGetChallenges = (query?: { name: string }) => {
  return useQuery({
    queryKey: ['challenges', query],
    queryFn: async () => {
      let request = '/api/challenges';
      if (query) {
        request += `?name=${query.name}`;
      }
      const response = await fetch(request);

      if (!response.ok) {
        throw new Error('Error fetching challenges');
      }

      return response.json();
    },
  });
};

const useUpdateChallenge = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedAccount: Challenge) => {
      const response = await fetch(`/api/challenges/${updatedAccount._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAccount),
      });

      if (!response.ok) {
        throw new Error('Error updating account');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['challenges'],
      });
    },
  });
};

const useAddUserToChallenge = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      challengeId,
      userId,
    }: {
      challengeId: string;
      userId: string;
    }) => {
      const response = await fetch(`/api/challenges/${challengeId}/addUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error('Error adding user to challenge');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['challenges'],
      });
    },
  });
};

const useLogPushups = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      challengeId,
      userId,
      day,
      pushUps,
      dailyGoal,
    }: {
      challengeId: string;
      userId: string;
      day: string;
      pushUps: number;
      dailyGoal: number;
    }) => {
      const response = await fetch(
        `/api/challenges/${challengeId}/logPushups`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, day, pushUps, dailyGoal }),
        }
      );

      if (!response.ok) {
        throw new Error('Error logging pushups');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['challenges'],
      });
    },
  });
};

const useJoinChallenge = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      challengeId,
      userId,
    }: {
      challengeId: string;
      userId: string;
    }) => {
      const response = await fetch(`/api/challenges/${challengeId}/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error('Error joining challenge');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['challenges'],
      });
    },
  });
};

const useExitChallenge = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      challengeId,
      userId,
    }: {
      challengeId: string;
      userId: string;
    }) => {
      const response = await fetch(`/api/challenges/${challengeId}/exit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error('Error exiting challenge');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['challenges'],
      });
    },
  });
};

export {
  useAddChallenge,
  useDeleteChallenge,
  useGetChallenges,
  useUpdateChallenge,
  useAddUserToChallenge,
  useLogPushups,
  useJoinChallenge,
  useExitChallenge,
};
