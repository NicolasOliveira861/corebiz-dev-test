import { StoreContext } from 'context/StoreContext';
import { useContext, useEffect } from 'react';
import { OrderFormItem } from 'typings/OrderForm';
import { Button, Container, Quantity } from './styles';

interface Props {
  quantity: number;
  product: OrderFormItem;
}

const QuantitySelector = ({ quantity, product }: Props) => {
  const { setOrderForm, orderForm } = useContext(StoreContext);

  const handleOperation = (operation: 'minus' | 'plus') => {
    setOrderForm((prev) => {
      return {
        items: [
          ...prev.items.map((prevItem) => {
            {
              if (prevItem.productId === product.productId) {
                return {
                  ...prevItem,
                  quantity:
                    operation === 'minus'
                      ? prevItem.quantity - 1
                      : prevItem.quantity + 1,
                };
              } else {
                return {
                  ...prevItem,
                };
              }
            }
          }),
        ],
      };
    });
  };

  useEffect(() => {
    if (quantity === 0) {
      setOrderForm((prev) => {
        return {
          items: [
            ...prev.items
              .filter((prevItem) => {
                return prevItem.productId !== product.productId;
              })
              .map((newProduct) => newProduct),
          ],
        };
      });
    }
  }, [orderForm]);

  return (
    <Container>
      <Button onClick={() => handleOperation('minus')}>-</Button>

      <Quantity>{quantity}</Quantity>

      <Button onClick={() => handleOperation('plus')}>+</Button>
    </Container>
  );
};

export default QuantitySelector;
