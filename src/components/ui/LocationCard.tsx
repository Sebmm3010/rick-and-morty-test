/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/naming-convention */
import { FC, useContext } from 'react';
import { FavoriteContext, UiContext } from '../../context';
import { LocationResult } from '../../interfaces/locationList';

interface Props {
  location: any;
}
export const LocationCard: FC<Props> = ({ location }) => {
  const { id, name, type, dimension } = location as LocationResult;
  const { setShowModal, setPath, setPageCollection } = useContext(UiContext);
  const { setActiveElement, favorites } = useContext(FavoriteContext);

  const handleClick = () => {
    setShowModal(true);
    setActiveElement(id);
    setPath('/locations');
    setPageCollection(favorites.character);
  };
  return (
    <span
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
      onClick={handleClick}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Tipo: </span>
        {type}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Dimension: </span>
        {dimension}
      </p>
    </span>
  );
};
