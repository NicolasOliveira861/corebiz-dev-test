import { StoreContext } from 'context/StoreContext';
import { useContext } from 'react';
import { Product } from 'typings/Product';
import { GetHigherInstallment } from 'utils/installments';
import { PriceFormatter } from 'utils/price';
import OffFlag from '../promotionFlag';
import Stars from '../stars';
import {
  BuyButton,
  CardBottom,
  CardTop,
  Container,
  InfoFooter,
  InfoHeader,
  Installments,
  ListPrice,
  Price,
  ProductName,
} from './styles';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { setOrderForm } = useContext(StoreContext);
  const item = { ...product, quantity: 1 };
  const productInstallments = GetHigherInstallment(product.installments);

  const handleAddToCart = () => {
    setOrderForm((prev) => {
      const alreadyHasProductId = prev.items.find(
        (item) => item.productId === product.productId
      );

      if (!alreadyHasProductId) {
        return {
          items: [...prev.items, item],
        };
      } else {
        return {
          items: [
            ...prev.items.map((prevItem) => {
              return {
                ...prevItem,
                quantity: prevItem.quantity + 1,
              };
            }),
          ],
        };
      }
    });
  };

  return (
    <Container key={product.productId}>
      <CardTop>
        {product.listPrice && <OffFlag />}

        <img src={product.imageUrl} alt={product.productName} />
      </CardTop>

      <CardBottom>
        <InfoHeader>
          <ProductName>{product.productName}</ProductName>

          <Stars filledStarsQuantity={product.stars} />
        </InfoHeader>

        <InfoFooter>
          {product.listPrice && (
            <ListPrice>de {PriceFormatter('R$ ', product.listPrice)}</ListPrice>
          )}

          <Price>por {PriceFormatter('R$ ', product.price)}</Price>

          {productInstallments.value ? (
            <Installments>
              <span>
                ou em {productInstallments.quantity}x de{' '}
                {PriceFormatter('R$ ', productInstallments.value)}
              </span>
            </Installments>
          ) : (
            <Installments
              style={{
                opacity: 0,
                visibility: 'hidden',
              }}
            >
              .
            </Installments>
          )}

          <BuyButton
            className="buy-button"
            type="button"
            onClick={() => {
              handleAddToCart();
            }}
          >
            Comprar
          </BuyButton>
        </InfoFooter>
      </CardBottom>
    </Container>
  );
};

export default ProductCard;
