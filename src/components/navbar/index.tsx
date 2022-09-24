import { useContext } from 'react';
import MyAccount from 'components/UI/myAccount';
import useDeviceScreen from 'hooks/useDeviceScreen';
import Cart from '../cart';
import SearchBar from '../UI/searchBar';
import { Container, MobileTop, MobileBottom } from './styles';
import { StoreContext } from 'context/StoreContext';

const Navbar = () => {
  const { setMenuIsOpen } = useContext(StoreContext);

  const isMobile = useDeviceScreen(1024);

  return (
    <Container
      style={
        isMobile
          ? {
              padding: 0,
            }
          : {}
      }
    >
      {isMobile ? (
        <>
          <MobileTop>
            <button onClick={() => setMenuIsOpen(true)}>
              <img src="/ham.svg" alt="Burger menu icon" />
            </button>

            <img src="/logo-corebiz-preto-cinza.svg" alt="Corebiz logo" />

            <Cart />
          </MobileTop>

          <MobileBottom>
            <SearchBar />
          </MobileBottom>
        </>
      ) : (
        <>
          <img
            style={
              isMobile
                ? {
                    flex: '33%',
                  }
                : {}
            }
            src="/logo-corebiz-preto-cinza.svg"
            alt="Corebiz logo"
          />

          <SearchBar />

          <MyAccount />

          <Cart />
        </>
      )}
    </Container>
  );
};

export default Navbar;
