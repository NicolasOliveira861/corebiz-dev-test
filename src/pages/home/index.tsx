import MainBanner, { MainBannerImageProps } from 'components/mainBanner';
import Sidebar from 'components/sidebar';
import Navbar from '../../components/navbar';

const banners: MainBannerImageProps[] = [
  {
    imageTitle: 'Corebiz main banner 1',
    imageUrl: '/main-banner.png',
  },
  {
    imageTitle: 'Corebiz main banner 2',
    imageUrl: '/main-banner.png',
  },
];

const mobileBanners: MainBannerImageProps[] = [
  {
    imageTitle: 'Corebiz main banner mobile 1',
    imageUrl: '/main-banner-mobile_2.png',
  },
  {
    imageTitle: 'Corebiz main banner mobile 2',
    imageUrl: '/main-banner-mobile_2.png',
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />

      <MainBanner images={banners} mobileImages={mobileBanners} />
    </>
  );
};

export default Home;
