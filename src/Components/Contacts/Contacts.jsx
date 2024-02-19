import { FaRegMessage } from "react-icons/fa6";

const Contacts = () => {
  return (
    <section
      className="ml-[170px] mt-[1px] "
      style={{ border: "2px solis green" }}
    >
      <div
        className="wrappingTable  w-[80.5vw] h-[20vh] pb-[25px]  ml-[12px] "
        style={{ margin: "0 auto" }}
      >
        <table className=" mx-[0px] bg-[white] w-[90vw] h-[35vh] table-auto	border-collapse sm:w-[85vw] sm:ml-[-90px] lg:ml-[-1vw] lg:w-[80vw] 2xl:w-[85vw] 2xl:ml-[-50px] 2xl:text-xl">
          <caption className="tracking-wide	 caption-top bg-[white] p-[12px] text-left	font-bold sm:text-md ">
            USERS LIST
          </caption>
          <thead className="bg-[white]">
            <tr
              className="text-center h-[50px] bg-[#eff2f7]"
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

          <tbody className="h-[75vh]">
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[50px] "
            >
              <td className="pl-[10px] flex justify-center pt-[20px] h-[22px]">
                <div
                  className="w-[45px] h-[45px] rounded-full bg-cover bg-center mt-[-12px] "
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
                <div className="grid grid-cols-1">
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    Photoshop
                  </span>
                  <span className="text-[purple] bg-[#b0baea] block mt-[10px]">
                    illustrator
                  </span>
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">136</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <FaRegMessage />
                </div>
              </td>
            </tr>
            {/* /second/ */}
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px] flex justify-center pt-[20px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center mt-[-12px] "
                  style={{
                    backgroundImage: "url('../src/assets/avatar-3.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">
                Rafael Morales
              </td>
              <td className="sm:text-sm">Rafael@skote.com </td>
              <td className="sm:text-sm">
                <div className="grid grid-cols-1">
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    PHP
                  </span>
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    Ruby
                  </span>
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">112</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <FaRegMessage />
                </div>
              </td>
            </tr>
            {/* /third/ */}
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px] flex justify-center pt-[20px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center mt-[-12px] "
                  style={{
                    backgroundImage: "url('../src/assets/avatar-1.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">
                John Santiago
              </td>
              <td className="sm:text-sm">John @skote.com </td>
              <td className="sm:text-sm">
                <div className="grid grid-cols-1">
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    PHP
                  </span>
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    Ruby
                  </span>
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">112</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <FaRegMessage />
                </div>
              </td>
            </tr>

            {/* /four/ */}
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px] flex justify-center pt-[20px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center mt-[-12px] "
                  style={{
                    backgroundImage: "url('../src/assets/avatar-4.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">
                Shirley Smith
              </td>
              <td className="sm:text-sm"> Shirley@skote.com </td>
              <td className="sm:text-sm">
                <div className="grid grid-cols-1">
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    PHP
                  </span>
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    Ruby
                  </span>
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">112</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <FaRegMessage />
                </div>
              </td>
            </tr>

            {/* /five/ */}
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px] flex justify-center pt-[20px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center mt-[-12px] "
                  style={{
                    backgroundImage: "url('../src/assets/avatar-5.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">
                Allison Ellie
              </td>
              <td className="sm:text-sm"> Allison@skote.com </td>
              <td className="sm:text-sm">
                <div className="grid grid-cols-1">
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    React
                  </span>
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    Redux
                  </span>
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">136</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <FaRegMessage />
                </div>
              </td>
            </tr>
            {/* /six/ */}
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px] flex justify-center pt-[20px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center mt-[-12px] "
                  style={{
                    backgroundImage: "url('../src/assets/avatar-6.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">
                Mark Ellison
              </td>
              <td className="sm:text-sm">Mark @skote.com </td>
              <td className="sm:text-sm">
                <div className="grid grid-cols-1">
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    JS
                  </span>
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    Css
                  </span>
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">136</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <FaRegMessage />
                </div>
              </td>
            </tr>

            {/* /seven/ */}
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px] flex justify-center pt-[20px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center mt-[-12px] "
                  style={{
                    backgroundImage:
                      "url('../src/assets/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">
                Amelia Peyton
              </td>
              <td className="sm:text-sm"> Amelia@skote.com</td>
              <td className="sm:text-sm">
                <div className="grid grid-cols-1">
                  <span></span>
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    Html
                  </span>
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    CSS
                  </span>
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">136</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <FaRegMessage />
                </div>
              </td>
            </tr>

            {/* /eight/ */}
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px] flex justify-center pt-[20px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center mt-[-12px] "
                  style={{
                    backgroundImage:
                      "url('../src/assets/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">
                Ansley Brooke
              </td>
              <td className="sm:text-sm"> Ansley@skote.com </td>
              <td className="sm:text-sm ">
                <div className="grid grid-cols-1">
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    Ruby
                  </span>
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    PHP
                  </span>
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">136</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <FaRegMessage />
                </div>
              </td>
            </tr>

            {/* /nine/ */}
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px] flex justify-center pt-[20px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center mt-[-12px] "
                  style={{
                    backgroundImage:
                      "url('../src/assets/ian-dooley-d1UPkiFd04A-unsplash.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">
                David McHenry
              </td>
              <td className="sm:text-sm">david@skote.com </td>
              <td className="sm:text-sm ">
                <div className="grid grid-cols-1">
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    Ruby
                  </span>
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    PHP
                  </span>
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">136</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <FaRegMessage />
                </div>
              </td>
            </tr>
            {/* /ten/ */}
            <tr
              style={{ borderBottom: "1px solid lightGray" }}
              className="text-center h-[40px]"
            >
              <td className="pl-[10px] flex justify-center pt-[20px]">
                <div
                  className="w-[40px] h-[40px] rounded-full bg-cover bg-center mt-[-12px] "
                  style={{
                    backgroundImage:
                      "url('../src/assets/aiony-haust-3TLl_97HNJo-unsplash.jpg')",
                  }}
                ></div>
              </td>
              <td className="sm:text-sm font-bold text-[gray] ">Eva Riley</td>
              <td className="sm:text-sm"> Eva@skote.com </td>
              <td className="sm:text-sm ">
                <div className="grid grid-cols-1">
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    Ruby
                  </span>
                  <span className="text-[purple] bg-[#b0baea] block  mt-[10px]">
                    PHP
                  </span>
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">136</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <FaRegMessage />
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
