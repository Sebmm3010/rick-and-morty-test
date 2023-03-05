import { useEffect } from 'react';
import { HomeLayout } from '../../components/layouts';
import { Pagination, EpisodesCard } from '../../components/ui';
import { useRickData } from '../../hooks/usuRickData';

export const Capitulos = () => {
  const { results, info, onNext, onPrev, handleData } = useRickData();
  useEffect(() => {
    handleData('https://rickandmortyapi.com/api/episode');
  }, []);

  return (
    <HomeLayout>
      {!results ? (
        'cargando...'
      ) : (
        <div className="bg-gray-600 p-5 min-h-screen">
          <Pagination info={info} onNext={onNext} onPrev={onPrev} />
          <div className="m-auto mt-3 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 container content-center w-full">
            {results.map((result) => (
              <EpisodesCard episodio={result} key={result.id} />
            ))}
          </div>
        </div>
      )}
    </HomeLayout>
  );
};
