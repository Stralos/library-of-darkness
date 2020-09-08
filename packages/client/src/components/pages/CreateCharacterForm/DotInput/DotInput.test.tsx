import React from 'react';
import { render } from '@testing-library/react';
import { Form } from 'components/common/Form';
import { DotInput, Props } from './DotInput';

describe('DotInput', () => {
  const getProps = (): Props => ({
    name: 'attribute',
  });

  const setup = (props: Props) =>
    render(<DotInput {...props} />, {
      wrapper: ({ children }) => (
        <Form onSubmit={jest.fn}>{() => children}</Form>
      ),
    });

  it('should have 5 radio inputs', async () => {
    const props = getProps();
    const { getAllByRole, container } = setup(props);
    expect(container.querySelectorAll(`[name=${props.name}]`)?.length).toBe(5)
  });
});
