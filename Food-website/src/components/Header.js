import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [login, setlogin] = useState("login");
  console.log("ye pura refresh hota h , proof => only chnage login button why its refresh the whole component,, This procees is known as reconcillation")
  return (
    <div className="head">
      <div className="logo-container">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8OSSqMZxg5Mw3fEAv1zNQsJVXZfkQkdox1ypUe-AUQ&s
                "
          ></img>
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link to="/">   Home </Link>  </li>
          <li> <Link to="/About">About</Link> </li>
           <li> <Link to="/Contact">Contact</Link> </li>
          <li> Cart </li>
          <button
            onClick={() => {
              login === "login" ? setlogin("logout") : setlogin("login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
