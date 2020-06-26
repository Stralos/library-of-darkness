import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const InputGroup = (props: any) => {
  const { control } = useFormContext();
  return (
    <Controller
      {...props}
      isGroup
      control={control}
    />
  );
};
