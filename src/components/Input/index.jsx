import { Container } from './styles'

export function Input({ icon:Icon, ...rest}) {

  return(
    <Container>
      <div className='content'>
        <input {...rest}/>
          {Icon && <button><Icon size={20}/></button>}
      </div>
    </Container>
  )
}