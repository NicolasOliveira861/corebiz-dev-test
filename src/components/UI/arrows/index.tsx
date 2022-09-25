interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right';
}

export const Arrow = ({ direction, ...rest }: Props) => {
  return (
    <button {...rest}>
      {direction === 'left' ? (
        <img src="/arrowLeft.svg" alt="Left arrow icon" />
      ) : (
        <img src="/arrowRight.svg" alt="Right arrow icon" />
      )}
    </button>
  );
};
