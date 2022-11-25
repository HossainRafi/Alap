import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";

const style = {
  main: `flex flex-col p-[10px]`,
};

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
    
    useEffect(() => {
      const q = query(collection(db, "messages"), orderBy("timestamp"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let messages = [];
        querySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messages);
      });
      return () => unsubscribe();
    }, []);
  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
