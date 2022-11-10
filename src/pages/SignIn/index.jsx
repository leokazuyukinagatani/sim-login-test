import { Form, Container, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import logo from '../../assets/logo.svg'
import { FiEyeOff } from 'react-icons/fi'
import { RiErrorWarningFill } from 'react-icons/ri'

export function SignIn() {

  
  return (
    <Background>
      <Container>
        <header>
          <img src={logo} alt="coração com sinal de batimento cardíaco em seu interior" />
          <h1>SIM</h1>
        </header>
        <Form>
          <h1>Login</h1>
          <label htmlFor="">Email ou usuário:</label>
          <Input placeholder="Digite seu email ou usuário" />

          <label htmlFor="">Senha:</label>
          <Input type="password" placeholder="Digite sua senha" icon={FiEyeOff}/>

          <span className="message-error">Email, usuário ou senha incorreto. Tente novamente</span>
          <Button title="Entrar" />

          <span>
            Não tem uma conta? <a href="">Crie uma aqui</a>
          </span>
          <a href="">Esqueci minha senha</a>
        </Form>
      </Container>
      <div id="warning">
        <button>
          <RiErrorWarningFill size={72}/>
        </button>
        <div id="warning-message">
          <span>Precisando de ajuda?</span>
          <a href="">Clique aqui</a>
        </div>
      </div>
    </Background>
  );
}
 