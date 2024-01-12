const Header = () => {
  return (
    <>
      <div className="mt-6 rounded-lg bg-neutral-100 pt-6 lg:p-8 shadow-lg dark:text-black dark:shadow-black/30 lg:w-[22rem]">
        <div className="flex flex-col items-start ml-5 lg:ml-0">
          <div className="flex flex-col items-start">
          <h3 className="text-2xl lg:mb-3">Today</h3>
          <h2 className="text-3xl font-semibold">$19,892</h2>
          <p className="lg:text-sm">Amount Balance</p>
          </div>
        </div>

        <div className="flex justify-evenly mt-4 lg:flex-col lg:items-start">
          <div className="flex flex-col items-start lg:mb-2">
            <h2 className="text-xl font-semibold">$4,000</h2>
            <p className="lg:text-sm">Year-to-Data</p>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-semibold">$1,892</h2>
            <p className="lg:text-sm">Total Interested</p>
            <button
            type="button"
            className="hidden lg:block focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-24 lg:px-4 py-2.5 mb-6 lg:mb-0 lg:mt-3 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900"
          >
            I want to
          </button>
          </div>
        </div>

        <div className="mt-5">
          <button
            type="button"
            className="lg:hidden focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-24 lg:px-4 py-2.5 mb-6 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900"
          >
            I want to
          </button>
        </div>
      </div>
   
<div
  className="mt-6 rounded-lg bg-neutral-100 pt-6 shadow-lg dark:text-black dark:shadow-black/30 lg:mt-1">
        <div className="flex flex-col items-start ml-5">
          <h3 className="text-2xl my-6 lg:text-lg">Recent Transactions</h3>
          <p className="text-gray-400 font-semibold">2020-08-07</p>
          <p className="lg:text-xs">Withdraw Transfer to Bank-XXX11</p>
          <hr className="my-6 w-11/12 h-0.5 border-t-0 bg-neutral-500 opacity-100 dark:opacity-30" />
           <p className="text-gray-400 font-semibold">2020-08-07</p>
          <p className="lg:text-xs">Withdraw Transfer to Bank-XXX11</p>
          <hr className="my-6 w-11/12 h-0.5 border-t-0 bg-neutral-500 opacity-100 dark:opacity-30" />
          <p className="text-gray-400 font-semibold">2020-08-07</p>
          <p className="lg:text-xs">Withdraw Transfer to Bank-XXX11</p>
          <hr className="my-6 w-11/12 h-0.5 border-t-0 bg-neutral-500 opacity-100 dark:opacity-30" />  
        </div>
 
</div>

    </>
  );
};

export default Header;
