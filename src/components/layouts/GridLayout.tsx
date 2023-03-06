import { Pagination } from '../ui';
import { Info } from '../../interfaces';
import { FC, ReactNode } from 'react';

interface Props {
  info: Info;
  onNext: () => void;
  onPrev: () => void;
  children: ReactNode;
}

export const GridLayout: FC<Props> = ({ info, onNext, onPrev, children }) => {
  return (
    <div className="bg-gray-600 p-5 min-h-screen">
      <Pagination info={info} onNext={onNext} onPrev={onPrev} />
      <div className="m-auto mt-3 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 container content-center w-full">
        {children}
      </div>
    </div>
  );
};
