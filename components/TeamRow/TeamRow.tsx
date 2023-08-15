import { Team } from '@/models/team';

import classes from './TeamRow.module.scss';
interface TeamRowProps {
  team: Team;
}
export const TeamRow = ({ team }: TeamRowProps) => {
  return (
    <div
      className={classes.container}
      style={{ background: `${team.color}60` }}
    >
      <div>{team.name}</div>
      <div>TBD Actions</div>
    </div>
  );
};
