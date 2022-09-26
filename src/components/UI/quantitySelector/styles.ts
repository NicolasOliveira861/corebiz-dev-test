import { FlexRow } from 'styles/ui';
import { styled } from '../../../../stitches.config';

export const Container = styled(FlexRow, {
  height: '1.5rem',
});

export const Button = styled('button', {
  borderRadius: '0.3125rem 0 0 0.3125rem',
  height: '100%',
  width: '1.5rem',
  background: '$gray400',

  '&:last-child': {
    borderRadius: ' 0 0.3125rem 0.3125rem 0',
  },
});

export const Quantity = styled('span', {
  width: '1.6rem',
  height: '100%',
  border: '1px solid $gray400',
});
