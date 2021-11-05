import cardDatas from "../datas/cardDatas.json";
import Card from "./Card";

import twitterIcon from "../img/twitter-icon.png";
import googleIcon from "../img/google-plus-icon.png";
import flickrIcon from "../img/flickr-icon.svg";
import skypeIcon from "../img/skype-icon2.png";
import fireIcon from "../img/fire-icon.png";

function BodyDowner() {
  const iconArray = [twitterIcon, googleIcon, flickrIcon, skypeIcon, fireIcon];

  return (
    <div className="bg-customGray-downerBG  pb-5 transform translate-">
      <div className="contentWrapper">
        <section className="grid grid-cols-12  gap-x-8 lg:gap-x-2  ">
          {cardDatas.map((data, iterator) => (
            <Card key={`card ${iterator}`} data={data} count={iterator}></Card>
          ))}
        </section>

        <section
          className="
				bg-black bg-opacity-20 rounded-xl flex mt-3	 text-white w-full xxs:w-3/5 mx-auto xs:w-full xs:mx-0 "
        >
          <div className="w-1/3 h-full hidden sm:block"></div>
          <div className="py-5  text-center sm:text-left  px-4 sm:px-0 sm:w-7/12 ">
            Caum socis nisque nla dusrtase meryuade lertyaferas! Feugiat malesuada
            odiorbi nuravida acursus nloremeasa ders magna uada necsit amet er orem
            ipsumertes.
          </div>
        </section>

        <section className="cursor-pointer flex mt-5  justify-evenly sm:justify-start xxs:px-14 xs:px-0 ">
          {iconArray.map((data, iterator) => (
            <img
              src={data}
              alt={`${iterator}`}
              key={`icon${iterator}`}
              className="h-5 mr-1 shadow-md
						"
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default BodyDowner;
