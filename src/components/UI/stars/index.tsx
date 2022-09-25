import { useEffect, useState } from 'react';
import { Container } from './styles';

interface Props {
  filledStarsQuantity: number;
}

const Stars = ({ filledStarsQuantity }: Props) => {
  const blankStarsQty = 5 - filledStarsQuantity;

  return (
    <Container>
      {[...Array(filledStarsQuantity)].map(() => (
        <img src="/filledStar.svg" />
      ))}

      {[...Array(blankStarsQty)].map(() => (
        <img src="/emptyStar.svg" />
      ))}
    </Container>
  );
};
export default Stars;
