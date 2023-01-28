import React from "react";
import './css/Login.css';
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>  
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div>
        <img className="login-img" src='../../static/img/logoLogin.png' />
      </div>
      <div className="col-md-5 p-lg-2 mx-auto my-2">
        <h1 className="display-4 font-weight-normal">Rick y Morty</h1>
        <p className="lead font-weight-normal">Serie de televisión americana de animación, sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty</p>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => loginWithRedirect()}>Login</button>
      </div>      
    </div>   
    </>
  )
};