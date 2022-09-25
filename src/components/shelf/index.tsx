import { Arrow } from 'components/UI/arrows';
import ProductCard from 'components/UI/productCard';
import useDeviceScreen from 'hooks/useDeviceScreen';
import Carousel from 'nuka-carousel';
import { Product } from 'typings/Product';
import { Container, Title } from './styles';

interface Props {
  products: Product[];
}

const Shelf = ({ products }: Props) => {
  const isMobile = useDeviceScreen(768);

  return (
    <Container>
      <Title>Mais Vendidos</Title>
      <Carousel
        autoplay
        autoplayInterval={5000}
        pauseOnHover
        slidesToShow={isMobile ? 2 : 4}
        dragging={isMobile ? true : false}
        defaultControlsConfig={{
          pagingDotsContainerClassName: 'shelf-custom-paging-dots',
          pagingDotsClassName: 'shelf-custom-paging-dot',
        }}
        renderCenterLeftControls={(slider) => (
          <Arrow direction="left" onClick={() => slider.previousSlide()} />
        )}
        renderCenterRightControls={(slider) => (
          <Arrow direction="right" onClick={() => slider.nextSlide()} />
        )}
        wrapAround={true}
        cellSpacing={isMobile ? 24 : 99}
      >
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Shelf;
