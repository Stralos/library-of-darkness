import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

export const withFormContext = (Component: any) => (props: any) => {
  const { control } = useFormContext();
  const { isGroup, ...rest } = props;
  if (isGroup) {
    return <Component {...rest} />;
  }
  return <Controller as={Component} {...rest} control={control} />;
};
