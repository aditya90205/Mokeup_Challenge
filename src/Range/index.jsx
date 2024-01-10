const Range = () => {
  return (
    <div className="mt-6 mb-10 rounded-lg bg-neutral-100 pt-6 shadow-lg dark:text-black dark:shadow-black/30">

      <div>

        <h2 className="mb-5 text-3xl font-semibold">Retirement Strategy</h2>
       

        <div className="flex flex-col items-start ml-3 mb-5">

        <div className="flex flex-col items-start mb-7">
           <h1 className="mb-2">Employee Contribution</h1>
           <div className="flex items-center">
            <input
              id="minmax-range"
              type="range"
              min="0"
              max="10"
              value="6"
              className="w-60 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-400"
            />
            <p className="ml-3 text-lg">12%</p>
           </div>
          </div>

          <div className="flex flex-col items-start">
           <h1 className="mb-2">Retirement Age</h1>
           <div className="flex items-center">
            <input
              id="minmax-range"
              type="range"
              min="0"
              max="10"
              value="9"
              className="w-60 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-400"
            />
            <p className="ml-3 text-lg">65</p>
           </div>
          </div>
          
        </div>

        <div className="ml-3">
          <div className="flex mb-2">
             <h1>Employee Contribution</h1>
             <h1 className="ml-20">8.4%</h1>
          </div>
          <div className="flex">
          <h1>Employee Contribution</h1>
             <h1 className="ml-20">8.4%</h1>
          </div>
        </div>
        
        <div className="mt-5">
          <button
            type="button"
            className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-32 py-2.5 mb-1t dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900"
          >
            I want to
          </button>
        </div>

      </div>
    </div>
  );
};

export default Range;
