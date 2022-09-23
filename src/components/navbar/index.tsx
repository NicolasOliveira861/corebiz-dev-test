import { FlexRowCenter } from '../../styles/ui';
import Cart from '../cart';
import SearchBar from '../UI/searchBar';
import { Container, Href } from './styles';

const Navbar = () => {
  return (
    <Container>
      <img src="/logo-corebiz-preto-cinza.svg" />

      <SearchBar />

      <Href href="/#">
        <FlexRowCenter>
          <img src="/user.svg" />
          <span>Minha Conta</span>
        </FlexRowCenter>
      </Href>

      <Cart />
    </Container>
  );
};

export default Navbar;
