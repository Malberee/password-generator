import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Container from './Container'
import OutputPassword from './OutputPassword'
import Options from './Options'

import './App.scss'

const App = () => {
  const [generatedPassword, setGeneratedPassword] = useState('')

  return (
    <>
      <Container>
        <h1>Password Generator</h1>
        <OutputPassword password={generatedPassword} />
        <Options setGeneratedPassword={setGeneratedPassword} />
      </Container>
      <ToastContainer
        position="bottom-center"
        autoClose={500}
        hideProgressBar
        closeOnClick
        theme="dark"
      />
    </>
  )
}

export default App
