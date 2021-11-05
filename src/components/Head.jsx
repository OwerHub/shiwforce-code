function Head() {
  return (
    <div className="bg-customGray-headBG w-full h-40">
      {/* <div className="bg-red-500 md:bg-yellow-300 xs:bg-green-500">hello</div> */}
      <div
        className="flex   contentWrapper
									flex-col headBrake:flex-row 
									headBrake:justify-between
											"
      >
        <div
          className="headBrake:h-40 pt-7 headBrake:pt-14 
								sm:pl-10 md:pl-0 pl-5 xs:pl-0"
        >
          <div className="text-6xl text-white font-cambo">Smart</div>
          <div className="text-md text-gray-400 -mt-2">inspiring innovations</div>
        </div>

        <div className=" pt-3 headBrake:pt-8 flex justify-end headBrake:block pr-5 xs:pr-0">
          <input
            type="text"
            placeholder="Site Search"
            className="bg-transparent border border-gray-500 px-3 text-gray-300 outline-none "
          />
          <button
            className="
									transition duration-200
									bg-customGray-headBTN  hover:bg-customGray-cardBG hover:text-customGray-cardHvrDown
									px-2 h-7 rounded-xl ml-1 text-md text-white"
          >
            Go!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Head;
