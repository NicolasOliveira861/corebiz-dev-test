import { styled } from '../../../stitches.config';

export const Container = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  left: 0,
  top: 0,
  background: '$white',
  width: '90vw',
  height: '100vh',
  boxShadow:
    'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
  zIndex: 10,
  padding: '1.5rem 1.25rem',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
});

export const Overlay = styled('div', {
  background: '$black',
  opacity: 0.2,
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 9,
});
