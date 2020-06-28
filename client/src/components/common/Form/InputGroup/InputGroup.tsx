export const InputGroup = (props: any) => {
  const { render, ...rest } = props;
  return render({ ...rest, isGroup: true });
};
