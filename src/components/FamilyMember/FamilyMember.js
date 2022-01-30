import { useContext } from "react";
import SpanishContext from "../../Context/SpanishContext.js";

const FamilyMember = ({ id, name, color, age, favorite, month }) => {
  const { spanish } = useContext(SpanishContext);
  return (
    <div key={id} className='flex flex-col w-full p-6 bg-amber-300 mt-4 text-amber-700'>
      <h2 className='text-center font-bold text-xl pb-3'>
        {spanish ? "El amado" : "The Loved One"}
      </h2>
      <p>
        {spanish ? "Nombre:" : "Name:"} <span className='font-bold'>{name}</span>
      </p>
      <p>
        {spanish ? "Color favorito:" : "Favorite Color:"} <span className='font-bold'>{color}</span>
      </p>
      <p>
        {spanish ? "Edad:" : "Age:"} <span className='font-bold'>{age}</span>
      </p>
      <p>
        {spanish ? "Mes de nacimiento" : "Birth Month:"} <span className='font-bold'>{month}</span>
      </p>
      <p>
        {spanish ? "Actividad favorito" : "Favorite Activity:"}{" "}
        <span className='font-bold'>{favorite}</span>
      </p>
    </div>
  );
};

export default FamilyMember;
