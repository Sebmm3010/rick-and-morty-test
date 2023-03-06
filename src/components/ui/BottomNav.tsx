import { Link } from 'react-router-dom';

export const BottomNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
        <Link
          to="/"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            viewBox="0 0 32 32"
            className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            width="32"
            height="32"
            stroke="currentColor"
            fill="currentColor"
          >
            <path d="M24.4 13.6l0 0c0.3-0.9 0.5-1.9 0.5-2.9 0-4.9-4-8.9-8.9-8.9s-8.9 4-8.9 8.9c0 1 0.2 2 0.5 2.9v0c-3.5 1.8-5.8 5.4-5.8 9.5v5.3c0 1 0.8 1.8 1.8 1.8h24.8c1 0 1.8-0.8 1.8-1.8v-5.3c0-4.2-2.4-7.7-5.8-9.5zM16 5.3c2.9 0 5.3 2.4 5.3 5.4s-2.4 5.3-5.3 5.3c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.4zM26.7 26.7h-21.4v-3.6c0-2.9 1.7-5.3 4.2-6.4 1.6 1.8 4 2.9 6.5 2.9 2.6 0 4.9-1.1 6.5-2.9 2.4 1.1 4.1 3.6 4.2 6.4v3.6z" />
          </svg>
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Personajes
          </span>
        </Link>
        <Link
          to="/episodes"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            stroke="currentColor"
            fill="currentColor"
          >
            <path d="M27 8h-8.6l4.3-4.3a1 1 0 0 0-1.4-1.4L16 7.6 10.7 2.3a1 1 0 0 0-1.4 1.4L13.6 8H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM5 10h13v15H5Zm22 15h-7V10h7v15Zm-2-10.5a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5Zm0 6a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5Z" />
          </svg>
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Capitulos
          </span>
        </Link>
        <Link
          to="/locations"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            stroke="currentColor"
            fill="currentColor"
          >
            <path d="M16 1.8c-6.9 0-12.4 5.5-12.4 12.4 0 9.8 8.9 14.8 11.5 15.9 0.2 0.1 0.5 0.2 0.7 0.1 0.1 0 0.1 0 0.2 0 0.1 0 0.1 0 0.2 0 0.2 0 0.5-0.1 0.7-0.1 2.6-1.1 11.6-6.1 11.5-15.9 0-6.8-5.6-12.4-12.4-12.4zM16.2 26.5c0 0-0.1-0.1-0.2-0.1-0.1 0-0.1 0.1-0.2 0.1-2.3-1.2-8.7-5.1-8.7-12.3 0-4.9 4-8.8 8.9-8.9 4.9 0 8.9 4 8.9 8.9 0 7.3-6.5 11.2-8.7 12.3z" />
            <path d="M16 10.7c-2 0-3.6 1.6-3.6 3.5 0 2 1.6 3.6 3.6 3.6s3.6-1.6 3.6-3.6c0-2-1.6-3.6-3.6-3.5z" />
          </svg>
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Lugares
          </span>
        </Link>
      </div>
    </div>
  );
};
