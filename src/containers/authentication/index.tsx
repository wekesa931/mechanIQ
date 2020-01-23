import React, { useState } from "react";

import SignUpModule from "./signup/SignUp";
import LogInModule from "./login/login";

export interface AuthModuleProps {}

const AuthModule: React.SFC<AuthModuleProps> = () => {
  const [message, setMessage] = useState("Log In now");
  // @ts-ignore
  const [currentView, setCurrentView] = useState(<SignUpModule />)

  const switchButton = () => {
    if (message === "Sign up now"){
      setMessage("Log In now");
      // @ts-ignore
      setCurrentView(<SignUpModule />);
      return
    }
    setMessage("Sign up now");
    // @ts-ignore
    setCurrentView(<LogInModule />);
  };
  // @ts-ignore
  return (
    <div>
      {currentView}
     <p>Or <span onClick={switchButton} style={{cursor: 'pointer', color: 'blue'}}>{message}</span></p> 
    </div>
  );
};

export default AuthModule;
