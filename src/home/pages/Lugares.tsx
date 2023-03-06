import { Key, useEffect } from 'react';
import { HomeLayout, GridLayout } from '../../components/layouts';
import { useRickData } from '../../hooks';
import { LocationCard } from '../../components/ui';

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
        <GridLayout info={info} onNext={onNext} onPrev={onPrev}>
          {results.map((result: { id: Key | null | undefined }) => (
            <LocationCard location={result} key={result.id} />
          ))}
        </GridLayout>
      )}
    </HomeLayout>
  );
};
