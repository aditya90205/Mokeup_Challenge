const Range = () => {
  return (
    <>
    <div className="mt-6 lg:mt-0 mb-11 lg:mb-0 rounded-lg bg-neutral-100 pt-6 lg:p-14 shadow-lg dark:text-black dark:shadow-black/30">

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
            className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-32 lg:px-20 py-2.5 mb-1 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900"
          >
            Update
          </button>
        </div>

        <h1 className="hidden lg:block lg:text-center lg:text-indigo-600 lg:font-bold lg:text-sm lg:mt-5">View Help Docs &gt;</h1>

      </div>
    </div>

    <div className="hidden mt-6 lg:block lg:flex lg:items-center lg:ml-2">
      <div>
       <hr className="w-1 h-24 mx-auto my-4 bg-indigo-700 border-0 rounded md:my-10" />
      </div>
      <div className="flex flex-col items-start ml-3">
      <h1 className="text-lg text-gray-400">Are you considering a <span className="font-bold text-black">Housing Advance?</span></h1>
      <p className="text-sm text-gray-500">Limited time reduced interest.</p>
      <p className="text-indigo-600 mt-3">Learn More  &gt; </p>
      </div>
    </div>
    </>
  );
};

export default Range;
