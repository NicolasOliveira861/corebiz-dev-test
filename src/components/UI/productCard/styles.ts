import { Button, FlexCol } from 'styles/ui';
import { styled } from '../../../../stitches.config';

export const Container = styled(FlexCol, {
  justifyContent: 'flex-start',
  height: '100%',
});

export const CardTop = styled('div', {
  width: '100%',
  position: 'relative',
});

export const CardBottom = styled(FlexCol, {
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',

  '@max_sm': {
    '.buy-button': {
      opacity: 1,
    },
  },

  '&:hover': {
    background: '$gray400',

    '.buy-button': {
      opacity: 1,
    },
  },
});

export const InfoHeader = styled('div', {});

export const ProductName = styled('h1', {
  fontWeight: 600,
  fontSize: '0.75rem',
  lineHeight: '1rem',
  textAlign: 'center',
  color: '$gray',
  margin: '0.4375rem 0',
});

export const InfoFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  height: '100%',
});

export const ListPrice = styled('span', {
  color: '$gray',
  fontSize: '0.75rem',
  lineHeight: '1rem',
  margin: '0.4375rem 0 0.125rem',
  textDecoration: 'line-through',

  '@max_sm': {
    fontSize: '0.6875rem',
  },
});

export const Price = styled('span', {
  color: '$black',
  fontWeight: 700,
  fontSize: '1.125rem',
  lineHeight: '1.5625rem',

  '@max_sm': {
    fontSize: '1rem',
  },
});

export const Installments = styled('div', {
  '& > span': {
    fontSize: '0.6875rem',
    lineHeight: '0.9375rem',
    color: '$gray',
  },
});

export const BuyButton = styled(Button, {
  height: '2rem',
  width: '7.8125rem',
  margin: '0.5rem auto 0.875rem',
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: 700,
  opacity: 0,
});
