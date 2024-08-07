import Toolbar  from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import React from "react";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth =useAuth();
  return (
  <AppBar 
  sx={{bgcolor :"#05101c",position :"fixed" ,boxShadow:"none"}}
  >
    <Toolbar sx={{display:"flex"}}>
    <Logo/>
    <div>
    {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#b388ff"
                to="/chat"
                text="Go To Chat"
                textColor="black"
              />
              <NavigationLink
                bg="#f5f5f5"
                textColor="black"
                to="/"
                text="logout"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#b388ff"
                to="/login"
                text="Login"
                textColor="black"
              />
              <NavigationLink
                bg="#f5f5f5"
                textColor="black"
                to="/signup"
                text="Signup"
              />
            </>
          )}
    </div> 
    </Toolbar>


  </AppBar>
  );
  
};

export default Header;
