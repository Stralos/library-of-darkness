import React from 'react';

interface Props {
  name: string;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props) => {
  return <input {...props} />;
};
