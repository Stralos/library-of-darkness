import React from 'react';
import { useFormContext } from 'react-hook-form';

export const withFormContext = (Component: any) => (props: any) => {
  const { register } = useFormContext();
  return <Component {...props} ref={register} />;
};
