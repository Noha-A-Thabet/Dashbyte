import { IoHomeOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { IoBarChartSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import { HiUsers } from "react-icons/hi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="sideSec w-[150px] h-[100vh] fixed left-0 bg-[#2a3042] text-white p-6 ">
      <div className="container mx-auto">
        <h1 className="text-center font-lemon tracking-widest ">Dashbyte</h1>

        {/* home */}
        <h2 className="font-mont flex  items-center p-[10px]">
          <span>
            <IoHomeOutline />
          </span>
          <span className="px-[10px]">Home</span>
        </h2>

        {/* team */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span>
            <HiUsers />
          </span>
          <span className="px-[10px]"> Team</span>
        </h2>

        {/* calendars */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span>
            <FaRegCalendarAlt />
          </span>
          <span className="px-[10px]">Calendars</span>
        </h2>

        {/* forms */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span>
            <FaWpforms />
          </span>
          <span className="px-[10px]"> Forms</span>
        </h2>

        {/* Email*/}
        <h2 className="font-mont flex items-center p-[10px]">
          <span>
            <MdEmail />
          </span>
          <span className="px-[10px]"> Email</span>
        </h2>

        {/* jobs */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span>
            <MdWork />
          </span>
          <span className="px-[10px]"> Jobs</span>
        </h2>

        {/* Projects */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span>
            <AiOutlineFundProjectionScreen />
          </span>
          <span className="px-[10px]"> Projects</span>
        </h2>

        {/* Tasks */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span>
            <FaTasks />
          </span>
          <span className="px-[10px]">Tasks</span>
        </h2>

        {/* contacts */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span>
            <FaWifi />
          </span>
          <span className="px-[10px]"> Contacts</span>
        </h2>

        {/* Invoices */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span>
            <FaFileInvoiceDollar />
          </span>
          <span className="px-[10px]">Invoices</span>
        </h2>

        {/* charts */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span>
            <IoBarChartSharp />
          </span>
          <span className="px-[10px]"> Charts</span>
        </h2>

        {/* blogs */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span>
            <IoDocument />
          </span>
          <span className="px-[10px]"> Blogs</span>
        </h2>

        {/* maps */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span>
            <SiGooglemaps />
          </span>
          <span className="px-[10px]"> Maps</span>
        </h2>

        <div className="border-2 border-red-600 h-[200px] relative bottom-0">
          <h3 className="absolute bottom-1 text-center ">
            2024 © Borex. Design & Develop by Themesbrand
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
