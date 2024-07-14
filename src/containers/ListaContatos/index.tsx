import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Contato from '../../components/CardContato'
import { Lista } from './styles'

const ListaDeContatos = () => {
  const contatos = useSelector((state: RootState) => state.contatos)

  return (
    <Lista>
      {contatos.map((contato) => (
        <li key={contato.id}>
          <Contato contato={contato} />
        </li>
      ))}
    </Lista>
  )
}

export default ListaDeContatos
