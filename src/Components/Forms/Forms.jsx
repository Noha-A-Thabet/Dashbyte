import "./Form.css";

const Forms = () => {
  return (
    <section
      className="wrappingSec  w-[88vw] h-[92vh] ml-[160px] bg-[#f4f4f8] flex justify-center items-center sm:ml-[-1px] sm:w-[99.9vw] sm:h-[92vh] md:ml-[3px]  
    md:h-[92vh] md:w-[99vw] lg:w-[99.5vw] 2xl:h-[93.5vh]"
    >
      <section className="textualSec bg-[white] w-[70vw] h-[85vh] sm:h-[82vh]  sm:ml-[55px] sm:mt-[10px] md:ml-[100px] lg:ml-[130px]">
        <h2 className="font-bold	text-center text-xl pt-[20px]">Register</h2>
        <div className=" flex justify-between  flex-col p-[30px] sm:p-[30px]">
          <label className="pb-[10px] font-bold ">Name</label>
          <input
            type="text"
            className="mb-[10px] w-[55vw]  h-[4vh] focus:border-2 focus:border-gray-300"
            style={{ border: "1px solid lightGray" }}
          />

          <label className="pb-[10px] font-bold">Email</label>
          <input
            type="email"
            className="mb-[10px] w-[55vw]  h-[4vh] focus:border-2 focus:border-gray-300"
            style={{ border: "1px solid lightGray" }}
          />

          <label className="pb-[10px] font-bold">Password</label>
          <input
            type="password"
            className="mb-[10px] w-[55vw]  h-[4vh] focus:border-2 focus:border-gray-300"
            style={{ border: "1px solid lightGray" }}
          />

          <label className="pb-[10px] font-bold">Age</label>
          <input
            type="number"
            className="mb-[10px] w-[55vw]  h-[4vh] focus:border-2 focus:border-gray-300"
            style={{ border: "1px solid lightGray" }}
          />

          <label className="pb-[10px] font-bold">Address</label>
          <input
            type="text"
            className="mb-[10px] w-[55vw]  h-[4vh] focus:border-2 focus:border-gray-300"
            style={{ border: "1px solid lightGray" }}
          />

          <label className="pb-[10px] font-bold">Phone</label>
          <input
            type="tel"
            className="mb-[10px] w-[55vw]  h-[4vh] focus:border-2 focus:border-gray-300"
            style={{ border: "1px solid lightGray" }}
          />
          <button className="bg-[#f4f4f8] w-[15vw] h-[5vh] mt-[30px] mx-auto font-bold	text-center">
            Submit
          </button>
        </div>
      </section>
    </section>
  );
};

export default Forms;
