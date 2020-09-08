import { useFieldArray } from 'react-hook-form';

type Unarray<T> = T extends Array<infer U> ? U : T;
export type Append<T> = (p: Partial<Unarray<T>>) => void;

interface RenderProps<T> {
  append: (p: Partial<Unarray<T>>) => void;
  remove: (index: number | number[]) => void;
  fields: Unarray<T>[];
}

interface Props<T> {
  name: string;
  control: any;
  render: (props: RenderProps<T>) => JSX.Element;
}

export const Fields = <T,>(props: Props<T>) => {
  const methods = useFieldArray({
    control: props.control,
    name: props.name,
  });
  const fields = (methods.fields as unknown) as Unarray<T>[];

  const { render, ...rest } = props;
  return render({
    ...rest,
    fields,
    append: (p) => methods.append(p),
    remove: (index) => methods.remove(index),
  });
};
