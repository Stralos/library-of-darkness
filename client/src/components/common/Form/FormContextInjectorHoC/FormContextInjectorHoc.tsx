import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

export const withFormContext = <T extends { name: string }>(
  Component: React.FunctionComponent<T>
) => (props: Omit<T, 'value'> & { isGroup?: boolean }) => {
  const { control } = useFormContext();
  const { isGroup, ...rest } = props;
  if (isGroup) {
    return <Component {...(rest as T)} />;
  }
  return <Controller as={Component} {...(rest as T)} control={control} />;
};
