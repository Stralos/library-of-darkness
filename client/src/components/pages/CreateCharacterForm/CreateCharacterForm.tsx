import React, { Fragment } from 'react';
import { Form, Input } from '../../common/Form';
import { Controller } from 'react-hook-form';

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
      {({ watch, control, setValue }) => (
        <Fragment>
          <div> Test form</div>
          {/* <Controller
            as={<input />}
            name="vice"
            control={control}
            onChange={([e]: any) => {
              return Number(e.target.value);
            }}
          />
          <Controller
            as={<input type={'radio'} />}
            name="name"
            control={control}
            value={1}
            defaultValue={1}
            onChange={([e]) => {
              debugger;
              return e.target.value;
            }}
          />
          <Controller
            as={<input type={'radio'} />}
            name="name"
            control={control}
            value={2}
            defaultValue={2}
            onChange={([e]) => {
              debugger;
              return e.target.value;
            }}
          />
          <Controller
            as={<input type={'radio'} />}
            name="name"
            control={control}
            value={3}
            defaultValue={3}
            onChange={([e]) => {
              debugger;
              return e.target.value;
            }}
          /> */}

          <Input
            name="vice"
            onChange={(e: any) => {
              debugger;
              const newValue = Number(e.target.value);

              setValue('vice', newValue);
              return newValue;
            }}
          />
          <button
            onClick={() => {
              setValue('vice', 22);
            }}
          >
            Test
          </button>
          <Input name="attributes.intelligence" type="radio" value={1} />
          <Input name="attributes.intelligence" type="radio" value={2} />
          <button type="submit"> Submit</button>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(watch())}
          </pre>
        </Fragment>
      )}
    </Form>
  );
};
