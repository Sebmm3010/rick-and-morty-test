import { useEffect } from 'react';
import { HomeLayout } from '../../components/layouts';
import { CharacterCard } from '../../components/ui/CharacterCard';
import { Pagination } from '../../components/ui/Pagination';
import { useRickData } from '../../hooks/usuRickData';

export const Personajes = () => {
  const { results, info, handleData, onNext, onPrev } = useRickData();

  useEffect(() => {
    handleData('https://rickandmortyapi.com/api/character');
  }, []);

  return (
    <HomeLayout>
      {!results ? (
        'Cargando...'
      ) : (
        <div className="bg-gray-600 p-5">
          <Pagination onNext={onNext} onPrev={onPrev} info={info} />
          <div className="m-auto mt-3 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 container content-center w-full">
            {results.map((result) => (
              <CharacterCard {...result} key={result.id} />
            ))}
          </div>
        </div>
      )}
    </HomeLayout>
  );
};
