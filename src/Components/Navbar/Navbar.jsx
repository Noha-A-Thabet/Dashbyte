import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";

import "./Navbar.css";
import { FiMessageSquare } from "react-icons/fi";

const Navbar = () => {
  return (
    //fixed z-100
    <nav
      className="navBar  h-[60px] w-[99%] flex justify-between items-center  px-[10px] bg-[white]"
      style={{
        borderBottom: "1px solid lightgray",
        boxShadow: "5px 5px 5px rgba(60, 60, 60, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "500px",
          justifyContent: "flex-start",
        }}
      >
        <h2
          className="font-lemon font-bold logoName"
          style={{ letterSpacing: "4px" }}
        >
          Dashbyte
        </h2>
      </div>

      {/* second*/}
      <div className="w-[50%]  flex flex-nowrap justify-end items-center ">
        {/* notification */}
        <div className="w-[50px]  ">
          <IoIosNotificationsOutline style={{ fontSize: "20px" }} />
        </div>

        {/* messages */}
        <div className="w-[50px]  ">
          <FiMessageSquare style={{ fontSize: "16px" }} />
        </div>
        {/*night mood */}
        <div className="w-[50px]  ">
          <FaRegMoon style={{ fontSize: "16px" }} />
        </div>
        {/* acc */}
        <div
          // style={{ border: "2px solid red" }}
          className="w-[200px] flex justify-evenly items-center bg-[#f3f3f9]"
        >
          <div>
            <p className="font-bold">Anna Adame</p>
            <p className="text-[gray]">Founder</p>
          </div>

          <div
            className="bg-cover bg-center rounded-full w-[35px] h-[35px]"
            style={{
              backgroundImage: "url('../src/assets/avatar-1.jpg')",
            }}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
