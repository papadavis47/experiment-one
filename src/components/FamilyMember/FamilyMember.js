import { useContext } from "react";
import { VscEdit } from "react-icons/vsc";
import SpanishContext from "../../Context/SpanishContext.js";

const FamilyMember = ({ id, name, color, age, favorite, month, qualities }) => {
  const { spanish } = useContext(SpanishContext);
  return (
    <div key={id} className='flex flex-col min-w-full p-6 bg-amber-100 mt-4 text-amber-700'>
      <h2 className='text-center font-bold text-xl pb-3'>{spanish ? "El amado" : "Loved One"}</h2>
      <p>
        {spanish ? "Nombre:" : "Name:"} <span className='font-bold capitalize'>{name}</span>
      </p>
      <p>
        {spanish ? "Color favorito:" : "Favorite Color:"}{" "}
        <span className='font-bold lowercase'>{color}</span>
      </p>
      <p>
        {spanish ? "Edad:" : "Age:"} <span className='font-bold'>{age}</span>
      </p>
      <p>
        {spanish ? "Mes de nacimiento" : "Birth Month:"}{" "}
        <span className='font-bold capitalize'>{month}</span>
      </p>
      <p>
        {spanish ? "Actividad favorito" : "Favorite Activity:"}{" "}
        <span className='font-bold '>{favorite}</span>
      </p>
      <p>
        {spanish ? "Cualidades" : "Qualities:"} <span className='font-bold '>{qualities}</span>
      </p>
      <div className='mt-2'>
        <VscEdit />
      </div>
    </div>
  );
};

export default FamilyMember;
