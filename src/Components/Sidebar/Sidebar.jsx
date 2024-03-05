import { IoHomeOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="sideSec w-[150px] h-[100vh] fixed left-0 bg-[#2a3650] text-white p-6 ">
      <div className="container mx-auto">
        {/* home */}
        <h2 className="font-mont flex  items-center p-[10px]">
          <span className="linkIcon">
            <IoHomeOutline />
          </span>
          <span className="icon-name px-[10px]">
            <Link to="/">Home</Link>
          </span>
        </h2>

        {/* forms */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span className="linkIcon">
            <FaWpforms />
          </span>
          <span className="icon-name px-[10px]">
            <Link to="Forms">Forms</Link>
          </span>
        </h2>

        {/* Invoices */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span className="linkIcon">
            <FaFileInvoiceDollar />
          </span>
          <span className="icon-name px-[10px]">
            <Link to="Invoices"> Invoices</Link>
          </span>
        </h2>

        {/* calendars */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span className="linkIcon">
            <FaRegCalendarAlt />
          </span>
          <span className="icon-name px-[10px]">
            <Link to="calendars">Calendars</Link>
          </span>
        </h2>
        {/* contacts */}
        <h2 className="font-mont flex items-center p-[10px]">
          <span className="linkIcon">
            <FaWifi />
          </span>
          <span className="icon-name px-[10px]">
            <Link to="Contacts"> Contacts</Link>
          </span>
        </h2>
      </div>
    </section>
  );
};
export default Sidebar;
