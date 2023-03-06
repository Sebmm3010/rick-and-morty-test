import { getApiData } from '../utils/getApiData';
import { DataList, Info } from '../interfaces';
import { useState } from 'react';
export const useRickData = () => {
  const [results, setResults] = useState<any>(null);
  const [info, setInfo] = useState<Info>({
    count: 0,
    pages: 0,
    next: '',
    prev: ''
  });

  const handleData = (url: string) => {
    getApiData(url).then((data: DataList) => {
      setResults(data.results);
      setInfo(data.info);
      console.log(results);
    });
  };

  const onPrev = () => {
    handleData(info.prev as string);
  };
  const onNext = () => {
    handleData(info.next as string);
  };

  return {
    results,
    info,
    // *Metodos
    handleData,
    onPrev,
    onNext
  };
};
