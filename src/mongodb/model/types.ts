import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';

export interface ChallengeDay {
  name: string;
  dailyGoal: number;
  day: number;
}
export interface Challenge {
  name: string;
  _id: string;
  days: ChallengeDay[];
  createdAt: Date;
  updatedAt: Date;
  createdby: KindeUser<Record<string, unknown>>;
  dailyGoal: number;
  participants: KindeUser<Record<string, unknown>>[];
  code?: string;
  private: boolean;
}
