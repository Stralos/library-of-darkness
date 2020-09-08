import React, { Fragment } from 'react';
import { Form, Input, InputGroup, Radio, Fields } from 'components/common/Form';
import { Character } from 'models';

import style from './CreateCharacterForm.module.scss';

export interface Props {
  character?: Character;
  onSubmit: (props: Character) => void;
}

export const CreateCharacterForm = (props: Props) => {
  const { onSubmit, character } = props;
  return (
    <div className={style.page}>
      <Form<Character> onSubmit={onSubmit} defaultValues={character}>
        {({ watch, setValue }) => {
          return (
            <Fragment>
              <div className={style.characterProfile}>
                <div className={style.characterTrait}>
                  <Input data-testid="input-name" name="name" />
                </div>
                <div className={style.characterTrait}>
                  <Input data-testid="input-virtue" name="virtue" />
                  <Input data-testid="input-vice" name="vice" />
                  <Input data-testid="input-concept" name="concept" />
                </div>
                <div className={style.characterTrait}>
                  <Input data-testid="input-clan" name="clan" />
                  <Input data-testid="input-legacy" name="legacy" />
                  <Input data-testid="input-covenant" name="covenant" />
                </div>
              </div>

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
              <div>
                Merits with fields
                <Fields<Character['merits']>
                  name="merits"
                  render={({ fields, append }) => (
                    <div>
                      {fields.map((item, index) => (
                        <div key={item.text + index}>
                          <Input
                            defaultValue={item.text}
                            name={`merits[${index}].text`}
                          />
                          <Input
                            defaultValue={item.dots}
                            name={`merits[${index}].dots`}
                          />
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() =>
                          append({
                            text: 'Something',
                            dots: 5,
                          })
                        }
                      >
                        Add Merit
                      </button>
                    </div>
                  )}
                />
              </div>
              <button data-testid="submit-form" type="submit">
                Submit
              </button>
              <pre style={{ whiteSpace: 'pre-wrap' }}>
                {JSON.stringify(watch())}
              </pre>
            </Fragment>
          );
        }}
      </Form>
    </div>
  );
};
