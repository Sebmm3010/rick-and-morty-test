import React, { FC } from 'react';
import { Info } from '../../interfaces/generalI';

interface Props {
  onNext: () => void;
  onPrev: () => void;
  info: Info;
}

export const Pagination: FC<Props> = ({ onPrev, onNext, info }) => {
  return (
    <ul className="flex justify-around gap-1 text-white mt-1">
      {!info.prev ? null : (
        <li>
          <button
            className="bg-lime-500 p-2 flex items-center rounded-md"
            onClick={onPrev}
          >
            <svg
              viewBox="0 0 32 32"
              width="20"
              height="20"
              stroke="currentColor"
              fill="currentColor"
            >
              <path d="M5.9 17.1l17.3 12A1.3 1.3 0 0 0 25.3 28V4a1.3 1.3 0 0 0-2.1-1.1l-17.3 12a1.3 1.3 0 0 0 0 2.2z" />
            </svg>
            Prev
          </button>
        </li>
      )}
      {!info.next ? null : (
        <li>
          <button
            className="bg-lime-500 p-2 flex items-center rounded-md"
            onClick={onNext}
          >
            Next
            <svg
              viewBox="0 0 32 32"
              width="20"
              height="20"
              stroke="currentColor"
              fill="currentColor"
            >
              <path d="M7.4 29.2a1.3 1.3 0 0 0 1.4-0.1l17.3-12a1.3 1.3 0 0 0 0-2.2l-17.3-12A1.3 1.3 0 0 0 6.7 4v24a1.3 1.3 0 0 0 0.7 1.2z" />
            </svg>
          </button>
        </li>
      )}
    </ul>
  );
};
