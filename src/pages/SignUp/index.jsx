export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>Login</h1>
        <label htmlFor="">Email ou usuário:</label>
        <Input
          placeholder="Digite seu email ou usuário"
        />

        <label htmlFor="">Senha:</label>
        <Input
          placeholder="Digite sua senha"
        />

        <Button title="Entrar"/>

        <span>Não tem uma conta? <a>Crie uma aqui</a></span>
        <a href="">Esqueci minha senha</a>
      </Form>
    </Container>
  )
}