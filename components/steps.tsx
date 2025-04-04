export function Steps({ activeStep = 1 }) {
  return (
    <div className="flex justify-center">
      <ol className="flex items-center w-full max-w-3xl">
        <li
          className={`flex w-full items-center ${activeStep > 1 ? "text-purple-300" : activeStep === 1 ? "text-white" : "text-purple-500"} after:content-[''] after:w-full after:h-1 after:border-b after:border-purple-700 after:border-4 after:inline-block`}
        >
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full ${activeStep >= 1 ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-purple-900"} shrink-0`}
          >
            <span>1</span>
          </div>
        </li>
        <li
          className={`flex w-full items-center ${activeStep > 2 ? "text-purple-300" : activeStep === 2 ? "text-white" : "text-purple-500"} after:content-[''] after:w-full after:h-1 after:border-b after:border-purple-700 after:border-4 after:inline-block`}
        >
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full ${activeStep >= 2 ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-purple-900"} shrink-0`}
          >
            <span>2</span>
          </div>
        </li>
        <li className={`flex items-center ${activeStep === 3 ? "text-white" : "text-purple-500"}`}>
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full ${activeStep >= 3 ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-purple-900"} shrink-0`}
          >
            <span>3</span>
          </div>
        </li>
      </ol>
    </div>
  )
}

