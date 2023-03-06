import { Key, useEffect } from 'react';
import { HomeLayout, GridLayout } from '../../components/layouts';
import { CharacterCard } from '../../components/ui/CharacterCard';
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
        <GridLayout info={info} onNext={onNext} onPrev={onPrev}>
          {results.map((result: { id: Key | null | undefined }) => (
            <CharacterCard character={result} key={result.id} />
          ))}
        </GridLayout>
      )}
    </HomeLayout>
  );
};
