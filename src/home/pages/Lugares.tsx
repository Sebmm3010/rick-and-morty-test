import { useEffect } from 'react';
import { HomeLayout } from '../../components/layouts';
import { useRickData } from '../../hooks';
import { Pagination, LocationCard } from '../../components/ui';

export const Lugares = () => {
  const { results, info, onNext, onPrev, handleData } = useRickData();

  useEffect(() => {
    handleData('https://rickandmortyapi.com/api/location');
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
              <LocationCard location={result} key={result.id} />
            ))}
          </div>
        </div>
      )}
    </HomeLayout>
  );
};
