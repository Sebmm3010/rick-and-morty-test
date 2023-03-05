/* eslint-disable @typescript-eslint/naming-convention */
import { FC } from 'react';
import { EpisodesResult } from '../../interfaces/episodesList';

interface Props {
  episodio: any;
}
export const EpisodesCard: FC<Props> = ({ episodio }) => {
  const { name, air_date, episode } = episodio as EpisodesResult;
  return (
    <span className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Fecha de emisión: </span>
        {air_date}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Temporada: </span>
        {episode}
      </p>
    </span>
  );
};
