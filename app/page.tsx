'use client';
import { NewTeamForm } from '@/components/Forms/NewTeamForm/NewTeamForm';
import { TeamGrid } from '@/components/TeamGrid/TeamGrid';
import { localStorageManager } from '@/utils/storageManager';

import classes from './page.module.scss';

const Homepage = () => {
  const teams = localStorageManager.getTeams();

  return (
    <main>
      <h1>Start your leaderboard</h1>
      <NewTeamForm />
      <TeamGrid />
      <div className={classes.gameActionsContainer}>
        <button disabled={teams.length < 2}>Start the game</button>
        <button
          disabled={teams.length === 0}
          onClick={() => localStorageManager.clearTeams()}
        >
          Clear teams
        </button>
      </div>
    </main>
  );
};

export default Homepage;
