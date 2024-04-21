import { render } from '@testing-library/react';

import Textarea from '../Textarea';

describe('Textarea', () => {
  it('should render', () => {
    const { container } = render(<Textarea />);
    const inputElementWrapper = container.querySelector('.base-input-wrapper');

    expect(inputElementWrapper).toBeInTheDocument();
  });

  it('should render label correctly', () => {
    const label = 'Name';

    const { container } = render(<Textarea label={label} />);
    const labelElement = container.querySelector('.base-input__label');

    expect(labelElement).toBeInTheDocument();
    expect(labelElement?.textContent).toEqual(label);
  });

  it('should render error message correctly', () => {
    const error = 'Required';

    const { container } = render(<Textarea error={error} />);
    const errorMessageElement = container.querySelector('.base-input__error-message');

    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement?.textContent).toEqual(error);
  });
});
