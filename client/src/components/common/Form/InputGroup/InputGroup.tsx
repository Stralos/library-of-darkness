interface Props {
  render: (props: any & { isGroup: boolean }) => JSX.Element;
  onChange: ([e]: any) => any;
  onClick: (e: any) => any;
  name: string;
}

export const InputGroup = (props: Props) => {
  const { render, ...rest } = props;
  return render({ ...rest, isGroup: true });
};
