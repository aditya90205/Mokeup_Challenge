
const Chart = () => {
  return (
    <div className="flex justify-between mb-14 lg:mb-0 lg:ml-10">

    
    <div className="relative w-24 h-20">
    <svg className="w-full h-full" viewBox="0 0 100 100">
     
      <circle
        className="text-gray-200 stroke-current"
        strokeWidth="10"
        
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
      ></circle>
      
      <circle
        className="text-cyan-400  progress-ring__circle stroke-current"
        strokeWidth="10"
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        strokeDashoffset="calc(400 - (400 * 45) / 100)"
      ></circle>
      
      
      <text x="50" y="50" fontFamily="Verdana" fontSize="12" textAnchor="middle" alignmentBaseline="middle" className="font-bold text-lg">78%</text>
    </svg>
      <p>Average</p>
  </div>
    <div className="relative w-24 h-20">
    <svg className="w-full h-full" viewBox="0 0 100 100">
     
      <circle
        className="text-gray-200 stroke-current"
        strokeWidth="10"
        
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
      ></circle>
      
      <circle
        className="text-cyan-400  progress-ring__circle stroke-current"
        strokeWidth="10"
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        strokeDashoffset="calc(400 - (450 * 45) / 100)"
      ></circle>
      
      
      <text x="50" y="50" fontFamily="Verdana" fontSize="12" textAnchor="middle" alignmentBaseline="middle" className="font-bold text-lg">95%</text>
    </svg>
      <p>Top</p>
  </div>
    <div className="relative w-24 h-20">
    <svg className="w-full h-full" viewBox="0 0 100 100">
     
      <circle
        className="text-gray-200 stroke-current"
        strokeWidth="10"
        
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
      ></circle>
      
      <circle
        className="text-cyan-400  progress-ring__circle stroke-current"
        strokeWidth="10"
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        strokeDashoffset="calc(400 - (310 * 45) / 100)"
      ></circle>
      
      
      <text x="50" y="50" fontFamily="Verdana" fontSize="12" textAnchor="middle" alignmentBaseline="middle" className="font-bold text-lg">59%</text>
    </svg>
      <p>Me</p>
  </div>

  </div>

  )
}

export default Chart