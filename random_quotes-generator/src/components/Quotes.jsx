import React from 'react'
// import quoteData from './quotes.js'


const Quotes = ({handleClick,quote}) => {  
  return (
    // step no1  quotes generate karna hai
    // button click pe generate karna hai
    // quotes ko ui py render karna ha
   <>
   
<h1 className='font-bold text-3xl text-gray-700 text-center mt-6'>Random Password Generator</h1>
<div className="max-w-sm p-6 m-auto mt-28 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
{quote || "click here to get random quotes"}
    </p>
    <button  onClick={handleClick}
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 space-x-5"
>
      Get Quotes 

        
    </button>
</div>



   </>
  )
}

export default Quotes