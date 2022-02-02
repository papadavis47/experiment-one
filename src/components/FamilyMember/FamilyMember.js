import { useContext } from "react";
import { VscEdit } from "react-icons/vsc";
import SpanishContext from "../../Context/SpanishContext.js";

const FamilyMember = ({ id, name, color, age, favorite, month, qualities }) => {
  const { spanish } = useContext(SpanishContext);
  return (
    <div key={id} className='flex flex-col min-w-full p-6 mt-4 bg-amber-100 text-amber-700'>
      <h2 className='pb-3 text-xl font-bold text-center capitalize'>{name}</h2>
      <p>
        {spanish ? "Color favorito: " : "Favorite Color:"}{" "}
        <span className='font-bold lowercase'>{color}</span>
      </p>
      <p>
        {spanish ? "Edad: " : "Age:"} <span className='font-bold'>{age}</span>
      </p>
      <p>
        {spanish ? "Mes de nacimiento: " : "Birth Month:"}{" "}
        <span className='font-bold capitalize'>{month}</span>
      </p>
      <p>
        {spanish ? "Actividad favorito: " : "Favorite Activity:"}{" "}
        <span className='font-bold '>{favorite}</span>
      </p>
      <p>
        {spanish ? "Cualidades hermosas: " : "Beautiful Qualities:"}{" "}
        <span className='font-bold '>{qualities}</span>
      </p>
      <button className='mt-2'>
        <VscEdit />
      </button>
    </div>
  );
};

export default FamilyMember;
