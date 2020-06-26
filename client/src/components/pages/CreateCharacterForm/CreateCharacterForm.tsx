import React, { Fragment } from 'react';
import { Form, Input, InputGroup } from 'components/common/Form';
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
          <Input name="vice" />
          <InputGroup
            as={({ value, ...rest }: any) => (
              <div className={style.attributeSelection}>
                <Input {...rest} value={3} checked={value === 3} />
                <Input {...rest} value={2} checked={value === 2} />
                <Input {...rest} value={1} checked={value === 1} />
              </div>
            )}
            onChange={([e]: any) => {
              return Number(e.target.value);
            }}
            onClick={(e: any) => {
              if (e.target.checked) {
                setValue(e.target.name, Number(e.target.value) - 1);
              }
            }}
            name="attributes.intelligence"
            type="radio"
          />
          {/* <Input name="attributes.intelligence" type="radio" value={1} /> */}
          {/* <Input name="attributes.intelligence" type="radio" value={2} /> */}
          <button type="submit"> Submit</button>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(watch())}
          </pre>
        </Fragment>
      )}
    </Form>
  );
};
