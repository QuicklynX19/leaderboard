import { Team } from '@/models/team';

const teamsPrefix = 'leaderboardTeamsStorage';

export const localStorageManager = {
  getTeams: (): Team[] => {
    const teams = JSON.parse(window.localStorage.getItem(teamsPrefix));
    return teams ? (teams as Team[]) : [];
  },
  addTeam: (newTeam: Team) => {
    const teams = localStorageManager.getTeams();
    teams.push(newTeam);
    window.localStorage.setItem(teamsPrefix, JSON.stringify(teams));
  },
  clearTeams: () => {
    window.localStorage.removeItem(teamsPrefix);
  },
};
