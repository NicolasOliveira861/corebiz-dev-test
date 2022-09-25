import { Button, FlexCol } from 'styles/ui';
import { styled } from '../../../stitches.config';

export const Container = styled(FlexCol, {
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$gray200',
  padding: '1.5rem 0 2.25rem',
  rowGap: '1rem',
});

export const Title = styled('h1', {
  fontSize: '1.375rem',
  lineHeight: '1.375rem',
  fontWeight: 700,
  color: '$gray700',
  fontFamily: 'Lato, sans-serif',

  '@max_sm': {
    width: '100%',
    textAlign: 'left',
    padding: '0 16px',
  },
});

export const Form = styled('form', {
  display: 'flex',
  columnGap: '0.5rem',

  '@max_sm': {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '0 1rem',
  },
});

export const Input = styled('input', {
  fontSize: '0.75rem',
  lineHeight: '0.875rem',
  fontWeight: 700,
  color: '$gray600',
  fontFamily: 'Lato, sans-serif',
  borderRadius: '5px',
  width: '17.5rem',
  height: '3rem',
  background: '$white',
  textAlign: 'left',
  padding: '0 1rem',
  border: 'none',

  '&:placeholder': {
    fontSize: '0.75rem',
    lineHeight: '0.875rem',
    fontWeight: 700,
    color: '$gray600',
    fontFamily: 'Lato, sans-serif',
  },

  '@max_sm': {
    width: '100%',

    '&:first-child': {
      marginBottom: '1.375rem',
    },
  },
});

export const SignButton = styled(Button, {
  width: '8.75rem',
  height: '3rem',

  '@max_sm': {
    marginTop: '0.4375rem',
    width: '100%',
  },
});
