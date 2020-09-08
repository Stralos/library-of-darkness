import React, { ReactNode } from 'react';
import {
  FormContext,
  useForm,
  FormContextValues,
  DeepPartial,
} from 'react-hook-form';

interface RenderProps<T> {
  defaultValues?: DeepPartial<T>;
  onSubmit: (props: T) => void;
  children: (props: FormContextValues<T>) => ReactNode;
}

export const Form = <T,>({
  children,
  onSubmit,
  defaultValues,
}: RenderProps<T>) => {
  const methods = useForm<T>({ defaultValues });

  return (
    <FormContext {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => onSubmit(data))}
        autoComplete="off"
      >
        {children({ ...methods })}
      </form>
    </FormContext>
  );
};
