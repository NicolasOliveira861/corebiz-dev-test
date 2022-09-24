import { StoreContext } from 'context/StoreContext';
import { useContext } from 'react';
import { Product } from 'typings/Product';
import { GetHigherInstallment } from 'utils/installments';
import { PriceFormatter } from 'utils/price';
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
} from './styles';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { setItemsCount } = useContext(StoreContext);
  const productInstallments = GetHigherInstallment(product.installments);

  return (
    <Container key={product.productId}>
      <CardTop>
        <img src={product.imageUrl} alt={product.productName} />
      </CardTop>

      <CardBottom>
        <InfoHeader>
          <h1>{product.productName}</h1>

          <span>{product.stars}</span>
        </InfoHeader>

        <InfoFooter>
          {product.listPrice && (
            <ListPrice>de {PriceFormatter('R$ ', product.listPrice)}</ListPrice>
          )}

          <Price>por {PriceFormatter('R$ ', product.price)}</Price>

          {productInstallments.value && (
            <Installments>
              <span>
                ou em {productInstallments.quantity}x de{' '}
                {PriceFormatter('R$ ', productInstallments.value)}
              </span>
            </Installments>
          )}

          <BuyButton
            className="buy-button"
            type="button"
            onClick={() => {
              setItemsCount((oldValue) => oldValue + 1);
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
