interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right';
}

export const Arrow = ({ direction, ...rest }: Props) => {
  return (
    <button {...rest}>
      {direction === 'left' ? (
        <img src="/corebiz-dev-test/arrowLeft.svg" alt="Left arrow icon" />
      ) : (
        <img src="/corebiz-dev-test/arrowRight.svg" alt="Right arrow icon" />
      )}
    </button>
  );
};
