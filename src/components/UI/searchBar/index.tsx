import { ReactStyleProps } from 'typings/ReactStyleProps';
import { Container, Input } from './styles';

const SearchBar = ({ style }: ReactStyleProps) => {
  return (
    <Container style={style}>
      <Input type="text" placeholder="O que está procurando?" />
      <div>
        <img
          src="/corebiz-dev-test/magnifying-glass.svg"
          alt="Magnifying glass logo"
        />
      </div>
    </Container>
  );
};

export default SearchBar;
