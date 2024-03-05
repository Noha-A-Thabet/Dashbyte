import "./Header.css";

const Header = () => {
  return (
    <header className=" dashHeader bg-gray rounded-lg h-[35vh]  flex flex-col container ">
      {/* <div className="container mx-auto  ">
        {/* first section */}
      <section className="welcomeSec h-[50%]  w-[99vw]  bg-purple flex justify-between items-center">
        {/* first Div */}
        <h2 className="h-[50%]  w-[50vw] m-[25px] text-[#8f75e6] font-bold flex items-center">
          Welcome Back !
        </h2>

        {/* second div */}
        <div
          className="bgWelcome text-cente bg-contain bg-no-repeat bg-center h-[100%] w-[50vw] "
          style={{
            backgroundImage: "url('../src/assets/profile-img.png')",
          }}
        ></div>
      </section>

      {/* second section */}
      <section className="h-[50%]  bg-white bg-[#ffffff] flex flex-row  justify-between">
        {/* first section */}
        <div className="bgSection w-[40vw] ">
          <div
            className="bg-cover bg-center rounded-full  m-[25px] mt-[-25px] w-[65px] h-[65px] border-none "
            style={{
              backgroundImage: "url('../src/assets/avatar-1.jpg')",
              border: "3px solid white",
            }}
          ></div>
          <h3 className="designerName w-[100px] mt-[-20px]  mx-[25px] text-start font-semibold">
            Joe Allen
          </h3>
          <h4 className="w-[120px] mx-[25px]  text-start tracking-tighter">
            UI/UX Designer
          </h4>
        </div>

        {/* second section */}
        <div className="w-[20vw] text-center pt-[35px] ">
          <h3 className="font-semibold">125</h3>
          <h4>Projects</h4>
        </div>

        {/* third section */}
        <div className="w-[40vw] text-center pt-[35px] ">
          <h3 className="font-semibold">$1245 </h3>
          <h4>Revenue</h4>
        </div>
      </section>
    </header>
  );
};

export default Header;
