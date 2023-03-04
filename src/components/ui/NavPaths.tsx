import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { navbarLink } from './Navbar';

export const NavPaths: FC<navbarLink> = ({ path, name }) => {
  return (
    <li>
      <Link
        className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white 
        hover:underline cursor-pointer"
        to={path}
      >
        {name}
      </Link>
    </li>
  );
};
