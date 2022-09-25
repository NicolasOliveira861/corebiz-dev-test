import { useState, useEffect } from 'react';
import MainBanner, { MainBannerImageProps } from 'components/mainBanner';
import Sidebar from 'components/sidebar';
import Navbar from '../../components/navbar';
import { Product } from 'typings/Product';
import Shelf from 'components/shelf';
import Newsletter from 'components/newsletter';

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
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://corebiz-test.herokuapp.com/api/v1/products')
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />

      <MainBanner images={banners} mobileImages={mobileBanners} />

      <Shelf products={products} />

      <Newsletter />
    </>
  );
};

export default Home;
