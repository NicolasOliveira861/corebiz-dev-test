import Carousel from 'nuka-carousel';
import useDeviceScreen from 'hooks/useDeviceScreen';
import { Container } from './styles';

export interface MainBannerProps {
  images: MainBannerImageProps[];
  mobileImages: MainBannerImageProps[];
}

export interface MainBannerImageProps {
  imageTitle: string;
  imageUrl: string;
}

const MainBanner = ({ images, mobileImages }: MainBannerProps) => {
  const isMobile = useDeviceScreen(768);

  return (
    <Container>
      <Carousel
        autoplay
        autoplayInterval={5000}
        dragging
        renderCenterLeftControls={() => <></>}
        renderCenterRightControls={() => <></>}
        pauseOnHover
        wrapAround
        defaultControlsConfig={{
          pagingDotsContainerClassName: 'custom-paging-dots',
          pagingDotsClassName: 'custom-paging-dot',
        }}
      >
        {isMobile
          ? mobileImages.map((image) => (
              <img
                key={image.imageTitle}
                src={image.imageUrl}
                alt={image.imageTitle}
              />
            ))
          : images.map((image) => (
              <img
                key={image.imageTitle}
                src={image.imageUrl}
                alt={image.imageTitle}
              />
            ))}
      </Carousel>
    </Container>
  );
};

export default MainBanner;
