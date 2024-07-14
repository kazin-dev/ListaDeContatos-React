import { GlobalStyles } from './components/EstiloGlobal/styles'
import { Container } from './components/Content/styles'
import { GridColumn } from './components/Grid/styles'
import AreaPreencher from './containers/CampoAdicionar'
import Contatos from './containers/ListaContatos'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <GridColumn>
          <AreaPreencher />
          <Contatos />
        </GridColumn>
      </Container>
    </div>
  )
}

export default App
