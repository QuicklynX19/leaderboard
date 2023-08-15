import { TeamRow } from '@/components/TeamRow/TeamRow';
import { localStorageManager } from '@/utils/storageManager';

import classes from './TeamGrid.module.scss';

export const TeamGrid = () => {
  const teams = localStorageManager.getTeams();

  if (!teams) {
    return <h2>No teams added yet</h2>;
  }

  return (
    <>
      <h2 className={classes.title}>Teams grid</h2>
      <div className={classes.container}>
        {teams.map((team) => (
          <TeamRow key={team.name} team={team} />
        ))}
      </div>
    </>
  );
};
