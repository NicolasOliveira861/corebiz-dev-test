import { Product } from 'typings/Product';
import { GetHigherInstallment } from 'utils/installments';
import { PriceFormatter } from 'utils/price';
import {
  CardBottom,
  CardTop,
  Container,
  Installments,
  ListPrice,
  Price,
} from './styles';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const productInstallments = GetHigherInstallment(product.installments);

  return (
    <Container key={product.productId}>
      <CardTop>
        <img src={product.imageUrl} alt={product.productName} />
      </CardTop>

      <CardBottom>
        <h1>{product.productName}</h1>

        <span>{product.stars}</span>

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

        <button>Teste</button>
      </CardBottom>
    </Container>
  );
};

export default ProductCard;
