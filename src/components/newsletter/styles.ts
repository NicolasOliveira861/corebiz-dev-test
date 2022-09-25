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

export const InputContainer = styled('div', {
  position: 'relative',

  '@max_sm': {
    width: '100%',
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
  border: '1px solid $gray300',
  position: 'relative',
  transition: 'outline-color .3s',

  '&.error': {
    border: '1px solid $red400',

    '&:focus': {
      outlineWidth: '2px',
      outlineColor: '$red400',
    },
  },

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

export const ErrorMsg = styled('p', {
  fontSize: '0.75rem',
  lineHeight: '0.75rem',
  color: '$red400',
  fontFamily: 'Lato, sans-serif',
  position: 'absolute',
  top: 'calc(100% + 0.5rem)',
  left: 0,
});

export const SignButton = styled(Button, {
  width: '8.75rem',
  height: '3rem',
  transition: '.2s',

  '&:hover': {
    background: '$gray700',
  },

  '@max_sm': {
    marginTop: '0.4375rem',
    width: '100%',
  },
});

export const SuccessContainer = styled(Container, {
  rowGap: 0,
});

export const SucessTitle = styled('h1', {
  fontSize: '0.875rem',
  lineHeight: '0.875rem',
  fontWeight: 700,
  color: '$black',
  fontFamily: 'Lato, sans-serif',
});

export const SuccessSubtitle = styled('h2', {
  fontSize: '0.75rem',
  lineHeight: '0.75rem',
  fontWeight: 400,
  color: '$gray700',
  fontFamily: 'Lato, sans-serif',
});

export const NewEmailBtn = styled(SignButton, {
  width: '20.5rem',
  fontWeight: 700,
  fontSize: '0.875rem',
  lineHeight: '0.875rem',
  marginTop: '0.9375rem',
});
