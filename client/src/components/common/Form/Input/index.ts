import { withFormContext } from '../FormContextInjectorHoC';
import { Input as Component } from './Input';

export const Input = withFormContext(Component);
