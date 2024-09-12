'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
interface User {
  name: string;
  id: string;
}

interface ChallengeDay {
  name: string;
  dailyGoal: number;
  day: number;
}
interface Challenge {
  name: string;
  id: string;
  days: ChallengeDay[];
  createdAt: Date;
  createdby: User;
  dailyGoal: number;
  participants: User[];
}
const AllChallenges: Challenge[] = [
  {
    createdAt: new Date(),
    createdby: { name: 'John Doe', id: '1' },
    days: [],
    id: '1',
    name: 'Push-Up Challenge',
    dailyGoal: 100,
    participants: [],
  },
];

export default function TableViewPushUpTracker() {
  // const [challenges, setData] = useState(AllChallenges);
  // const [users, setUsers] = useState(All);
  // const [newUser, setNewUser] = useState('');
  // const [selectedUser, setSelectedUser] = useState('');
  // const [pushUps, setPushUps] = useState('');
  // const [dailyGoal, setDailyGoal] = useState(100);

  // const handleJoinChallenge = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (newUser && !users.includes(newUser)) {
  //     setUsers([...users, newUser]);
  //     setNewUser('');
  //   }
  // };

  // const handleLogPushUps = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const pushUpsCount = parseInt(pushUps);
  //   if (isNaN(pushUpsCount) || !selectedUser) return;

  //   const newData = [...challenges];
  //   const lastDay = newData[newData.length - 1];
  //   const newDay = { ...lastDay, name: `Day ${newData.length + 1}` };
  //   newDay[selectedUser] = (newDay[selectedUser] || 0) + pushUpsCount;
  //   newData.push(newDay);

  //   setData(newData);
  //   setPushUps('');
  // };

  // const getCurrentPushUps = (userName: string) => {
  //   return challenges[challenges.length - 1][userName] || 0;
  // };

  // const getGoalDifference = (userName: string) => {
  //   const current = getCurrentPushUps(userName);
  //   return dailyGoal - current;
  // };

  // const getCompletionPercentage = (userName: string) => {
  //   const current = getCurrentPushUps(userName);
  //   return Math.min(Math.round((current / dailyGoal) * 100), 100);
  // };

  // const updatePushUps = (data) => {
  //   if (!userName) return;
  //   // open prompt to enter pushups
  //   const update = prompt('Enter the number of pushups');
  //   if (!update) return;
  //   const newData = [...data];
  // };
  return (
    <div className='container mx-auto p-4 space-y-6'>
      <h1 className='text-3xl font-bold mb-6'>Push-Up Challenge Tracker</h1>

      {/* <Card className='mb-6'>
        <CardHeader>
          <CardTitle className='flex justify-between items-center'>
            <span>Daily Challenge Goal</span>
            <span className='text-2xl font-bold'>{dailyGoal} Push-Ups</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex items-center space-x-4'>
            <Input
              type='number'
              value={dailyGoal}
              onChange={(e) => setDailyGoal(parseInt(e.target.value) || 0)}
              className='w-24'
            />
            <Button onClick={() => setDailyGoal(dailyGoal)}>Update Goal</Button>
          </div>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Current Participants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='overflow-x-auto'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Current</TableHead>
                  <TableHead>Remaining</TableHead>
                  <TableHead>Progress</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user}>
                    <TableCell className='font-medium'>{user}</TableCell>
                    <TableCell>{getCurrentPushUps(user)}</TableCell>
                    <TableCell>
                      {Math.max(0, getGoalDifference(user))}
                    </TableCell>
                    <TableCell>
                      <div className='flex items-center space-x-2'>
                        <Progress
                          value={getCompletionPercentage(user)}
                          className='w-full'
                        />
                        <span className='text-sm font-medium'>
                          {getCompletionPercentage(user)}%
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>Join the Challenge</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleJoinChallenge} className='space-y-4'>
              <div>
                <Label htmlFor='new-user'>Your Name</Label>
                <Input
                  id='new-user'
                  value={newUser}
                  onChange={(e) => setNewUser(e.target.value)}
                  placeholder='Enter your name'
                />
              </div>
              <Button type='submit'>Join Challenge</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Log Your Push-Ups</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogPushUps} className='space-y-4'>
              <div>
                <Label htmlFor='user-select'>Select Your Name</Label>
                <select
                  id='user-select'
                  className='w-full p-2 border rounded'
                  value={selectedUser}
                  onChange={(e) => setSelectedUser(e.target.value)}
                >
                  <option value=''>Select your name</option>
                  {users.map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor='push-ups'>Number of Push-Ups</Label>
                <Input
                  id='push-ups'
                  type='number'
                  value={pushUps}
                  onChange={(e) => setPushUps(e.target.value)}
                  placeholder='Enter number of push-ups'
                />
              </div>
              <Button type='submit'>Log Push-Ups</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Challenge Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='h-[400px]'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={challenges}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                {users.map((user, index) => (
                  <Line
                    key={user}
                    type='monotone'
                    dataKey={user}
                    stroke={`hsl(${(index * 360) / users.length}, 70%, 50%)`}
                    strokeWidth={2}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card> */}
      <h1>Working on it🚧</h1>
    </div>
  );
}
