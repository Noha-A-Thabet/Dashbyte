import "./Dashboard.css";
import { IoPieChartSharp } from "react-icons/io5";
import { LuFiles } from "react-icons/lu";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <section
      className="parentDash mt-[100px]  grid grid-cols-2 gap-0"
      style={{
        marginTop: "4px",
        height: "65vh",
        width: "84.9vw",
        backgroundColor: "#f4f4f8",
      }}
    >
      {/* welcome section main  */}
      <section
        className="welcomeSec grid grid-rows-2 gap-[85px]"
        style={{
          width: "40vw",
          height: "65vh",
        }}
      >
        {/* welcomeBack div  first  */}
        <div
          className=" welcomeBack grid grid-row-2 gap-0 rounded-lg"
          style={{
            height: "35vh",
            backgroundColor: "white",
          }}
        >
          <div className="welocmeTxt w-[100%] bg-lightPurple flex flex-row justify-between items-center ">
            {/* welcome text */}
            <div className=" flex justify-center flex-col items-center pl-[30px] ">
              <h2 className="text-darkPurple font-bold text-xl">
                welcome back !
              </h2>
              <h3 className="text-darkPurple text-lg">Dashbyte</h3>
            </div>

            {/* profile image*/}
            <div className="profileImg "></div>
          </div>
          {/* developerImage */}
          <div className="developerSec pl-[30px]">
            <div
              className="developerImage bg-cover bg-center rounded-full w-[50px] h-[53px] mt-[-40px]"
              style={{
                backgroundImage: "url('../src/assets/avatar-1.jpg')",
              }}
            ></div>
            {/* developerInfo */}
            <div className="developerInfo grid grid-cols-3 gap-4">
              {/* info */}
              <div>
                <h2>David Miller </h2>
                <h3>UI/UX Designer</h3>
                <button
                  className="bg-darkPurple text-white w-[7vw] h-[4vh] mt-[10px] tracking-wider rounded-lg "
                  style={{ color: "white", fontSize: "13px" }}
                >
                  View Profile
                </button>
              </div>
              {/* projects */}
              <div className="text-center">
                <h3 className="font-bold">125</h3>
                <h2>Projects </h2>
              </div>
              {/* revenue */}
              <div className="text-center">
                <h3 className="font-bold">$1245</h3>
                <h2>Revenue</h2>
              </div>
            </div>
          </div>
        </div>

        {/* monthly Sec  second*/}
        <div
          className="monthlySec grid grid-cols-2 gap-4 pl-[30px] h-[26vh] rounded-lg"
          style={{ backgroundColor: "white" }}
        >
          {/* monthly div  */}
          <div className="flex items-start justify-center flex-col">
            <h2 className="font-bold my-[10px]">Monthly Earning</h2>
            <p className="my-[10px] text-[#837575]">This Month </p>
            <h2 className="font-bold my-[7px]">$34,252</h2>

            <button
              className=" bg-darkPurple text-white w-[7vw] h-[4vh] mt-[10px] tracking-wider rounded-lg"
              style={{ color: "white", fontSize: "13px" }}
            >
              View More
            </button>
          </div>
          {/* icon */}
          <div className="flex flex-col justify-center items-center">
            <div
              style={{
                height: "70px",
                width: "140px",
              }}
            >
              <IoPieChartSharp
                style={{ color: "#556ee6", width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="flex flex-row items-center justify-center"
              style={{ width: "130px" }}
            >
              <p className="text-gray" style={{ color: "Gray" }}>
                85%
              </p>
              <p
                className="text-gray block"
                style={{ color: "Gray", marginLeft: "10px" }}
              >
                Series A
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* second div */}
      {/* main  */}
      <section className="ordersChartsDiv grid grid-rows-2 h-[62vh] w-[42vw]">
        {/* first row */}
        <div className="orderSec grid grid-cols-3 gap-2 h-[10vh] ">
          {/* orders */}
          <section
            className="orders flex justify-around items-center rounded-lg"
            style={{ backgroundColor: "white", width: "13vw" }}
          >
            <div>
              <h2 className="text-[#7480b2]">Orders</h2>
              <p className="font-bold"> 1,235</p>
            </div>
            <div className="iconSec w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <LuFiles
                style={{ fontSize: "10px", color: "white" }}
                className="rounded-full h-[25px] w-[20px]  text-center"
              />
            </div>
          </section>
          {/* revenu */}
          <section
            className=" revenu flex justify-around items-center rounded-lg"
            style={{ backgroundColor: "white", width: "13vw" }}
          >
            <div>
              <h2 className="text-[#7480b2]">Revenue</h2>
              <p className="font-bold">$35,723</p>
            </div>
            <div className="iconSec w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <FaArrowDownLong
                style={{ fontSize: "10px", color: "white" }}
                className="rounded-full h-[18px] w-[15px]  text-center"
              />
            </div>
          </section>
          {/* price */}
          <section
            className="price flex justify-around items-center rounded-lg"
            style={{ backgroundColor: "white", width: "13vw" }}
          >
            <div>
              <h2 className="text-[#7480b2]">Price</h2>
              <p className="font-bold">$16.2</p>
            </div>
            <div className="iconSec w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <IoMdPricetags
                style={{ fontSize: "12px", color: "white" }}
                className="rounded-full h-[22px] w-[18px]  text-center"
              />
            </div>
          </section>
        </div>
        {/* second row */}
        <div
          style={{
            marginTop: "-140px",

            backgroundColor: "white",
          }}
          className="chartSec rounded-lg"
        >
          <Charts />
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
