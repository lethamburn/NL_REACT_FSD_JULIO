import React from 'react'
import { useContext } from 'react'
import { ExampleContext } from '../context/context'
const SegundoComponente = () => {
  const {name} = useContext(ExampleContext);
  return (
    <div>{name}</div>
  )
}

export default SegundoComponente