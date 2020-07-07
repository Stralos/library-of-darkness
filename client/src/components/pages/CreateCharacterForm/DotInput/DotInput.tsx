import React from 'react';
import { InputGroup, Radio } from 'components/common/Form';

export interface Props {
  name: string;
}

export const DotInput = (props: Props) => {
  return (
    <InputGroup
      render={({ value, ...rest }) => {
        let inputs: JSX.Element[] = [];
        for (let i = 1; i <= 5; i++) {
          inputs.push(
            <Radio {...rest} value={i} key={i} checked={value == i} />
          );
        }
        return <div>{inputs}</div>;
      }}
      name={props.name}
    />
  );
};
