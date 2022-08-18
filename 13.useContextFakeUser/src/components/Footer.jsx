import React, {useContext} from 'react';
import { UserContext } from '../context/context';

const Footer = () => {
  const {user} = useContext(UserContext);
  return (
    <footer>Made with ❤️ by Neoland <p>{user != undefined ? ` & ${user}` : ""}</p></footer>
  )
}

export default Footer