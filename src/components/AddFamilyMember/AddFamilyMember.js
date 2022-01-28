import React from "react";

const AddFamilyMember = () => {
  return (
    <div className='rounded-md flex flex-col bg-amber-600 text-amber-100 text-2xl w-2/5 px-6 py-8'>
      <h3 className='text-center text-4xl mb-3 font-bold'>Family Member</h3>
      <form className='flex flex-col items-center'>
        <div className='flex flex-col items-center'>
          <label htmlFor='name' className='py-3 self-start'>
            Name
          </label>
          <input type='text' name='name' id='name' />
        </div>
        <div className='flex flex-col items-center'>
          <label htmlFor='age' className='py-3 self-start'>
            Age
          </label>
          <input type='number' name='age' id='age' />
        </div>
        <div className='flex flex-col items-center'>
          <label htmlFor='color' className='py-3 self-start'>
            Favorite Color
          </label>
          <input type='text' name='color' id='color' />
        </div>
        <div className='flex flex-col items-center'>
          <label htmlFor='month' className='py-3 self-start'>
            Birth Month
          </label>
          <input type='text' name='month' id='month' />
        </div>
        <button
          type='submit'
          className='rounded px-4 py-3 mt-8  mb-4 border-4 border-amber-50 text-amber-50 bg-amber-500'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddFamilyMember;
