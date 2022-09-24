import { FlexCol } from 'styles/ui';
import { styled } from '../../../../stitches.config';

export const Container = styled(FlexCol, {
  justifyContent: 'center',
});

export const CardTop = styled('div', {
  width: '100%',
});

export const CardBottom = styled(FlexCol, {
  width: '100%',

  '& > h1': {
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: '1rem',
    textAlign: 'center',
    color: '$gray',
    margin: '0.4375rem 0',
  },
});

export const ListPrice = styled('span', {
  color: '$gray',
  fontSize: '0.75rem',
  lineHeight: '1rem',
  margin: '0.4375rem 0 0.125rem',
});

export const Price = styled('span', {
  color: '$black',
  fontWeight: 700,
  fontSize: '1.125rem',
  lineHeight: '1.5625rem',
});

export const Installments = styled('div', {
  '& > span': {},
});
