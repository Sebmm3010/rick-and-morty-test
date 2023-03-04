import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { AuthLayout } from '../layout';

interface IForm {
  user: string;
  password: string;
  password2: string;
}

const initForm: IForm = {
  user: '',
  password: '',
  password2: ''
};

export const RegisterPage = () => {
  const [showPassword, setshowPassword] = useState<boolean>(false);
  const { formState, handleChanges } = useForm(initForm);
  const { user, password, password2 } = formState as IForm;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout>
      <div className="bg-[#000300] flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl dark:text-lime-500 font-bold text-center">
            Registrarse
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="user-log">Usuario</label>
            <input
              placeholder="Nombre de usuario"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              name="user"
              id="user-log"
              onChange={handleChanges}
              value={user}
            />
          </div>
          {/* Password1 */}
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="password">Contraseña</label>
            <input
              placeholder="Contraseña"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              value={password}
              onChange={handleChanges}
            />
          </div>
          {/* Password 2 */}
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="password">Confirmar contraseña</label>
            <input
              placeholder="confirmar contraseña"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type={showPassword ? 'text' : 'password'}
              name="password2"
              id="password2"
              value={password2}
              onChange={handleChanges}
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input
                type="checkbox"
                className="mr-1"
                onChange={() => setshowPassword(!showPassword)}
              />
              Ver contraseña
            </p>
            <Link to="/auth/login">Ya tienes cuenta?</Link>
          </div>
          <button className="w-full my-5 py-2 bg-lime-500 shadow-lg shadow-lime-500/50 hover:shadow-lime-500/40 text-[#000300] rounded-lg">
            Registrarse
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};
