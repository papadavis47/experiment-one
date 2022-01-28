import React from "react";

const AddFamilyMember = ({ familyMember, handleSubmit, handleChange, setAdding }) => {
  return (
    <div className='rounded-md flex flex-col bg-amber-600  sm: w-1/3 min-w-min px-6 py-6'>
      <h3 className='text-amber-100 text-center text-4xl mb-3 font-bold'>Family Member</h3>
      <form className='flex flex-col items-center text-xl' onSubmit={handleSubmit}>
        <div className='flex flex-col items-center'>
          <label htmlFor='name' className='py-3 self-start text-amber-100'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            value={familyMember.name}
            onChange={handleChange}
            className='text-amber-900 p-2 outline-amber-400'
          />
        </div>
        <div className='flex flex-col items-center'>
          <label htmlFor='age' className='py-3 self-start text-amber-100'>
            Age
          </label>
          <input
            type='text'
            name='age'
            id='age'
            value={familyMember.age}
            onChange={handleChange}
            className='text-amber-900 p-2 outline-amber-400'
          />
        </div>
        <div className='flex flex-col items-center'>
          <label htmlFor='month' className='py-3 self-start text-amber-100'>
            Birth Month
          </label>
          <input
            type='text'
            name='month'
            id='month'
            value={familyMember.month}
            onChange={handleChange}
            className='text-amber-900 p-2 outline-amber-400'
          />
        </div>
        <div className='flex flex-col items-center'>
          <label htmlFor='color' className='py-3 self-start text-amber-100'>
            Favorite Color
          </label>
          <input
            type='text'
            name='color'
            id='color'
            value={familyMember.color}
            onChange={handleChange}
            className='text-amber-900 outline-amber-400 p-2'
          />
        </div>
        <div className='flex flex-col items-center'>
          <label htmlFor='favorite' className='py-3 self-start text-amber-100'>
            Favorite Activity
          </label>
          <input
            type='text'
            name='favorite'
            id='favorite'
            value={familyMember.favorite}
            onChange={handleChange}
            className='text-amber-900 p-2 outline-amber-400'
          />
        </div>
        <div className='flex'>
          <button
            type='submit'
            className=' mx-2 italic shadow-lg rounded px-4 py-3 mt-8  mb-4 border-4 border-amber-50 text-amber-50 bg-amber-500'
          >
            Submit
          </button>
          <button
            type='submit'
            className=' mx-2 italic shadow-lg rounded px-4 py-3 mt-8  mb-4 border-4 border-amber-50 text-amber-50 bg-amber-500'
            onClick={() => setAdding(false)}
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFamilyMember;
