import { IoHomeOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
// import { IoBarChartSharp } from "react-icons/io5";
// import { MdWork } from "react-icons/md";
// import { IoDocument } from "react-icons/io5";
// import { SiGooglemaps } from "react-icons/si";
// import { HiUsers } from "react-icons/hi";
// import { AiOutlineFundProjectionScreen } from "react-icons/ai";
// import { FaTasks } from "react-icons/fa";
// import { FaFileInvoiceDollar } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav
      className="sideSec w-[150px] h-[100vh] fixed left-0 top-0 bg-[#2a3042] text-white p-6 "
      style={{ color: "white" }}
    >
      <div className="container mx-auto">
        {/* home */}
        <h2
          className="font-mont flex  items-center p-[15px]"
          style={{ paddingTop: "200px" }}
        >
          <span className="linkIcon">
            <Link to="/">
              <IoHomeOutline />
            </Link>
          </span>
          <span className="sideBarLink px-[10px]">
            <Link to="/">Home</Link>
          </span>
        </h2>

        {/* team */}
        {/* <h2 className="font-mont flex items-center p-[15px]">
          <span className="linkIcon">
            <Link to="team">
              <HiUsers />
            </Link>
          </span>
          <span className="sideBarLink px-[10px]">
            <Link to="team">Team</Link>
          </span>
        </h2> */}

        {/* forms */}
        <h2 className="font-mont flex items-center p-[15px]">
          <span className="linkIcon">
            <Link to="Forms">
              <FaWpforms />
            </Link>
          </span>
          <span className="sideBarLink px-[10px]">
            <Link to="Forms">Forms</Link>
          </span>
        </h2>

        {/* Email*/}
        {/* <h2 className="font-mont flex items-center p-[15px]">
          <span className="linkIcon">
            <Link to="Email">
              <MdEmail />
            </Link>
          </span>
          <span className="sideBarLink px-[10px]">
            <Link to="Email">Email</Link>
          </span>
        </h2> */}

        {/* jobs */}
        {/* <h2 className="font-mont flex items-center p-[15px]">
          <span className="linkIcon">
            <Link to="Jobs">
              <MdWork />
            </Link>
          </span>
          <span className="sideBarLink px-[10px]">
            <Link to="Jobs">Jobs</Link>
          </span>
        </h2> */}

        {/* Tasks */}
        {/* <h2 className="font-mont flex items-center p-[15px]">
          <span className="linkIcon">
            <Link to="Tasks">
              <FaTasks />
            </Link>
          </span>
          <span className="sideBarLink px-[10px]">
            <Link to="Tasks">Tasks</Link>
          </span>
        </h2> */}

        {/* charts */}
        {/* <h2 className="font-mont flex items-center p-[15px]">
          <span className="linkIcon">
            <Link to="Charts">
              <IoBarChartSharp />
            </Link>
          </span>
          <span className="sideBarLink px-[10px]">
            <Link to="Charts"> Charts</Link>
          </span>
        </h2> */}

        {/* blogs */}
        {/* <h2 className="font-mont flex items-center p-[15px]">
          <span className="linkIcon">
            <Link to="Blogs">
              <IoDocument />
            </Link>
          </span>
          <span className="sideBarLink px-[10px]">
            <Link to="Blogs"> Blogs</Link>
          </span>
        </h2> */}

        {/* maps */}
        {/* <h2 className="font-mont flex items-center p-[15px]">
          <span className="linkIcon">
            <Link to="Maps">
              <SiGooglemaps />
            </Link>
          </span>
          <span className="sideBarLink px-[10px]">
            <Link to="Maps"> Maps</Link>
          </span>
        </h2> */}

        {/* Invoices */}
        {/* <h2 className="font-mont flex items-center p-[15px]">
          <span className="linkIcon">
            <Link to="Invoices">
              <FaFileInvoiceDollar />
            </Link>
          </span>
          <span className="sideBarLink px-[10px]">
            <Link to="Invoices"> Invoices</Link>
          </span>
        </h2> */}

        {/* Projects */}
        {/* <h2 className="font-mont flex items-center p-[15px]">
          <span className="linkIcon">
            <Link to="Projects">
              <AiOutlineFundProjectionScreen />
            </Link>
          </span>
          <span className="sideBarLink px-[10px]">
            <Link to="Projects">Projects</Link>
          </span>
        </h2> */}

        {/* calendars */}
        <h2 className="font-mont flex items-center p-[15px]">
          <span className="linkIcon">
            <Link to="calendars">
              <FaRegCalendarAlt />
            </Link>
          </span>
          <span className="sideBarLink px-[10px]">
            <Link to="calendars">Calendars</Link>
          </span>
        </h2>

        {/* contacts */}
        <h2 className="font-mont flex items-center p-[15px]">
          <span className="linkIcon">
            <Link to="Contacts">
              <FaWifi />
            </Link>
          </span>
          <span className="sideBarLink px-[10px]">
            <Link to="Contacts"> Contacts</Link>
          </span>
        </h2>
        <div className="sibeFooter relative ">
          <h3 className="absolute bottom-0  font-bold text-center">
            Design By Noha Ashraf
          </h3>
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
