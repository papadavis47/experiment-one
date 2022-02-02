import { useContext } from "react";
import SpanishContext from "../../Context/SpanishContext.js";
import BigButton from "../BigButton/BigButton.js";

const HeaderNav = () => {
  const { spanish, toggleSpanish, setAdding } = useContext(SpanishContext);
  return (
    <div className='flex items-center justify-between w-full mb-6 bg-amber-900 h-30'>
      <div className='flex items-center ml-4 space-x-3'>
        <button onClick={() => setAdding(false)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-20 h-20 text-amber-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1'
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            />
          </svg>
        </button>
        <button onClick={() => setAdding(false)}>
          <h1 className='py-5 text-3xl font-bold text-amber-100'>
            {spanish ? "Agradecido" : "Grateful"}
          </h1>
        </button>
      </div>
      <div className='mr-6'>
        <BigButton
          clickHandler={toggleSpanish}
          text={spanish ? "Cambiar a Inglés" : "Change to Spanish"}
          textSize='text-1xl'
        />
      </div>
    </div>
  );
};

export default HeaderNav;
