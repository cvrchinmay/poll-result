import React, { useState } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/utils';

const Poll = ({ id, question, options, onSubmitHandler }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const key = `${id}|${selectedOption}`
    const savedVotes = getFromLocalStorage(key);
    setToLocalStorage(key, parseInt(savedVotes) + 1);
    onSubmitHandler(id);
  };

  return (
    <div className='flex flex-col gap-y-4 bg-slate-100 border-2 rounded-xl pb-4'>
      <h3 className='py-2 text-lg font-semibold'>{question}</h3>
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-2 items-center'>
          {options.map((option, index) => (
            <div key={index} className={`flex flex-col py-4 w-full items-center hover:bg-green-400 ${option === selectedOption ? "bg-green-400" : "bg-green-200"}`}>
              <label className='w-full cursor-pointer'>
                <input
                  type="radio"
                  className='mr-2 hidden'
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            </div>
          ))}
          <button className="px-8 py-2 w-fit border border-gray-500 rounded-lg text-xl bg-blue-500 text-white font-bold hover:bg-blue-600 hover:shadow-xl" type="submit">Submit</button>
        </form>
    </div>
  );
};

export default Poll;
