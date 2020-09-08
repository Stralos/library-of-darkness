import { withFormContext } from '../FormContextInjectorHoC';
import { Fields as Component, Append as AppendType } from './Fields';

export const Fields = withFormContext(Component);
// https://stackoverflow.com/a/60816011
// https://stackoverflow.com/a/53756081
export type Append<T> = AppendType<T>;
