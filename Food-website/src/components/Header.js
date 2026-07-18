import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

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
          <li> Home </li>
          <li> About us </li>
          <li> Contact us </li>
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
