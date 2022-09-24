import { styled } from '../../../../stitches.config';
import { FlexRow } from '../../../styles/ui';

export const Container = styled(FlexRow, {
  marginLeft: '7.5625rem',
  justifyContent: 'space-between',
  maxWidth: '44.875rem',
  width: '100%',
  borderBottom: '1px solid $gray',
  padding: '5px 0',
  flex: '25%',

  '@max_md': {
    marginLeft: 0,
  },
});

export const Input = styled('input', {
  border: 'none',
  width: '100%',
  textAlign: 'left',

  '&:focus': {
    outline: '1px solid rgba(0,0,0,0.2)',
    outlineOffset: '.2rem',
    width: '95%',
    borderRadius: '2px',
  },
});
