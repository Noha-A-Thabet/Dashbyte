import { LiaFileImportSolid } from "react-icons/lia";
import { MdTaskAlt } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { IoApps } from "react-icons/io5";
import Transaction from "../Transaction/Transaction";

const Home = () => {
  return (
    <section className="">
      <section
        style={{ marginLeft: "158px" }}
        className="h-[51vh] w-[88vw] sm:ml-[-100px] sm:w-[72vw]"
      >
        <div className="flex justify-between sm:flex sm:flex-col  sm:ml-[-98px]">
          {/* first col */}
          <div className="bg-[white]">
            <h1 className="font-bold pt-[20px] pl-[25px]">Project Status</h1>

            <div className=" w-[30vw] h-[45vh] grid grid-cols-2 gap-1 bg-[white] sm:w-[83vw]">
              {/* first */}
              <div className="m-[20px]  rounded-md bg-[#f1f0f8] flex flex-col items-center justify-center">
                <div className="  bg-[#7a70ba] text-[white] w-[45px] h-[45px] rounded-3xl">
                  <LiaFileImportSolid className="h-[23px] w-[23px] mx-auto pt-[10px]" />
                </div>
                <h3 className="text-[#979fa9]">Upcomings</h3>
                <h4 className="font-semibold">5 Projects</h4>
              </div>

              {/* second */}
              <div className="m-[20px]  rounded-md bg-[#ecf6fb] flex flex-col items-center justify-center">
                <div className="  bg-[#48a3d7] text-[white] w-[45px] h-[45px] rounded-3xl">
                  <MdTaskAlt className="h-[23px] w-[23px] mx-auto pt-[10px]" />
                </div>
                <h3 className="text-[#979fa9]">Completed</h3>
                <h4 className="font-semibold">27 Projects</h4>
              </div>

              {/* third */}
              <div className="m-[20px]  rounded-md bg-[#fbf1ec] flex flex-col items-center justify-center">
                <div className="  bg-[#d77748] text-[white] w-[45px] h-[45px] rounded-3xl">
                  <GrInProgress className="h-[20px] w-[20px] mx-auto pt-[10px] " />
                </div>
                <h3 className="text-[#979fa9]">In Progress</h3>
                <h4 className="font-semibold">13 Projects</h4>
              </div>

              {/* fourth */}

              <div className="m-[20px]  rounded-md bg-[#f9eff5] flex flex-col items-center justify-center">
                <div className="  bg-[#c95e9e] text-[white] w-[45px] h-[45px] rounded-3xl">
                  <IoApps className="h-[20px] w-[20px] mx-auto pt-[10px] " />
                </div>
                <h3 className="text-[#979fa9]">Total</h3>
                <h4 className="font-semibold">47 Projects</h4>
              </div>
            </div>
          </div>
          {/* second col */}
          <div className="w-[55vw] h-[45vh] sm:w-[8vw] sm:mt-[30px]">
            <div className=" ml-[-120px] ">
              <Transaction />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
