import { BiSolidBellRing } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <nav
          className="navBar  z-100 h-[60px] flex justify-between items-center xl:w-[80vw] "
          style={{
            borderBottom: "1px solid lightgray",
            boxShadow: "5px 5px 5px rgba(60, 60, 60, 0.1)",
            position: "fixed",
            top: "0px",
            left: "10.2vw",
            width: "89.5vw",
          }}
        >
          {/* logo */}
          <div
            style={{
              display: "flex",
              width: "22vw",
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
          {/* input*/}
          <div
            style={{
              width: "29vw",
            }}
          >
            <input
              type="search"
              placeholder="search"
              style={{
                backgroundColor: "#f3f3f9",
                height: "10px",
                width: "230px",
                padding: "12px",
                border: "1px solid lightgray",
              }}
              className=" searchBar rounded-full"
            />
          </div>

          {/* Icons*/}
          <div
            className="iconsSec flex flex-nowrap  justify-center items-center"
            style={{
              width: "7vw",
            }}
          >
            <div className="w-[50px]">
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
      </header>
    </>
  );
};

export default Navbar;
