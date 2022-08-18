import React, {useContext} from 'react'
import { ExampleContext } from '../context/context'

const PrimerComponente = () => {
  //Sacamos name del contexto a través del hook useContext
  const {name, sayHello} = useContext(ExampleContext)


  return (
    <div>{name} - {sayHello()}</div>
  )
}

export default PrimerComponente