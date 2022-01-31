import { useContext } from "react";
import SpanishContext from "../../Context/SpanishContext.js";
import BigButton from "../BigButton/BigButton.js";

const HeaderNav = () => {
  const { spanish, toggleSpanish } = useContext(SpanishContext);
  return (
    <div className='flex bg-amber-900 h-40 w-full justify-between items-center mb-6'>
      <div className='flex items-center space-x-3 ml-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-20 w-20 text-amber-500'
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
        <h1 className='text-4xl font-bold py-5 text-amber-100'>
          {spanish ? "Gente Que Amo" : "People I Love"}
        </h1>
      </div>
      <div className='mr-6'>
        <BigButton
          clickHandler={toggleSpanish}
          text={spanish ? "Cambiar a Inglés" : "Change to Spanish"}
        />
      </div>
    </div>
  );
};

export default HeaderNav;
