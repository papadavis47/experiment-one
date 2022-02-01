const BigButton = ({ text, clickHandler, textSize }) => {
  return (
    <button
      type='submit'
      className={`outline-amber-400 font-bold italic shadow-lg rounded px-5 py-4 mt-4  mb-4 border-4 border-amber-50 text-amber-50 bg-amber-500 max-w-xl ${textSize}`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default BigButton;
