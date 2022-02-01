import { useContext } from "react";
import SpanishContext from "../../Context/SpanishContext.js";

const AddFamilyMember = ({ familyMember, handleSubmit, handleChange, toggleAdding }) => {
  const { spanish } = useContext(SpanishContext);
  return (
    <div className='rounded-md flex flex-col bg-amber-600 py-4 px-4 border-amber-500 shadow-md border-4 mb-5'>
      <h3 className='text-amber-100 text-center text-4xl mb-3 font-bold'>
        {spanish ? "Mi Amado" : "My Loved One"}
      </h3>
      <form className='flex flex-col text-lg' onSubmit={handleSubmit}>
        <div className='flex space-x-2'>
          <div className='flex flex-col mb-2 space-y-2 px-3 align-baseline'>
            <label htmlFor='name' className='pt-3 text-amber-100'>
              {spanish ? "Nombre" : "Name"}
            </label>
            <input
              type='text'
              name='name'
              id='name'
              value={familyMember.name}
              onChange={handleChange}
              className='text-amber-900 p-2 outline-amber-400 w-full bg-amber-50 rounded'
            />
          </div>
          <div className='flex flex-col mb-2 space-y-2 px-3 align-baseline'>
            <label htmlFor='age' className='pt-3 text-amber-100'>
              {spanish ? "Edad" : "Age"}
            </label>
            <input
              type='text'
              name='age'
              id='age'
              value={familyMember.age}
              onChange={handleChange}
              className='text-amber-900 p-2 outline-amber-400 bg-amber-50 rounded w-full'
            />
          </div>
        </div>
        <div className='flex space-x-2'>
          <div className='flex flex-col mb-2 space-y-2 px-3 align-baseline'>
            <label htmlFor='month' className='pt-3 text-amber-100'>
              {spanish ? "Mes de nacimiento" : "Birth Month"}
            </label>
            <input
              type='text'
              name='month'
              id='month'
              value={familyMember.month}
              onChange={handleChange}
              className='text-amber-900 p-2 outline-amber-400 bg-amber-50 rounded w-full'
            />
          </div>
          <div className='flex flex-col mb-2 space-y-2 px-3 align-baseline'>
            <label htmlFor='color' className='pt-3 text-amber-100'>
              {spanish ? "Color favorito" : "Favorite Color"}
            </label>
            <input
              type='text'
              name='color'
              id='color'
              value={familyMember.color}
              onChange={handleChange}
              className='text-amber-900 outline-amber-400 p-2 bg-amber-50 rounded w-full'
            />
          </div>
        </div>
        <div className='flex flex-col mb-2 space-y-2 px-3 align-baseline'>
          <label htmlFor='favorite' className='py-3 text-amber-100'>
            {spanish ? "Actividad favorito" : "Favorite Activity"}
          </label>
          <input
            type='text'
            name='favorite'
            id='favorite'
            value={familyMember.favorite}
            onChange={handleChange}
            className='text-amber-900 p-2 outline-amber-400 bg-amber-50 rounded w-full'
          />
        </div>
        <div className='flex flex-col mb-2 space-y-2 px-3 align-baseline'>
          <label htmlFor='qualities' className='py-3 text-amber-100'>
            {spanish ? "Hermosas Cualidades" : "Beautiful Qualities"}
          </label>
          <textarea
            type='text'
            name='qualities'
            id='qualities'
            value={familyMember.qualities}
            onChange={handleChange}
            className='text-amber-900 p-2 outline-amber-400 bg-amber-50 rounded w-full'
          />
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className=' outline-amber-400 mx-2 italic shadow-lg rounded px-4 py-3 mt-8  mb-4 border-4 border-amber-50 text-amber-50 bg-amber-500'
          >
            {spanish ? "Entregar" : "Submit"}
          </button>
          <button
            type='submit'
            className='outline-amber-400 mx-2 italic shadow-lg rounded px-4 py-3 mt-8  mb-4 border-4 border-amber-50 text-amber-50 bg-amber-500'
            onClick={toggleAdding}
          >
            {spanish ? "Regresa" : "Go Back"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFamilyMember;
