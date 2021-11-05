import puzzlePics from "../img/repaired-background.jpg";

function BodyUpper() {
  return (
    <div
      style={{ backgroundImage: `url(${puzzlePics})` }}
      className=" bg-cover h-96"
    >
      <div className="text-white font-cambo contentWrapper h-full ">
        <div className=" grid grid-cols-12">
          <div
            className="  
								lg:col-start-4  lg:col-span-9
								md:col-start-2 md:col-span-11
								sm:col-span-10 sm:col-start-3
								col-span-12  col-start-1 
								text-center xs:text-left"
          >
            <div
              className="
								bg-black bg-opacity-80 
								py-4  xs:px-9 sm:px-10 mt-20 xxs:mt-32
								text-5xl 
								inline-block"
            >
              Only individual
            </div>
            <div>
              <div
                className="
								bg-black bg-opacity-70 
								py-1 px-2 xs:px-5 sm:px-6 xs:ml-5 		 
								text-3xl
								inline-block"
              >
                customer support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyUpper;
