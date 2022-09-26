# corebiz-dev-test
Project developed to show my skills to Corebiz dev team

<br />
<p>Veja o projeto no Github Pages: <a href="https://bit.ly/3DUH8Nl">Demo</a></p>
<br />

<h1>Como rodar o projeto</h1>

<p>Node utilizado no projeto: 16.13.0</p>

<p>Para rodar o projeto, clone o repositório e rode os seguintes comandos:</p>


<p><code>yarn</code> ou <code>npm install</code> -> Para instalar as dependências</p>

<p><code>yarn dev</code> ou <code>npm run dev</code> -> Para rodar o projeto em modo de desenvolvimento na sua máquina</p>


<h1>Tecnologias utilizadas</h1>
<ul>
  <li><a href="https://vitejs.dev">ViteJS</a> | Utilizado para criar e rodar o projeto, assim como se faz com CRA</li>
  <li>React | Interface</li>
  <li><a href="https://stitches.dev">React Stitches</a> | CSS-in-JS para estilizações</li>
  <li><a href="https://github.com/FormidableLabs/nuka-carousel">Nuka-carousel</a> | Slider para os componentes</li>
  <li>APIs da própria Corebiz para trazer produtos e enviar e-mails para newsletter</li>
</ul>
<br />

<h1>Observações</h1>
<ul>
  <li>O projeto está obedecendo as regras de responsividade</li>
  <li>APIs integradas e funcionando corretamente</li>
  <li>
    Tomei a liberdade de andar a milha extra e acabei criando um <strong>Minicart</strong> para demonstrar mais meus conhecimentos de React e também de VTEX
    <ul>
      <li>Dentro do projeto eu criei um Context novo chamado StoreContext, que engloba a aplicação inteira, o que facilita muito a manipulação de estados globalmente</li>
      <li>Para o correto funcionamento do Minicart, criei também um <strong>OrderForm</strong>, não idêntico ao da VTEX mas que segue uma lógica parecida, para poder manusear os produtos e poder printá-los dentro do Minicart</li>
    </ul>
  </li>
</ul>
