import React from 'react';
import { useForm } from 'react-hook-form';

import { Team } from '@/models/team';
import { generateRandomColor } from '@/utils/colorGenerator';
import { localStorageManager } from '@/utils/storageManager';

const defaultValues: Team = {
  name: '',
  color: generateRandomColor(),
};
export const NewTeamForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues,
  });

  const teams = localStorageManager.getTeams();

  const onSubmit = (team: Team) => {
    localStorageManager.addTeam(team);
    reset({
      ...defaultValues,
      color: generateRandomColor(),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="teamColor">Team color:</label>
      <input
        type="color"
        {...register('color', {
          required: true,
          validate: {
            uniqueColor: (color) => {
              const filteredTeams = teams.filter(
                (team) => team.color === color
              );
              if (filteredTeams.length > 0) return 'Color already taken';
            },
          },
        })}
      />
      <span aria-description="form-error">{errors.color?.message}</span>
      <label htmlFor="teamName">Team name:</label>
      <input
        {...register('name', {
          required: true,
          validate: {
            uniqueName: (name) => {
              const filteredTeams = teams.filter(
                (team) => team.name.toLowerCase() === name.toLowerCase()
              );
              if (filteredTeams.length > 0) return 'Name already taken';
            },
          },
        })}
      />
      <span aria-description="form-error">{errors.name?.message}</span>
      <input type="submit" disabled={!isValid} />
    </form>
  );
};
