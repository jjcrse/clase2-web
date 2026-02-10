import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Card nombre="Empanada"
        precio=" 25 lukas"
        descripcion="Una chimba de empanadas profe "></Card>
        <Card nombre="Carrito"
        precio=" 198 lukas"
        descripcion="el carro de futuro  "></Card>
        <Card nombre="Moto"
        precio=" 777 lukas"
        descripcion="La moto que vuela una chimba  "></Card>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
