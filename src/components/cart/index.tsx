import { useContext } from 'react';
import { StoreContext } from 'context/StoreContext';
import { FlexRowCenter } from 'styles/ui';
import { Counter } from './styles';
import { ReactStyleProps } from 'typings/ReactStyleProps';

const Cart = ({ style }: ReactStyleProps) => {
  const { setMinicartIsOpen, orderForm } = useContext(StoreContext);

  return (
    <FlexRowCenter
      as={'button'}
      onClick={() => setMinicartIsOpen(true)}
      style={style}
    >
      <img src="/cart.svg" />
      <Counter>{orderForm.items.length}</Counter>
    </FlexRowCenter>
  );
};

export default Cart;
