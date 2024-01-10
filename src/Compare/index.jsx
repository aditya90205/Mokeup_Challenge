const Compare = () => {
  return (
    <div className="mt-10 mb-6">
      <div className="flex flex-col items-start mb-2">
        <h2 className="font-bold text-xl ">How do I compare to my peers?</h2>
        <h3 className="text-gray-500 text-xs">
          These numbers represent current goal achievement
        </h3>
      </div>

      <div>
      <div className="flex justify-center items-center">
        <h1>Age:</h1>
        <select
          id="underline_select"
          className="ml-2 block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option selected className="">Under 30</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="25">25</option>
          <option value="27">27</option>
        </select>
      </div>
      <div className="flex items-center">
        <h1>Salary:</h1>
        <select
          id="underline_select"
          className="ml-2 block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option selected>K20 - K30</option>
          <option value="K22">K22</option>
          <option value="K24">K24</option>
          <option value="K26">K26</option>
          <option value="K28">K28</option>
        </select>
      </div>
      <div className="flex justify-center items-center">
        <h1>Gender:</h1>
        <select
          id="underline_select"
          className="ml-2 block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      </div>
    </div>
  );
};

export default Compare;
