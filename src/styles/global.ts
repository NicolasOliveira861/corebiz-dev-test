import { globalCss } from '../../stitches.config';

const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Nunito, sans-serif',
    fontSize: '16px',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#000000',
    textAlign: 'center',
  },

  button: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },

  body: {
    background: '$white',
  },

  img: {
    maxWidth: '100%',
    display: 'block',
  },

  a: {
    textDecoration: 'none',
  },
});

export default GlobalStyles;
