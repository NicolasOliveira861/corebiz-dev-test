import Carousel from 'nuka-carousel';
import { Product } from 'typings/Product';
import { Container } from './styles';

interface Props {
  products: Product[];
}

const Shelf = ({ products }: Props) => {
  return (
    <Container>
      <Carousel slidesToShow={4}>
        {products.map((product) => (
          <div key={product.productId}>
            <img src={product.imageUrl} alt={product.productName} />

            <h1>{product.productName}</h1>

            <span>{product.stars}</span>

            {product.listPrice && <span>{product.listPrice}</span>}

            <span>{product.price}</span>

            <div>
              {product.installments.quantity}

              {product.installments.value}
            </div>

            <button>Teste</button>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Shelf;
