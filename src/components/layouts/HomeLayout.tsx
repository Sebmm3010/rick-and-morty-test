import { FC, ReactNode, useContext } from 'react';
import { UiContext } from '../../context';
import { BottomNav, Navbar } from '../ui';
import { Modal } from '../ui/Modal';

interface Props {
  children: ReactNode;
}
export const HomeLayout: FC<Props> = ({ children }) => {
  const { showModal } = useContext(UiContext);
  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-[#000300] w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <Navbar />
      </nav>
      {children}
      <BottomNav />
      {showModal ? <Modal /> : null}
    </>
  );
};
