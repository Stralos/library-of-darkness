import React from 'react';
import { InputGroup, Radio } from 'components/common/Form';
import style from './DotInput.module.scss';

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
        return <div className={style.inputGroup}>{inputs.reverse()}</div>;
      }}
      name={props.name}
    />
  );
};
