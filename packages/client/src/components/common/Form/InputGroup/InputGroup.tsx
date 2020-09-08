interface InputEvent<K extends string> {
  target: { value: string; checked?: boolean; name: K };
}

interface RenderProps<T, K extends string> {
  onChange?: (e: [InputEvent<K>]) => T;
  onClick?: (e: InputEvent<K>) => void;
  name: K;
  value: T;
}

interface Props<T, K extends string> extends RenderProps<T, K> {
  render: (props: RenderProps<T, K> & { isGroup: boolean }) => JSX.Element;
}

export const InputGroup = <T, K extends string>(props: Props<T, K>) => {
  const { render, ...rest } = props;
  return render({ ...rest, isGroup: true });
};
