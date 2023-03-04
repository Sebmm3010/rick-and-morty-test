import { FC } from 'react';
import { CharacterResult } from '../../interfaces/charactersList';

export const CharacterCard: FC<CharacterResult> = (character) => {
  const { image, name, status, species, location } = character;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg w-full object-cover"
        src={image}
        alt={name}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">State: </span>
          {status}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Species: </span>
          {species}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Location: </span>
          {location.name}
        </p>
      </div>
    </div>
  );
};
