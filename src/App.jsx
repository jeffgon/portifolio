import { styled } from 'styled-components';
import { Link } from 'react-scroll';
import icone from './assets/icone.png';
import giphy from './assets/giphy.gif';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import gmail from './assets/gmail.png';
import mw1 from './assets/mw1.png';
import mw3 from './assets/mw3.png';
import mw4 from './assets/mw4.png';
import mw5 from './assets/mw5.png';
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
            <p>🔨 Tools: Linux, VSCode, Docker</p>
            <Icones>
              <img height='70' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linux/linux-original.svg' />
              <img height='70' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original-wordmark.svg' />
              <img height='70' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/docker/docker-original.svg' />
            </Icones>
          </div>

          <div>
            <p>💻 Front-End: HTML, Css, Javascript, React</p>
            <Icones>
              <img height='70' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg' />
              <img height='70' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original-wordmark.svg' />
              <img height='60' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg' />
              <img height='60' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' />
            </Icones>
          </div>

          <div>
            <p>💻 Back-Ends and APIS: Nodejs, Express, Typescript</p>
            <Icones>
              <img height='80' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original-wordmark.svg' />
              <img height='45' src='https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' />
              <img height='60' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' />
            </Icones>
          </div>

          <div>
            <p>💻 Databases and Modeling: MongoDB, Postgresql, Prisma</p>
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
              análise das transações. Repositório Github: <LinkGit href='https://github.com/jeffgon/mywallet' target='_blank'>https://github.com/jeffgon/mywallet</LinkGit>
            </p>

            <div>
              <img height='50' src={mw1} />
              <img height='50' src={mw3} />
              <img height='50' src={mw4} />
              <img height='50' src={mw5} />
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
  height: 40px;
  margin-top: 0;
  background-color: #0a0d22;
  justify-content: flex-end;
`;

const LinkBotoes = styled(Link)`
  font-family: 'Teko', sans-serif;
  margin: 10px;
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
    height: 75px;
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
  background-color: #0a0d22;
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
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0B3C5E;
  flex-direction: column;
  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 100%;
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
    margin-top: 30px;
    margin-right: 15px;
    width: 350px;
    height: 250px;
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
  background-color: #01040B;
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
  }
`;

const Projects = styled.div`
  width: 100%;
  height: 140vh;
  min-height: 100vh;
  background-color: #172042;
  display: flex;
  flex-direction: column;
`;

const OneProject = styled.div`
  width: 99%;
  height: auto;
  margin: 5px;
  background-color: #144258;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-family: 'Teko', sans-serif;
    font-size: 20px;
    color: white;
    margin-left: 5px;
    text-align: center;
  }
  img {
    max-width: 100%;
    margin: 8px;
    height: 320px;
  }
`;

const SecondProject = styled.div`
  width: 99%;
  height: auto;
  margin: 5px;
  background-color: #144258;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-family: 'Teko', sans-serif;
    font-size: 20px;
    color: white;
    margin-left: 5px;
    text-align: center;
  }
  img {
    max-width: 95%;
    margin: 5px;
    height: 270px;
  }
`;

export default App;
