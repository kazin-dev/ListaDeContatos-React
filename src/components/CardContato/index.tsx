import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Contato } from '../../redux/slice'
import { editContact, removeContact } from '../../redux/slice'
import {
  BotaoAdicionar,
  BotaoEditar,
  BotaoRemover
} from '../../components/Botao/styles'
import { Card, P } from './styles'
import { Campo } from '../../containers/CampoAdicionar/styles'

interface ContatoProps {
  contato: Contato
}

const CardContato: React.FC<ContatoProps> = ({ contato }) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const [editedNome, setEditedNome] = useState(contato.nome)
  const [editedEmail, setEditedEmail] = useState(contato.email)
  const [editedNumero, setEditedNumero] = useState(contato.numero)

  const handleEdit = () => {
    const editedContact: Contato = {
      ...contato,
      nome: editedNome,
      email: editedEmail,
      numero: editedNumero
    }

    dispatch(editContact(editedContact))

    setEditMode(false)
  }

  const handleRemove = () => {
    dispatch(removeContact(contato.id))
  }

  return (
    <Card>
      {editMode ? (
        <>
          <Campo
            type="text"
            value={editedNome}
            onChange={(e) => setEditedNome(e.target.value)}
          />
          <Campo
            type="email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
          <Campo
            type="tel"
            value={editedNumero}
            onChange={(e) => setEditedNumero(e.target.value)}
          />
          <BotaoAdicionar onClick={handleEdit}>Salvar</BotaoAdicionar>
        </>
      ) : (
        <>
          <P>Nome: {contato.nome}</P>
          <P>Email: {contato.email}</P>
          <P>Telefone: {contato.numero}</P>
          <BotaoEditar onClick={() => setEditMode(true)}>Editar</BotaoEditar>
          <BotaoRemover onClick={handleRemove}>Remover</BotaoRemover>
        </>
      )}
    </Card>
  )
}

export default CardContato
