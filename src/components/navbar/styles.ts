import { FlexRow } from 'styles/ui';
import { styled } from '../../../stitches.config';

export const Container = styled('nav', {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '1rem 0 1.4375rem',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const MobileTop = styled(FlexRow, {
  flex: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.4375rem 1.25rem',
});

export const MobileBottom = styled('div', {
  flex: '100%',
  padding: '0.4375rem 1.25rem',
});
