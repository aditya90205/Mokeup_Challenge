const Goals = () => {
  return (
    <div className="mt-10"> 
        <div className="flex flex-col items-start">
        <h3 className="text-blue-800 ">Retierement Income</h3>
        <h2 className="font-bold text-2xl ">Starting Year 2056</h2>
        </div>

        <div className="mt-4">
            <div className="flex flex-col items-start">
                <h1 className="text-lg font-bold">$300,000</h1>
                <p>My Goal</p>
                <hr className="my-4 w-11/12 h-0.5 border-t-0 bg-blue-500 opacity-100 dark:opacity-30" />
            </div>
            <div className="flex items-start">
                <div className="flex flex-col items-start">
                <h1 className="text-lg font-bold">59%</h1>
                <p>Goal Achieved</p>
                <hr className="my-4 w-full h-0.5 border-t-0 bg-blue-500 opacity-100 dark:opacity-30" />
                </div>
                <div className="flex flex-col items-start ml-10">
                <h1 className="text-lg font-bold">K 300</h1>
                <p>Est. Monthly Income</p>
                <hr className="my-4 w-full h-0.5 border-t-0 bg-blue-500 opacity-100 dark:opacity-30" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Goals