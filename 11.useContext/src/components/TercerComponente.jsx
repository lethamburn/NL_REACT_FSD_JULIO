import React from 'react'
import { useContext } from 'react'
import { ExampleContext } from '../context/context'
const TercerComponente = () => {
    const {name} = useContext(ExampleContext)
  return (
    <div>TercerComponente - {name}</div>
  )
}

export default TercerComponente