import mongoose from 'mongoose';
import { Challenge } from './types';

const challengeSchema = new mongoose.Schema<Challenge>(
  {
    name: {
      type: String,
      required: true,
    },
    days: [
      {
        name: {
          type: String,
          required: true,
        },
        dailyGoal: {
          type: Number,
          required: true,
        },
        day: {
          type: Number,
          required: true,
        },
      },
    ],
    dailyGoal: {
      type: Number,
      required: true,
    },
    participants: [
      {
        id: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: false,
        },
        given_name: {
          type: String,
          required: false,
        },
        family_name: {
          type: String,
          required: false,
        },
        picture: {
          type: String,
          required: false,
        },
      },
    ],
    code: {
      type: String,
      required: false,
      default: () => sixDigitCodeGenerator(),
    },
    private: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const sixDigitCodeGenerator = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const ChallengeModel =
  mongoose.models.Challenge || mongoose.model('Challenge', challengeSchema);
