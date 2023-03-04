import { ChangeEvent, useState } from 'react';
export const useForm = (initValues: object) => {
  const [formState, setFormState] = useState(initValues);

  const handleChanges = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  const handleReset = () => {
    setFormState(initValues);
  };

  return {
    ...formState,
    formState,
    handleChanges,
    handleReset
  };
};
