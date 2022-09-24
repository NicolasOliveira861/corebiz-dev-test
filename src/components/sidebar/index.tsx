import MyAccount from 'components/UI/myAccount';
import { StoreContext } from 'context/StoreContext';
import { useContext } from 'react';
import { Container, Overlay } from './styles';

const Sidebar = () => {
  const { menuIsOpen, setMenuIsOpen } = useContext(StoreContext);

  return (
    <>
      <Container
        style={
          menuIsOpen
            ? {
                display: 'flex',
              }
            : {
                display: 'none',
              }
        }
      >
        <MyAccount />
      </Container>

      <Overlay
        style={
          menuIsOpen
            ? {
                display: 'flex',
              }
            : {
                display: 'none',
              }
        }
        onClick={() => setMenuIsOpen(false)}
      />
    </>
  );
};

export default Sidebar;
