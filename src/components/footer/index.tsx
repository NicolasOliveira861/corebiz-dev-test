import {
  Container,
  Location,
  LocationInfo,
  LinksContainer,
  FooterLink,
  LogosContainer,
  Content,
} from './styles';

const Footer = () => {
  return (
    <Container>
      <Content>
        <Location>
          <h1>Localização</h1>
          <LocationInfo>
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
            <p>Alphavile SP</p>
            <p>brasil@corebiz.ag</p>
            <p>+55 11 3090 1039</p>
          </LocationInfo>
        </Location>

        <LinksContainer>
          <FooterLink>
            <img src="/corebiz-dev-test/mail.svg" alt="Email icon" />
            ENTRE EM CONTATO
          </FooterLink>

          <FooterLink>
            <img src="/corebiz-dev-test/headphone.svg" alt="Headphone icon" />
            FALE COM O NOSSO CONSULTOR ONLINE
          </FooterLink>
        </LinksContainer>

        <LogosContainer>
          <img src="/corebiz-dev-test/created-by.png" />

          <img src="/corebiz-dev-test/powered-by.png" />
        </LogosContainer>
      </Content>
    </Container>
  );
};

export default Footer;
