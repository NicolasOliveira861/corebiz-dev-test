import { styled } from '../../stitches.config';

export const FlexRow = styled('div', {
  display: 'flex',
});

export const FlexRowCenter = styled(FlexRow, {
  justifyContent: 'center',
  alignItems: 'center',
});

export const FlexCol = styled(FlexRow, {
  flexDirection: 'column',
});

export const FlexColCenter = styled(FlexCol, {
  justifyContent: 'center',
  alignItems: 'center',
});

export const Button = styled('button', {
  background: '$black',
  color: '$white',
  borderRadius: '5px',
});

export const Link = styled('a', {
  background: '$white',
  color: '$black',
  borderRadius: '5px',
});
