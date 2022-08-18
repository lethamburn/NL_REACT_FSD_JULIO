import React, { useContext } from "react";
import { UserContext } from "../context/context";
import "./Header.css";
const Header = () => {
  const { login, logout, user } = useContext(UserContext);
  return (
    <header>
      <nav>
        <a href="#">Gallery</a>
        {user != undefined ? (
          <>
          <p>Welcome {user}</p>
          <button onClick={() => logout()}>Logout</button>
          </>
        ) : (
          <button onClick={() => login()}>Login</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
