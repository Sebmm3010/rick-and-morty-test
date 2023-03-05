import { Link } from 'react-router-dom';
import { NavPaths } from './';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context/AuthContext';

export interface navbarLink {
  path: string;
  name: string;
}

const navbarLinks: navbarLink[] = [
  {
    path: '/',
    name: 'Personaje'
  },
  {
    path: '/episodes',
    name: 'Capitulos'
  },
  {
    path: '/locations',
    name: 'Lugares'
  }
];

export const Navbar = () => {
  const { setLogout, user } = useContext(AuthContext);
  return (
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <Link to="/" className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-[#00B0C4] ">
          Rick and morty
        </span>
      </Link>
      <div className="flex md:order-2 gap-2 items-center justify-center">
        <p className="text-white">{user.userName}</p>
        <button
          onClick={() =>
            setLogout({
              auth: false,
              user: { _id: '', userName: '', email: '', password: '' }
            })
          }
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-lime-500 dark:hover:bg-lime-700 dark:focus:ring-white"
        >
          Salir
        </button>
      </div>
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-[#000300] dark:border-gray-700">
          {navbarLinks.map((link) => (
            <NavPaths key={link.path} name={link.name} path={link.path} />
          ))}
        </ul>
      </div>
    </div>
  );
};
