interface InputEvent {
  target: { value: string; checked?: boolean; name: string };
}

interface RenderProps<T> {
  onChange?: (e: [InputEvent]) => T;
  onClick?: (e: InputEvent) => void;
  name: string;
  value: T;
}

interface Props<T> extends RenderProps<T> {
  render: (props: RenderProps<T> & { isGroup: boolean }) => JSX.Element;
}

export const InputGroup = <T,>(props: Props<T>) => {
  const { render, ...rest } = props;
  return render({ ...rest, isGroup: true });
};
