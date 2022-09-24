import { ReactStyleProps } from 'typings/ReactStyleProps';
import { Container, Input } from './styles';

const SearchBar = ({ style }: ReactStyleProps) => {
  return (
    <Container style={style}>
      <Input type="text" placeholder="O que está procurando?" />
      <div>
        <img src="/magnifying-glass.svg" />
      </div>
    </Container>
  );
};

export default SearchBar;
