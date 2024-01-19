import "./Header.css";
//d4dbf9
const Header = () => {
  return (
    <header
      className=" dashHeader bg-gray rounded-lg h-[35vh] w-[100vw] flex flex-col container "
      style={{ border: "2px solid green" }}
    >
      {/* first section */}
      <section className="h-[50%]  w-[100%]   bg-purple flex justify-between items-center">
        {/* first Div */}
        <h2 className="h-[50%]  w-[50%] m-[25px] text-[#8f75e6] font-bold flex items-center">
          Welcome Back !
        </h2>

        {/* second div */}
        <div
          className=" text-cente bg-contain bg-no-repeat bg-center h-[100%] w-[30%] "
          style={{
            backgroundImage: "url('../src/assets/profile-img.png')",
          }}
        ></div>
      </section>

      {/* second section */}
      <section className="h-[50%]  bg-white bg-[#ffffff] flex flex-row  justify-between">
        {/* first section */}
        <div className="w-[30%]" style={{ border: "1px solid red" }}>
          <div
            className="bg-cover bg-center rounded-full  m-[25px] mt-[-25px] w-[65px] h-[65px] border-none "
            style={{
              backgroundImage: "url('../src/assets/avatar-1.jpg')",
              border: "3px solid white",
            }}
          ></div>
          <h3 className=" w-[100px] mt-[-20px]  mx-[25px] text-start font-semibold">
            Joe Allen
          </h3>
          <h4 className="w-[120px] mx-[25px]  text-start tracking-tighter">
            UI/UX Designer
          </h4>
        </div>

        {/* second section */}
        <div
          className="w-[40%] text-center pt-[35px]"
          style={{ border: "1px solid red" }}
        >
          <h3 className="font-semibold">125</h3>
          <h4>Projects</h4>
        </div>

        {/* third section */}
        <div
          className="w-[40%] text-center pt-[35px]"
          style={{ border: "1px solid red" }}
        >
          <h3 className="font-semibold">$1245 </h3>
          <h4>Revenue</h4>
        </div>
      </section>
    </header>
  );
};

export default Header;
