import { useEffect, useState } from 'react';
import { Container } from './styles';

interface Props {
  filledStarsQuantity: number;
}

const Stars = ({ filledStarsQuantity }: Props) => {
  const blankStarsQty = 5 - filledStarsQuantity;

  return (
    <Container>
      {[...Array(filledStarsQuantity)].map((item, idx) => (
        <img src="/filledStar.svg" alt="Estrela pintada" key={idx} />
      ))}

      {[...Array(blankStarsQty)].map((item, idx) => (
        <img src="/emptyStar.svg" alt="Estrela vazia" key={idx} />
      ))}
    </Container>
  );
};
export default Stars;
