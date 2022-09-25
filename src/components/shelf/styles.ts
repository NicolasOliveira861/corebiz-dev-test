import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  maxWidth: '1250px',
  margin: '1.5625rem auto 4.3125rem',

  '.slider-control-bottomcenter': {
    position: 'absolute',
    bottom: '-1.25rem',

    '& .shelf-custom-paging-dots': {
      display: 'flex',
      columnGap: '0.5rem',

      '& .paging-item': {
        '& .shelf-custom-paging-dot': {
          fill: '$gray300 !important',
          opacity: '1 !important',

          '& .paging-dot': {
            width: '0.625rem',
            height: '0.625rem',
          },
        },

        '&.active': {
          '& .shelf-custom-paging-dot': {
            fill: '$red300 !important',
          },
        },
      },
    },
  },

  '@min_md': {
    '.slider-control-bottomcenter': {
      display: 'none',
    },
  },

  '@max_sm': {
    margin: '0',
    padding: '1rem 0.4375rem 2.5rem',

    '.slider-control-centerleft, .slider-control-centerright': {
      display: 'none',
    },
  },
});

export const Title = styled('h1', {
  fontWeight: 900,
  fontSize: '1.25rem',
  lineHeight: '1.6875rem',
  color: '$black',
  display: 'flex',
  margin: '0 0 1.25rem 3.0938rem',
  position: 'relative',

  '&:before': {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: '-6px',
    height: '0.375rem',
    width: '4.0625rem',
    borderBottom: '0.2687rem solid $gray500',
  },

  '@max_sm': {
    fontSize: '1.125rem',
    lineHeight: '1.5625rem',
    margin: '0 0 0.9169rem 12px',

    '&:before': {
      width: '2.0313rem',
    },
  },
});
