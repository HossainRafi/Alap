import React from 'react'


const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
};

const SendMessage = () => {
  return (
    <form  className={style.form}>
      <input
        className={style.input}
        type="text"
        placeholder="Message"
      />
    </form>
  );
}

export default SendMessage