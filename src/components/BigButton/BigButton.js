import React from "react";

const BigButton = ({ text, adding, setAdding }) => {
  return (
    <button
      type='submit'
      className=' font-bold italic shadow-lg rounded px-5 py-4 mt-8  mb-4 border-4 border-amber-50 text-amber-50 bg-amber-500 text-2xl'
      onClick={() => setAdding(true)}
    >
      {text}
    </button>
  );
};

export default BigButton;
