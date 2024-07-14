import { Form, Campo } from './styles'
import { BotaoAdicionar } from '../../components/Botao/styles'
import { useDispatch } from 'react-redux'
import { addContact, Contato } from '../../redux/slice'
import { useState } from 'react'

const AreaPreencher = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newContact: Contato = {
      id: Math.floor(Math.random() * 1000) + 1,
      nome,
      email,
      numero
    }

    dispatch(addContact(newContact))

    setNome('')
    setEmail('')
    setNumero('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <Campo
        type="text"
        name="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <Campo
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="numero">Telefone:</label>
      <Campo
        type="tel"
        name="numero"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />

      <BotaoAdicionar type="submit">Adicionar</BotaoAdicionar>
    </Form>
  )
}

export default AreaPreencher
