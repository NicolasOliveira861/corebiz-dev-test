import { Container, Input } from './styles';

const SearchBar = () => {
  return (
    <Container>
      <Input type="text" placeholder="O que está procurando?" />
      <div>
        <img src="/magnifying-glass.svg" />
      </div>
    </Container>
  );
};

export default SearchBar;
