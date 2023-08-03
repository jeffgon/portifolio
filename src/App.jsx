import { styled } from 'styled-components';
import { Link } from 'react-scroll';
import icone from './assets/icone.png';
import giphy from './assets/giphy.gif';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import gmail from './assets/gmail.png';
import gifmywallet from "./assets/gifmywallet.gif";
import g2 from './assets/g2.png';
import g3 from './assets/g3.png';

function App() {
  return (
    <>
      <Container>
        <Buttons>
            <LinkBotoes to='about' smooth={true} duration={500}>
              Sobre
            </LinkBotoes>
            <LinkBotoes to='skills' smooth={true} duration={500}>
              Habilidades
            </LinkBotoes>
            <LinkBotoes to='projects' smooth={true} duration={500}>
              Projetos
            </LinkBotoes>
            <LinkBotoes to='contact' smooth={true} duration={500}>
              Contato
            </LinkBotoes>      
        </Buttons>

        <Home id='contact'>
          <img src={icone} alt='Ícone' />
          <div>
            <h1>Jefferson Gonçalves</h1>
            <h2>Desenvolvedor Fullstack</h2>
            <Contact>
              <LinkImagem href='https://github.com/jeffgon' target='_blank'>
                <Image src={github} alt='GitHub' />
              </LinkImagem>
              <LinkImagem href='https://linkedin.com/in/jeffgonl' target='_blank'>
                <Image src={linkedin} alt='LinkedIn' />
              </LinkImagem>
              <LinkImagem href='https://mail.google.com/mail/?view=cm&to=jeffdevcoder@gmail.com' target='_blank'>
                <Image src={gmail} alt='Gmail' />
              </LinkImagem>
            </Contact>
          </div>
        </Home>

        <About id='about'>
          <div>
            <img src={giphy} alt='Giphy' />
            <p>
              Sou um desenvolvedor de software fullstack com experiência em projetos front-end e back-end,
              adquirida durante minha participação em um bootcamp. Tenho uma sede constante por conhecimento e estou sempre
              disposto a enfrentar desafios que me permitam aprender e crescer, inclusive em áreas que ainda não explorei.
              Além disso, sou entusiasta em UI/UX Design e valorizo a colaboração em equipe.
            </p>
          </div>
        </About>

        <Skills id='skills'>
          <div>
            <p>🔨 Ferramentas: Linux, VSCode, Docker, Git</p>
            <Icones>
              <img height='70' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linux/linux-original.svg' />
              <img height='70' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original-wordmark.svg' />
              <img height='70' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/docker/docker-original.svg' />
              <img height='70' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg' />
            </Icones>
          </div>

          <div>
            <p>💻 Front-End: HTML, CSS, Javascript, React</p>
            <Icones>
              <img height='70' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg' />
              <img height='70' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original-wordmark.svg' />
              <img height='60' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg' />
              <img height='60' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' />
            </Icones>
          </div>

          <div>
            <p>💻 Back-End e API's: Nodejs, Express, Typescript, Testes de Integração (Jest)</p>
            <Icones>
              <img height='80' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original-wordmark.svg' />
              <img height='15' src='https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' />
              <img height='60' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' />
              <img height='60' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/jest/jest-plain.svg' />
            </Icones>
          </div>

          <div>
            <p>💻 Banco de Dados e Modelagem: Relacionais (Postgresql) e Não Relacionais (MongoDB), Prisma</p>
            <Icones>
              <img height='60' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-plain-wordmark.svg' />
              <img height='60' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain-wordmark.svg' />
              <img height='60' src='https://camo.githubusercontent.com/87724523063a50fdb4afb3e99a06d7c23d5853c41226e8f48b3ef5035db0e894/68747470733a2f2f692e696d6775722e636f6d2f774434725674342e706e67' />
            </Icones>
          </div>
        </Skills>

        <Projects id='projects'>
          <OneProject>
            <p>
              Desenvolvi o MyWallet, um app de gestão financeira com cadastro de entradas e saídas.
              Usei React para a interface interativa e
              responsiva. No servidor, utilizei Node.js e o banco
              de dados MongoDB. O app oferece visão geral
              das finanças, acompanhamento do saldo e
              análise das transações. Deploy: <LinkGit href='https://my-wallet-jeffgon.vercel.app/' target='_blank'>my-wallet-jeffgon.vercel.app</LinkGit>
            </p>

            <div>
              <img height="50" src={gifmywallet} alt="Animação do exemplo" />
            </div>
          </OneProject>

          <SecondProject>
            <p>
              Desenvolvi o Gamebox, um app em desenvolvimento com cadastro, login, jogos, avaliações 
              e interface responsiva usando React Vite. No servidor, estou utilizando Node.js com rotas, 
              controladores, serviços e Prisma com PostgreSQL para armazenar dados. Os recursos incluem 
              autenticação JWT, criptografia de senhas e validação de dados com JOI.
              Repositório Github: <LinkGit href='https://github.com/jeffgon/gamebox' target='_blank'>https://github.com/jeffgon/gamebox</LinkGit>
            </p>

            <div>
              <img height='50' src={g2} />
              <img height='50' src={g3} />
            </div>
          </SecondProject>
        </Projects>

      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Buttons = styled.div`
  display: flex;
  height: auto;
  margin-top: 0;
  justify-content: center;
  background-color: #0B3C5E;
  flex-wrap: wrap;
`;

const LinkBotoes = styled(Link)`
  font-family: 'Teko', sans-serif;
  margin: 15px;
  color: white;
  font-size: 30px;
  text-align: center;
  cursor: pointer;
`;

const Contact = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 75px;
    height: auto;
    max-width: 100%;
    cursor: pointer;
  }
`;

const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #0B3C5E;
  img {
    max-width: 100%;
    height: auto;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 0 auto;
  }
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    margin: 0;
    text-align: center;
    color: #9243FE;
    background-image: linear-gradient(to right, #9243FE, #486cff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  h2 {
    font-family: 'Teko', sans-serif;
    font-size: 30px;
    text-align: center;
    margin: 0;
    color: #208cfc;
  }
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
  margin-left: 10px;
`;

const LinkImagem = styled.a`
  text-decoration: none;
`;

const LinkGit = styled.a`
  color: white;
`;

const About = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a0d22;
  flex-direction: column;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 95%;
      max-width: 1200px; 
      margin: 5px;
    }
    p {
      color: white;
      text-align: center;
      font-size: 25px;
      font-family: 'Teko', sans-serif;
      flex-shrink: 0;
      text-align: center;
    }
    img {
      max-width: 100%;
      margin: 5px;
      width: 300px;
      width: 40vw;
      max-width: 100%;
      height: auto;
    }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: #144258;
  p {
    color: white;
    font-size: 20px;
  }
`;

const Icones = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 5px;
    height: 7vw; 
    max-height: 60px; 
  }
`;

const Projects = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #172042;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OneProject = styled.div`
  width: 80%;
  margin: 5px;
  background-color: #01040B;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #0B3C5E;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  p {
    font-family: 'Teko', sans-serif;
    font-size: 1.5rem; 
    color: white;
    margin-left: 5px;
    text-align: center;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

const SecondProject = styled.div`
  width: 80%;
  margin: 5px;
  background-color: #01040B;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #0B3C5E;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  p {
    font-family: 'Teko', sans-serif;
    font-size: 1.5rem; 
    color: white;
    margin-left: 5px;
    text-align: center;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default App;
