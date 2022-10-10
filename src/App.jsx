import { useState } from 'react'
import { Card } from './components/Card'
import { Form } from './components/Form'

import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center text-light my-5'>Administrar pacientes de veterinaria</h1>
      <Form/>
    </>
  )
}

export default App
