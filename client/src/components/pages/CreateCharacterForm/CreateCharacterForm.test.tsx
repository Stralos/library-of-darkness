import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import { CreateCharacterForm, Props } from './CreateCharacterForm';

describe('CreateCharacterForm', () => {
  const setup = (props: Props) => {
    const helpers = render(<CreateCharacterForm {...props} />);
    return {
      ...helpers,
      updateField: (testId: string, value: string) =>
        fireEvent.change(helpers.getByTestId(testId), {
          target: { value: value },
        }),
    };
  };

  it('should trigger submit when form is submitted', async () => {
    const props = {
      onSubmit: jest.fn(),
    };
    const formValues = {
      vice: 'sloth',
      virtue: 'holy',
      clan: 'Ventrue',
      legacy: 'Malkavian',
      concept: 'Mad docktor',
      covenant: 'Ordo',
      attributes: {
        intelligence: 3,
      },
    };
    const { getAllByTestId, getByTestId, updateField } = setup(props);
    updateField('input-vice', formValues.vice);
    updateField('input-virtue', formValues.virtue);
    updateField('input-clan', formValues.clan);
    updateField('input-legacy', formValues.legacy);
    updateField('input-concept', formValues.concept);
    updateField('input-covenant', formValues.covenant);

    getAllByTestId('input-intelligence')
      .find(
        (input) =>
          Number(input.getAttribute('value')) ===
          formValues.attributes.intelligence
      )
      ?.click();
    await act(async () => getByTestId('submit-form').click());

    expect(props.onSubmit).toHaveBeenCalledWith(formValues);
  });
});
