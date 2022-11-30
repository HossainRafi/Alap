import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const style = {
  nav: `bg-gray-800 h-10 flex justify-between items-center py-4 pl-4`,
  heading: `text-white text-3xl font-serif`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>AlaP</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
