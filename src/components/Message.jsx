import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex items-center my-1 mx-3 py-1 px-2 rounded-md rounded-md`,
  name: `mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#27ae60] text-white flex-row-reverse text-end float-right rounded-md`,
  received: `bg-[#1289A7] text-black float-left rounded-md`,
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <div>
        <div className={`${style.message} ${messageClass}`}>
          {/* <p className={style.name}>{message.name}</p> */}
          <p>{message.text}</p>
        </div>
    </div>
  );
};

export default Message;
