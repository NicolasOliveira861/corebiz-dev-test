import {
  ListPrice,
  Price,
  ProductName,
} from 'components/UI/productCard/styles';
import QuantitySelector from 'components/UI/quantitySelector';
import { StoreContext } from 'context/StoreContext';
import { useContext } from 'react';
import { PriceFormatter } from 'utils/price';
import {
  Container,
  Overlay,
  ProductImage,
  ProductInfo,
  ProductContainer,
  MinicartContent,
  MinicartFooter,
  CloseBtn,
  Subtotal,
  GoToCheckout,
  KeepBuying,
} from './styles';

const Minicart = () => {
  const { orderForm, orderFormSubTotal, setMinicartIsOpen, minicartIsOpen } =
    useContext(StoreContext);

  if (orderForm.items.length > 0) {
    return (
      <>
        <Container
          style={
            minicartIsOpen
              ? {
                  right: '0',
                }
              : {
                  right: '-100%',
                }
          }
        >
          <CloseBtn onClick={() => setMinicartIsOpen(false)}>X</CloseBtn>
          <MinicartContent>
            {orderForm.items.map((item) => (
              <ProductContainer key={item.productId}>
                <ProductImage>
                  <img src={item.imageUrl} alt={item.productName} />
                </ProductImage>

                <ProductInfo>
                  <ProductName>{item.productName}</ProductName>
                  {item.listPrice && (
                    <ListPrice>
                      {PriceFormatter('R$ ', item.listPrice)}
                    </ListPrice>
                  )}
                  <Price>{PriceFormatter('R$ ', item.price)}</Price>

                  <QuantitySelector quantity={item.quantity} product={item} />
                </ProductInfo>
              </ProductContainer>
            ))}
          </MinicartContent>

          <MinicartFooter>
            <Subtotal>
              <h1>Total:</h1>

              <span>{PriceFormatter('R$ ', orderFormSubTotal)}</span>
            </Subtotal>

            <GoToCheckout>Ir para o checkout</GoToCheckout>
            <KeepBuying onClick={() => setMinicartIsOpen(false)}>
              Continuar comprando
            </KeepBuying>
          </MinicartFooter>
        </Container>

        <Overlay
          style={
            minicartIsOpen
              ? {
                  display: 'flex',
                }
              : {
                  display: 'none',
                }
          }
          onClick={() => setMinicartIsOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      <Container
        style={
          minicartIsOpen
            ? {
                right: '0',
              }
            : {
                right: '-100%',
              }
        }
      >
        Vazio
      </Container>
      <Overlay
        style={
          minicartIsOpen
            ? {
                display: 'flex',
              }
            : {
                display: 'none',
              }
        }
        onClick={() => setMinicartIsOpen(false)}
      />
    </>
  );
};

export default Minicart;
