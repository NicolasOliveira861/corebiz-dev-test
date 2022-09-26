import { BuyButton } from 'components/UI/productCard/styles';
import { FlexCol, FlexRow } from 'styles/ui';
import { styled } from '../../../stitches.config';

export const Container = styled(FlexCol, {
  position: 'fixed',
  top: 0,
  width: '21.875rem',
  height: '100vh',
  minHeight: '100vh',
  background: '$white',
  zIndex: 99,
  padding: '1.5rem 1rem 1rem',
  transition: '.4s',
});

export const Overlay = styled('div', {
  background: '$black',
  opacity: 0.2,
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 9,
  display: 'flex',
});

export const CloseBtn = styled('button', {
  position: 'absolute',
  left: '0.9375rem',
  top: '0.9375rem',
});

export const MinicartContent = styled(FlexCol, {
  height: '75%',
  overflowY: 'auto',
});

export const ProductContainer = styled(FlexRow, {
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '1px solid $gray500',
  padding: '0.5rem 0',

  '&:last-child': {
    borderBottom: 'none',
  },
});

export const ProductImage = styled('div', {
  width: '40%',
});

export const ProductInfo = styled(FlexCol, {
  width: '60%',
  alignItems: 'flex-start',
  textAlign: 'left',
  marginLeft: '1rem',
});

export const MinicartFooter = styled(FlexCol, {
  width: '100%',
  height: '25%',
  borderTop: '1px solid $gray300',
  padding: '0.5rem 0',
  rowGap: '0.5rem',
});

export const Subtotal = styled(FlexRow, {
  justifyContent: 'space-between',
  marginBottom: '1rem',
});

export const GoToCheckout = styled(BuyButton, {
  width: '100%',
  height: '2.5rem',
  margin: 0,
  opacity: 1,
});

export const KeepBuying = styled(BuyButton, {
  width: '100%',
  height: '2.5rem',
  background: '$gray500',
  margin: 0,
  opacity: 1,
});
