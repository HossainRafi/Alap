import React from "react";
import { auth } from "../firebase";

const style = {
  button: `bg-[#16a085] px-4 py-2 font-bold hover:bg-teal-500 duration-300`,
};

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      Sign Out
    </button>
  );
};

export default LogOut;
