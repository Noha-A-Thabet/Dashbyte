import { BiSolidBellRing } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className=" h-[60px] w-[100%] flex justify-between items-center px-[10px] fixed top-0   left: 0 z-100W"
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
      <div>
        <input
          type="search"
          placeholder="search"
          style={{
            backgroundColor: "#f3f3f9",
            height: "30px",
            width: "230px",
            padding: "12px",
            border: "1px solid lightgray",
          }}
          className=" searchBar rounded-full"
        />
      </div>

      {/* third*/}
      <div className="w-[50%]  flex flex-nowrap justify-end items-center ">
        <div className="w-[50px]  ">
          <BiSolidBellRing style={{ fontSize: "20px" }} />
        </div>

        <div
          className="bg-cover bg-center rounded-full w-[30px] h-[30px]"
          style={{
            backgroundImage: "url('../src/assets/avatar-1.jpg')",
          }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
