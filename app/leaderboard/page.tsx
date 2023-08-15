'use client';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { localStorageManager } from '@/utils/storageManager';

import classes from './page.module.scss';

const LeaderboardPage = () => {
  const data = localStorageManager.getTeams().map((team) => {
    return {
      name: team.name,
      pv: 100,
      fill: team.color,
    };
  });

  return (
    <div className={classes.container}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="pv" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LeaderboardPage;
