/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useContext } from 'react';
import { UiContext } from '../../context/ui';
import { CharacterResult } from '../../interfaces';

interface Props {
  character: any;
}

export const CharacterCard: FC<Props> = ({ character }) => {
  const { image, name, status, species, location } =
    character as CharacterResult;

  const { setShowModal } = useContext(UiContext);
  const handleSave = () => {
    setShowModal(true);
  };

  return (
    <div
      className="cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      onClick={handleSave}
    >
      <img
        className="rounded-t-lg w-full object-cover"
        src={image}
        alt={name}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
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
