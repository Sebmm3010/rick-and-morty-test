import { Key, useEffect } from 'react';
import { GridLayout, HomeLayout } from '../../components/layouts';
import { EpisodesCard } from '../../components/ui';
import { useRickData } from '../../hooks/usuRickData';

export const Capitulos = () => {
  const { results, info, onNext, onPrev, handleData } = useRickData();
  useEffect(() => {
    handleData('https://rickandmortyapi.com/api/episode');
  }, []);

  return (
    <>
      <HomeLayout>
        {!results ? (
          'cargando...'
        ) : (
          <GridLayout info={info} onNext={onNext} onPrev={onPrev}>
            {results.map((result: { id: Key | null | undefined }) => (
              <EpisodesCard episodio={result} key={result.id} />
            ))}
          </GridLayout>
        )}
      </HomeLayout>
    </>
  );
};
