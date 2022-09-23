import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { itemsCount } = useContext(StoreContext);

  return (
    <div>
      <span>{itemsCount}</span>
    </div>
  );
};

export default Cart;
