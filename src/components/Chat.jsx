import React, { useRef } from "react";

const style = {
  main: `flex flex-col p-[10px]`,
};

const Chat = () => {
    const scroll = useRef();
  return (
    <>
          <main className={style.main}>Chat</main>
          
          <span ref={scroll}></span>
    </>
  );
};

export default Chat;
