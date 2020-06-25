import React, { ReactNode } from 'react';
import {
  FormContext,
  useForm,
  FormContextValues,
  DeepPartial,
} from 'react-hook-form';

interface Props<T> {
  defaultValues?: DeepPartial<T>;
  onSubmit: (props: T) => void;
  children: (props: FormContextValues<T>) => ReactNode;
}

export const Form = <T,>({ children, onSubmit, defaultValues }: Props<T>) => {
  const methods = useForm<T>({ defaultValues });
  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
    </FormContext>
  );
};
