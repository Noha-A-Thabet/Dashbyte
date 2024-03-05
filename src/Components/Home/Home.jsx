import { LiaFileImportSolid } from "react-icons/lia";
import { MdTaskAlt } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { IoApps } from "react-icons/io5";

// /<LiaFileImportSolid />
//<MdTaskAlt />
//<GrInProgress />
{
  /* <IoApps />; */
}
const Home = () => {
  return (
    <section>
      <section
        style={{ border: "2px solid red", marginLeft: "158px" }}
        className="h-[40vh] w-[88vw]"
      >
        <h2>Project Status</h2>
        <div
          className="flex justify-between "
          style={{ border: "2px solid yellow" }}
        >
          <div
            style={{ border: "2px solid green" }}
            className="w-[25vw] h-[36vh] grid grid-cols-2 gap-4 "
          >
            {/* first */}
            <div className="m-[20px] border border-indigo-600 rounded-md">
              <div className="border border-indigo-600 w-[20px]">
                <LiaFileImportSolid />
              </div>
              <h3>Upcomings</h3>
              <h4>5 Projects</h4>
            </div>
            {/* second */}
            <div className="m-[20px]">
              <MdTaskAlt />
              <h3>Completed</h3>
              <h4>27 Projects</h4>
            </div>
            {/* third */}
            <div className="m-[20px]">
              <GrInProgress />
              <h3>In Progress</h3>
              <h4>13 Projects</h4>
            </div>
            {/* fourth */}
            <div className="m-[20px]">
              <IoApps />
              <h3>Total</h3>
              <h4>47 Projects</h4>
            </div>
          </div>
          <div style={{ border: "2px solid green" }} className="w-[55vw]">
            second
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
