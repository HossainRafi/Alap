import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

const style = {
  button: `bg-[#16a085] px-4 py-2 font-bold hover:bg-teal-500 duration-300`,
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};
const SignIn = () => {
  return (
    <button onClick={googleSignIn} className={style.button}>
      Sign In
    </button>
  );
};

export default SignIn;
