import { createStitches } from '@stitches/react';

export const { styled, css, keyframes, getCssText, theme, globalCss } =
  createStitches({
    theme: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        gray: '#7A7A7A',
        red300: '#F8475F',
      },
    },
    media: {
      xs: '(max-width: 320px)',
      sm: '(min-width: 321px) and (max-width: 768px)',
      md: '(min-width: 769px) and (max-width: 1024px)',
      lg: '(min-width: 1025px) and (max-width: 1440px)',
      xl: '(min-width: 1441px)',
      min_sm: '(min-width: 321px)',
      max_sm: '(max-width: 768px)',
      min_md: '(min-width: 769px)',
      max_md: '(max-width: 1024px)',
      min_lg: '(min-width: 1025px)',
      max_lg: '(max-width: 1440px)',
    },
  });
