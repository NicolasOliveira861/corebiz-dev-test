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
        dragging
        renderCenterLeftControls={() => <></>}
        renderCenterRightControls={() => <></>}
        pauseOnHover
        defaultControlsConfig={{
          pagingDotsContainerClassName: 'custom-paging-dots',
          pagingDotsClassName: 'custom-paging-dot',
        }}
      >
        {isMobile
          ? mobileImages.map((image) => (
              <img src={image.imageUrl} alt={image.imageTitle} />
            ))
          : images.map((image) => (
              <img src={image.imageUrl} alt={image.imageTitle} />
            ))}
      </Carousel>
    </Container>
  );
};

export default MainBanner;
