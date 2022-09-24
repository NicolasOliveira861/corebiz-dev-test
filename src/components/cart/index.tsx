import { useContext } from 'react';
import { StoreContext } from 'context/StoreContext';
import { FlexRowCenter } from 'styles/ui';
import { Counter } from './styles';
import { ReactStyleProps } from 'typings/ReactStyleProps';

const Cart = ({ style }: ReactStyleProps) => {
  const { itemsCount } = useContext(StoreContext);

  return (
    <FlexRowCenter style={style}>
      <img src="/cart.svg" />
      <Counter>{itemsCount}</Counter>
    </FlexRowCenter>
  );
};

export default Cart;
