import { FC, useContext } from 'react';
import { UiContext } from '../../context/ui';
import { FavoriteContext } from '../../context/favorite';
import { AuthContext } from '../../context/auth-context';

export const Modal: FC = () => {
  const { setShowModal, pathName, pageCollection } = useContext(UiContext);
  const { user } = useContext(AuthContext);
  const {
    setActiveElement,
    activeElement,
    addCharacter,
    deleteCharacter,
    addEpisode,
    deleteEpisode,
    addLocation,
    deleteLocation
  } = useContext(FavoriteContext);

  const handleClose = () => {
    setShowModal(false);
    setActiveElement(null);
  };

  const handleDelete = () => {
    switch (pathName) {
      case '/':
        deleteCharacter({ characterId: activeElement, userId: user._id });
        break;
      case '/episodes':
        deleteEpisode({ episodeId: activeElement, userId: user._id });
        break;
      case '/locations':
        deleteLocation({ locationId: activeElement, userId: user._id });
        break;
      default:
        break;
    }
    setShowModal(false);
    setActiveElement(null);
  };

  const handleSave = () => {
    switch (pathName) {
      case '/':
        addCharacter({ characterId: activeElement, userId: user._id });
        break;
      case '/episodes':
        addEpisode({ episodeId: activeElement, userId: user._id });
        break;
      case '/locations':
        addLocation({ locationId: activeElement, userId: user._id });
        break;
      default:
        console.log(pathName);
        break;
    }

    setShowModal(false);
    setActiveElement(null);
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999] outline-none focus:outline-none modal">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800  outline-none focus:outline-none">
            {/* header */}
            <div className="text-white flex items-start justify-between p-5 border-b border-solid border-lime-500 rounded-t">
              {pageCollection?.includes(activeElement as number) ? (
                <h3 className="text-3xl font-semibold">
                  Eliminar de favoritos
                </h3>
              ) : (
                <h3 className="text-3xl font-semibold">Guardar en favoritos</h3>
              )}
            </div>
            {/* Body */}
            <div className="relative p-6 flex-auto">
              {pageCollection?.includes(activeElement as number) ? (
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Desea eliminar este elemento de favoritos?
                </p>
              ) : (
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Desea guardar este elemento en favoritos?
                </p>
              )}
            </div>
            {/* footer */}
            <div className="flex items-center justify-end p-6 border-t border-solid border-lime-500 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleClose}
              >
                Cerrar
              </button>
              {pageCollection?.includes(activeElement as number) ? (
                <button
                  className="bg-lime-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleDelete}
                >
                  Eliminar
                </button>
              ) : (
                <button
                  className="bg-lime-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleSave}
                >
                  Guardar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-[999]] bg-black"></div>
    </>
  );
};
