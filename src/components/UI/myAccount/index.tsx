import { FlexRowCenter } from 'styles/ui';
import { ReactStyleProps } from 'typings/ReactStyleProps';
import { Href } from './styles';

const MyAccount = ({ style }: ReactStyleProps) => {
  return (
    <Href style={style} href="/#">
      <FlexRowCenter style={{ columnGap: '0.3125rem' }}>
        <img src="/corebiz-dev-test/user.svg" alt="User logo" />
        <span>Minha Conta</span>
      </FlexRowCenter>
    </Href>
  );
};

export default MyAccount;
