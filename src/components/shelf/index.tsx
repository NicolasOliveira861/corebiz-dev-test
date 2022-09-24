import ProductCard from 'components/UI/productCard';
import useDeviceScreen from 'hooks/useDeviceScreen';
import Carousel from 'nuka-carousel';
import { Product } from 'typings/Product';
import { Container } from './styles';

interface Props {
  products: Product[];
}

const Shelf = ({ products }: Props) => {
  const isMobile = useDeviceScreen(768);

  return (
    <Container>
      <Carousel
        slidesToShow={4}
        dragging={isMobile ? true : false}
        cellSpacing={99}
      >
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Shelf;
