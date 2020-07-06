import React, { Fragment } from 'react';
import { Form, Input, InputGroup, Radio } from 'components/common/Form';
import style from './CreateCharacterForm.module.scss';

interface Character {
  name?: string;
  virtue?: string;
  vice?: string;
  concept?: string;
  clan?: string;
  legacy?: string;
  covenant?: string;
  attributes?: {
    intelligence?: number;
  };
}

export interface Props {
  character?: Character;
  onSubmit: (props: Character) => void;
}

export const CreateCharacterForm = (props: Props) => {
  const { onSubmit, character } = props;
  return (
    <Form<Character>
      onSubmit={onSubmit}
      defaultValues={character}
    >
      {({ watch, setValue }) => (
        <Fragment>
          <Input data-testid="input-name" name="name"/>
          <Input data-testid="input-virtue" name="virtue"/>
          <Input data-testid="input-vice" name="vice" />
          <Input data-testid="input-clan" name="clan"/>
          <Input data-testid="input-legacy" name="legacy"/>
          <Input data-testid="input-concept" name="concept"/>
          <Input data-testid="input-covenant" name="covenant"/>

          <InputGroup
            render={({ value, ...rest }) => (
              <div className={style.attributeSelection}>
                <Radio {...rest} value={5} checked={value === 5} />
                <Radio {...rest} value={4} checked={value === 4} />
                <Radio {...rest} value={3} checked={value === 3} />
                <Radio {...rest} value={2} checked={value === 2} />
                <Radio {...rest} value={1} checked={value === 1} />
              </div>
            )}
            data-testid="input-intelligence"
            onChange={([e]) => Number(e.target.value)}
            onClick={(e) => {
              if (e.target.checked) {
                setValue(e.target.name, Number(e.target.value) - 1);
              }
            }}
            name="attributes.intelligence"
          />
          <button data-testid="submit-form" type="submit">
            Submit
          </button>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(watch())}
          </pre>
        </Fragment>
      )}
    </Form>
  );
};
