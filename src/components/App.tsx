import Container from './Container'
import OutputPassword from './OutputPassword'
import Options from './Options'

import './App.scss'

const App = () => {
  return (
    <Container>
      <h1>Password Generator</h1>
      <OutputPassword password="Qd6W9Mr(mo$J?L(" />
      <Options />
    </Container>
  )
}

export default App
