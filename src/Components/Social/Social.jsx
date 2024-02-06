import "./Social.css";
import { FaFacebookF, FaInstagramSquare, FaMapPin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

const Social = () => {
  return (
    <>
      <section className="socialParent grid grid-cols-3 gap-4 h-[31vh] pt-[20px] pl-[20px] pb-[20px]">
        {/* ?first */}
        <div
          className="pt-[40px] h-[28vh] rounded-lg bg-[white] "
          style={{ textAlign: "center" }}
        >
          <h1 className="text-left pl-[20px] font-bold">Social Source</h1>
          <div className=" bg-[#d4dbf9] w-[33px] h-[30px] rounded-full text-center mx-auto">
            <FaFacebookF
              className="mx-auto pt-[4px] h-[20px]"
              style={{ color: "blue" }}
            />
          </div>
          <h3 className="font-bold pt-[10px]">Facebook - 125 sales</h3>
          <p className="w-[500px] text-[gray] mx-auto pb-[20px]">
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus tincidunt.
          </p>
          {/* icons */}
          <div className="grid grid-cols-3 gap-2" style={{}}>
            {/* facebook */}
            <div className="mx-auto w-[100px] h-[85px] ">
              <div className="bg-[blue] w-[30px] h-[28px] rounded-full text-center mx-auto">
                <FaFacebookF className="text-[white] mx-auto pt-[5px]" />
              </div>
              <h3 className="font-bold pt-[10px]">Facebook</h3>
              <h4 className="text-[gray] pt-[2px]">125 sales</h4>
            </div>
            {/* twitter */}
            <div className="mx-auto w-[100px] h-[85px] ">
              <div className="bg-[#50a5f1] w-[30px] h-[28px] rounded-full text-center mx-auto">
                <IoLogoTwitter className="text-[white] mx-auto pt-[5px]" />
              </div>
              <h3 className="font-bold pt-[10px]">Twitter</h3>
              <h4 className="text-[gray] pt-[2px]">112 sales</h4>
            </div>

            {/* instagrem */}
            <div className="mx-auto w-[100px] h-[85px] ">
              <div className="bg-[#e83e8c] w-[30px] h-[28px] rounded-full text-center mx-auto">
                <FaInstagramSquare className="text-[white] mx-auto pt-[5px]" />
              </div>
              <h3 className="font-bold pt-[10px]">Instagram</h3>
              <h4 className="text-[gray] pt-[2px]">104 sales</h4>
            </div>
          </div>
        </div>

        {/* ?second */}
        <div className="pt-[40px] text-left bg-[white]  h-[28vh] rounded-lg">
          <h1 className="text-left pl-[20px] font-bold">Activity</h1>
          <section className="grid grid-rows-4 gap-4 mt-[40px]">
            {/* first sec*/}
            <section className="grid grid-cols-3 gap-0 w-[200px] ml-[40px] ">
              <span>
                <FaLongArrowAltRight className=" pt-[3px] text-lg font-bold" />
              </span>
              <span className="font-bold">22 Nov</span>
              <span className="text-sm block font-bold w-[280px] pt-[4px] mt-[-2px]">
                Responded to need “Volunteer Activities”
              </span>
            </section>
            {/* second */}
            <section className="grid grid-cols-3 gap-0 w-[200px] ml-[40px]">
              <span>
                <FaLongArrowAltRight className=" pt-[3px] text-lg font-bold" />
              </span>
              <span className="font-bold">17 Nov</span>
              <span className="text-sm block font-bold w-[280px] pt-[4px] mt-[-2px]">
                why a new common language desirable.
              </span>
            </section>
            {/* third */}

            <section className="grid grid-cols-3 gap-0 w-[200px] ml-[40px]">
              <span>
                <FaLongArrowAltRight className=" pt-[3px] text-lg font-bold" />
              </span>
              <span className="font-bold">15 Nov</span>
              <span className="text-sm block font-bold w-[280px] pt-[4px] mt-[-2px]">
                Joined the group “Boardsmanship Forum”
              </span>
            </section>

            {/* four */}

            <section className="grid grid-cols-3 gap-0 w-[200px] ml-[40px]">
              <span>
                <FaLongArrowAltRight className=" pt-[3px] text-lg font-bold" />
              </span>
              <span className="font-bold">12 Nov</span>
              <span className="text-sm block font-bold w-[280px] pt-[4px] mt-[-2px]">
                Responded to need “In-Kind Opportunity”
              </span>
            </section>
            {/* Fifth sec*/}
            <section className="grid grid-cols-3 gap-0 w-[200px] ml-[40px] ">
              <span>
                <FaLongArrowAltRight className=" pt-[3px] text-lg font-bold" />
              </span>
              <span className="font-bold">10 Nov</span>
              <span className="text-sm block font-bold w-[280px] pt-[4px] mt-[-2px]">
                digital, graphic , “dimensional thinking”
              </span>
            </section>
          </section>
        </div>

        {/* ?third */}
        <div
          className="pt-[40px]  bg-[white]  h-[28vh] rounded-lg"
          style={{ textAlign: "center" }}
        >
          <h1 className="text-left pl-[20px] font-bold">Social Source</h1>
          <div className="  text-center mx-auto">
            <FaMapPin
              className="mx-auto pt-[4px] h-[30px]"
              style={{ color: "blue" }}
            />
          </div>
          <h3 className="font-bold pt-[10px]">1,456</h3>
          <p className="w-[500px] text-[gray] mx-auto pb-[20px]">
            San Francisco
          </p>
          <section className="grid grid-rows-4 gap-2">
            {/* first sec*/}
            <section
              className="grid grid-cols-3 gap-0 w-[400px] ml-[40px]"
              style={{}}
            >
              <span className=" pt-[3px] text-sm font-bold">San Franciso</span>
              <span className="font-bold">1,456</span>
              <span className="text-sm block font-bold w-[180px] pt-[4px] mt-[10px] h-[3px] bg-[blue] rounded-lg"></span>
            </section>
            {/* second */}
            <section
              className="grid grid-cols-3 gap-0 w-[400px] ml-[40px]"
              style={{}}
            >
              <span className=" pt-[3px] text-sm font-bold">Los Angeles</span>
              <span className="font-bold">1,123</span>
              <span className="text-sm block font-bold w-[150px] pt-[4px] mt-[10px] h-[3px] bg-[green] rounded-lg"></span>
            </section>
            {/* third */}
            <section
              className="grid grid-cols-3 gap-0 w-[400px] ml-[40px]"
              style={{}}
            >
              <span className=" pt-[3px] text-sm font-bold">San Diego</span>
              <span className="font-bold">1,026</span>
              <span className="text-sm block font-bold w-[100px] pt-[4px] mt-[10px] h-[3px] bg-[orange] rounded-lg"></span>
            </section>
            {/* Fourth */}
            <section
              className="grid grid-cols-3 gap-0 w-[400px] ml-[40px]"
              style={{}}
            >
              <span className=" pt-[3px] text-sm font-bold">San Franciso</span>
              <span className="font-bold">1,456</span>
              <span className="text-sm block font-bold w-[180px] pt-[4px] mt-[10px] h-[3px] bg-[blue] rounded-lg"></span>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export default Social;
