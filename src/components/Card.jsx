import { useEffect, useState } from "react";

function Card(props) {
  const [isPair, setPair] = useState("1");

  useEffect(() => {
    setPair(props.count % 2);
  }, []);

  return (
    <div
      className={`
					col-span-12 col-start-auto
					 xxs:col-span-8 xxs:col-start-3  
					 xs:col-start-auto xs:col-span-6  
					 lg:col-span-3 lg:-mt-16 group
					${props.count <= 1 ? "xs:-mt-10 sm:-mt-16" : ""}
					${props.count < 1 ? "-mt-10" : ""}
					`}
    >
      <div
        className={`
          cursor-pointer 
          transition duration-200
          bg-gradient-to-b from-customGray-cardBG to-customGray-cardBG
          group-hover:from-customGray-cardHvrUp group-hover:to-customGray-cardHvrDown
          group-hover:text-white
           md:h-96 lg:h-96  xl:h-80
           
					${isPair ? "rounded-bl-2xl" : "rounded-br-2xl"} 
					${isPair ? "rounded-tr-2xl" : "rounded-tl-2xl"}	`}
        // eredetileg rounded${isPair ? "bl" : "br"}-2xl  -ként volt megadva, de úgy egy általam nem ismert oknál fogva nem működött
      >
        <section
          className="		
					h-36 md:h-48 lg:h-48 xl:h-36  pt-10 pb-3 
						flex items-center flex-col
						justify-between md:justify-evenly xl:justify-between"
        >
          <div className="font-openSans text-5xl font-extrabold">
            {props.data[0]}
          </div>
          <div className="font-yellowtail text-xl mt-2">{props.data[1]}</div>
        </section>

        <section
          className="
							 md:px-9 lg:px-0
								flex flex-col justify-between 
								h-44 md:h-48 lg:h-48 xl:h-44 "
        >
          <article
            className="
                text-center text-sm px-5 
                sm:px-10 md:px-5 xxs:px-5 xs:px-5"
          >
            <div className="text-blue-400">{props.data[2]}</div>
            <div>{props.data[3]}</div>
          </article>
          <article
            className="flex justify-center 
							pb-2		xs:pb-3	 md:pb-2 lg:pb-4"
          >
            <div
              className="
              bg-gradient-to-b transition duration-200
              from-customBlue-buttonUp to-customBlue-buttonDown 
              group-hover:from-customGray-cardBG group-hover:to-customGray-cardBG
              group-hover:text-customGray-cardHvrDown
              py-1 px-6 rounded-2xl text-lg text-white
              font-cambo
							 "
            >
              more
            </div>
          </article>
        </section>
      </div>
      <div
        className={` invisible lg:visible
						bg-gradient-to-b 
            from-customGray-cardBG to-transparent
              group-hover:from-customGray-cardHvrDown group-hover:to-transparent 
						 mt-1 h-5
						 rounded-${!isPair ? "tr" : "tl"}-2xl
						`}
      ></div>
    </div>
  );
}

export default Card;
