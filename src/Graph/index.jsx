
const Graph = () => {
  return (
    <body className="lg:py-0 mt-8 lg:mt-0 flex flex-col items-center justify-center text-gray-700 ">

	<div className="lg:py-9 flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8 lg:p-16">
		<h2 className="text-2xl font-bold ml-0">Contributions Overtime</h2>

        <div className="flex justify-evenly mt-4">
			<div className="flex flex-col lg:flex-row lg:items-center">
				<span className=" w-4 h-2 bg-indigo-400 rounded-md lg:mr-1"></span>
				<p className="text-sm text-gray-400 font-medium">Employer</p>
                <h1 className="font-bold text-lg lg:ml-1 lg:text-sm">$73,500</h1>
			</div>
			<div className="flex flex-col ml-4 lg:flex-row lg:items-center">
				<span className=" w-4 h-2 bg-indigo-300 rounded-md lg:mr-1"></span>
				<span className="text-sm text-gray-400 font-medium">Employee</span>
                <h1 className="font-bold text-lg lg:ml-1 lg:text-sm">$52,500</h1>
			</div>
			<div className="flex flex-col ml-4 lg:flex-row lg:items-center">
				<span className=" w-4 h-2 bg-indigo-200 rounded-md lg:mr-1"></span>
				<span className="text-sm text-gray-400 font-medium">Total Investment</span>
                <h1 className="font-bold text-lg lg:ml-1 lg:text-sm">$244,313</h1>
			</div>
		</div>

		<div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$37,500</span>
				<div className="relative flex justify-center w-8 h-8 bg-indigo-200"></div>
				<div className="relative flex justify-center w-8 h-6 bg-indigo-300"></div>
				<div className="relative flex justify-center w-8 h-4 bg-indigo-400"></div>
				<span className="absolute bottom-0 text-xs font-bold">20</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$45,000</span>
				<div className="relative flex justify-center w-8 h-10 bg-indigo-200"></div>
				<div className="relative flex justify-center w-8 h-9 bg-indigo-300"></div>
				<div className="relative flex justify-center w-8 h-11 bg-indigo-400"></div>
				<span className="absolute bottom-0 text-xs font-bold">35</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$60,500</span>
				<div className="relative flex justify-center w-8 h-10 bg-indigo-200"></div>
				<div className="relative flex justify-center w-8 h-11 bg-indigo-300"></div>
				<div className="relative flex justify-center w-8 h-20 bg-indigo-400"></div>
				<span className="absolute bottom-0 text-xs font-bold">40</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$50,000</span>
				<div className="relative flex justify-center w-8 h-12 bg-indigo-200"></div>
				<div className="relative flex justify-center w-8 h-16 bg-indigo-300"></div>
				<div className="relative flex justify-center w-8 h-20 bg-indigo-400"></div>
				<span className="absolute bottom-0 text-xs font-bold">45</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
				<div className="relative flex justify-center w-8 h-20 bg-indigo-200"></div>
				<div className="relative flex justify-center w-8 h-16 bg-indigo-300"></div>
				<div className="relative flex justify-center w-8 h-20 bg-indigo-400"></div>
				<span className="absolute bottom-0 text-xs font-bold">60</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$55,000</span>
				<div className="relative flex justify-center w-8 h-28 bg-indigo-200"></div>
				<div className="relative flex justify-center w-8 h-12 bg-indigo-300"></div>
				<div className="relative flex justify-center w-8 h-24 bg-indigo-400"></div>
				<span className="absolute bottom-0 text-xs font-bold">65</span>
			</div>
			<div className="relative flex flex-col items-center flex-grow pb-5 group">
				<span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$60,000</span>
				<div className="relative flex justify-center w-8 h-24 bg-indigo-200"></div>
				<div className="relative flex justify-center w-8 h-20 bg-indigo-300"></div>
				<div className="relative flex justify-center w-8 h-28 bg-indigo-400"></div>
				<span className="absolute bottom-0 text-xs font-bold">70</span>
			</div>

		</div>
		
	</div>
	
</body>
  )
}

export default Graph