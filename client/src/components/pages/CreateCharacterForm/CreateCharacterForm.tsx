import React, { Fragment } from 'react';
import { Form, Input, InputGroup, Radio } from 'components/common/Form';
import style from './CreateCharacterForm.module.scss';

interface Character {
  name: string;
  vice: number;
  attributes: {
    intelligence: number;
  };
}

export const CreateCharacterForm = () => {
  return (
    <Form<Character>
      onSubmit={(data) => {
        console.log(data);
      }}
      defaultValues={{
        vice: 1,
      }}
    >
      {({ watch, setValue }) => (
        <Fragment>
          <div> Test form</div>
          <Input
            name="vice"
          />
          <InputGroup
            render={({ value, ...rest }) => (
              <div className={style.attributeSelection}>
                <Radio {...rest} value={3} checked={value === 3} />
                <Radio {...rest} value={2} checked={value === 2} />
                <Radio {...rest} value={1} checked={value === 1} />
              </div>
            )}
            onChange={([e]) => Number(e.target.value)}
            onClick={(e) => {
              if (e.target.checked) {
                setValue(e.target.name, Number(e.target.value) - 1);
              }
            }}
            name="attributes.intelligence"
          />
          <button type="submit"> Submit</button>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(watch())}
          </pre>
        </Fragment>
      )}
    </Form>
  );
};
