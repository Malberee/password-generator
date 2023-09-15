import { useState } from 'react'

import Container from './Container'
import OutputPassword from './OutputPassword'
import Options from './Options'

import './App.scss'

const App = () => {
  const [generatedPassword, setGeneratedPassword] = useState('')

  return (
    <Container>
      <h1>Password Generator</h1>
      <OutputPassword password={generatedPassword} />
      <Options setGeneratedPassword={setGeneratedPassword}  />
    </Container>
  )
}

export default App
