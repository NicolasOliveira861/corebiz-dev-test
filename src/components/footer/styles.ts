import {
  FlexCol,
  FlexColCenter,
  FlexRow,
  FlexRowCenter,
  Link,
} from 'styles/ui';
import { styled } from '../../../stitches.config';

export const Container = styled('footer', {
  display: 'flex',
  background: '$black',
  padding: '1.5625rem 1rem',

  '@max_sm': {
    padding: '1.6875rem 1rem',
  },
});

export const Content = styled(FlexRow, {
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '73.25rem',
  margin: '0 auto',

  '@max_sm': {
    flexDirection: 'column',
  },
});

export const Location = styled(FlexCol, {
  h1: {
    fontSize: '1.25rem',
    lineHeight: '1.6875rem',
    fontWeight: 700,
    position: 'relative',
    marginBottom: '2.5rem',

    '&:before': {
      content: '',
      position: 'absolute',
      left: 0,
      bottom: '-20px',
      height: '0',
      width: '2.8125rem',
      borderBottom: '0.3125rem solid $white',
    },
  },

  'h1, p': {
    color: '$white',
    textAlign: 'left',
  },
});

export const LocationInfo = styled(FlexCol, {
  rowGap: '12px',

  p: {
    fontSize: '0.8125rem',
    lineHeight: '0.75rem',
    fontWeight: 400,
  },
});

export const LinksContainer = styled(FlexColCenter, {
  rowGap: '1.5625rem',

  '@max_sm': {
    margin: '3.3125rem 0 1.5rem',
    rowGap: '1.625rem',
  },
});

export const FooterLink = styled(Link, {
  width: '12.1875rem',
  maxWidth: '12.1875rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2.375rem',
  fontWeight: 600,
  fontSize: '0.75rem',
  lineHeight: '100%',
  padding: '0 1.0625rem',
  columnGap: '1.0625rem',
});

export const LogosContainer = styled(FlexRowCenter, {
  columnGap: '1.5625rem',

  '@max_sm': {
    columnGap: '5.875rem',
    width: '100%',
    margin: '0 auto',
  },

  img: {
    height: '2rem',
  },
});
