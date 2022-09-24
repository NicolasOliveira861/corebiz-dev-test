import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  '& img': {
    width: '100%',
  },

  '& .custom-paging-dots': {
    display: 'flex',
    columnGap: '0.75rem',

    '& .paging-item': {
      '& .custom-paging-dot': {
        fill: '$gray300 !important',
        opacity: '1 !important',

        '& .paging-dot': {
          width: '0.625rem',
          height: '0.625rem',
        },
      },

      '&.active': {
        '& .custom-paging-dot': {
          fill: '$red300 !important',
        },
      },
    },
  },
});
