import React from "react";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,

};

const Message = () => {
  return (
    <div>
      <div className={style.message}></div>
    </div>
  );
};

export default Message;
