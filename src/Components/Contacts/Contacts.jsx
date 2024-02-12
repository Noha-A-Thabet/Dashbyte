import { FaRegSquareFull } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Contacts = () => {
  return (
    <section className="ml-[170px] border-2 border-black-600 mt-[10px]">
      <div className="wrappingTable bg-[#f4f4f8]  w-[90.5vw]  mx-[165px] pb-[25px] sm:w-[70vw] md:w-[70vw]  h-[55vh]">
        <table
          className=" mx-[20px] bg-[white] w-[90vw] h-[45vh] table-auto	border-collapse
        sm:w-[87vw] sm:ml-[-100px]  sm:mx-auto sm:h-[65vh] sm:overflow-scroll
         lg:mx-[-10px]  lg:w-[83vw]
         xl:w-[86vw] xl:mx-[-10px]
2xl:w-[90vw] 2xl:mx-[-1px]
  "
        >
          <caption className="tracking-wide	 caption-top bg-[white] p-[20px] text-left	font-bold sm:text-md ">
            Latest Transaction
          </caption>
          <thead className="bg-[white]">
            <tr
              className="text-center h-[40px] bg-[#eff2f7]"
              style={{ borderBottom: "1px solid lightGray" }}
            >
              <th border className="pl-[10px]">
                #
              </th>
              <th border className="">
                Name
              </th>
              <th border>Email</th>
              <th border>Tags</th>
              <th border>Projects</th>
              <th border>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center "
                  style={{
                    backgroundImage: "url('../src/assets/avatar-2.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">
                Colin Melton
              </td>
              <td className="sm:text-sm">colin@skote.com </td>
              <td className="sm:text-sm">
                <span>PHP</span>
                <span>Java</span>
                <span>1 more</span>
              </td>
              <td className="sm:text-sm text-[gray]">136</td>
              <td className="sm:text-sm ">
                <div className="flex justify-between">
                  <FaRegMessage />

                  <CgProfile />
                </div>
              </td>
            </tr>
            {/* /second/ */}
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center "
                  style={{
                    backgroundImage: "url('../src/assets/avatar-2.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">
                Colin Melton
              </td>
              <td className="sm:text-sm">colin@skote.com </td>
              <td className="sm:text-sm">
                <span>PHP</span>
                <span>Java</span>
                <span>1 more</span>
              </td>
              <td className="sm:text-sm text-[gray]">136</td>
              <td className="sm:text-sm ">
                <div className="flex justify-between">
                  <FaRegMessage />

                  <CgProfile />
                </div>
              </td>
            </tr>
            {/* /third/ */}
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center "
                  style={{
                    backgroundImage: "url('../src/assets/avatar-2.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">
                Colin Melton
              </td>
              <td className="sm:text-sm">colin@skote.com </td>
              <td className="sm:text-sm">
                <span>PHP</span>
                <span>Java</span>
                <span>1 more</span>
              </td>
              <td className="sm:text-sm text-[gray]">136</td>
              <td className="sm:text-sm ">
                <div className="flex justify-between">
                  <FaRegMessage />

                  <CgProfile />
                </div>
              </td>
            </tr>
            {/* /fourth/ */}
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center "
                  style={{
                    backgroundImage: "url('../src/assets/avatar-2.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">
                Colin Melton
              </td>
              <td className="sm:text-sm">colin@skote.com </td>
              <td className="sm:text-sm">
                <span>PHP</span>
                <span>Java</span>
                <span>1 more</span>
              </td>
              <td className="sm:text-sm text-[gray]">136</td>
              <td className="sm:text-sm ">
                <div className="flex justify-between">
                  <FaRegMessage />

                  <CgProfile />
                </div>
              </td>
            </tr>

            {/* /fifth/ */}
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center "
                  style={{
                    backgroundImage: "url('../src/assets/avatar-2.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">
                Colin Melton
              </td>
              <td className="sm:text-sm">colin@skote.com </td>
              <td className="sm:text-sm">
                <span>PHP</span>
                <span>Java</span>
                <span>1 more</span>
              </td>
              <td className="sm:text-sm text-[gray]">136</td>
              <td className="sm:text-sm ">
                <div className="flex justify-between">
                  <FaRegMessage />

                  <CgProfile />
                </div>
              </td>
            </tr>

            {/* /sixth/ */}
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center "
                  style={{
                    backgroundImage: "url('../src/assets/avatar-2.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">
                Colin Melton
              </td>
              <td className="sm:text-sm">colin@skote.com </td>
              <td className="sm:text-sm">
                <span>PHP</span>
                <span>Java</span>
                <span>1 more</span>
              </td>
              <td className="sm:text-sm text-[gray]">136</td>
              <td className="sm:text-sm ">
                <div className="flex justify-between">
                  <FaRegMessage />

                  <CgProfile />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Contacts;
