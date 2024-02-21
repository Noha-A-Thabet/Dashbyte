import { CiEdit, CiCircleRemove } from "react-icons/ci";

const Contacts = () => {
  return (
    <section className="ml-[170px] mt-[1px] ">
      <div
        className="wrappingTable  h-[20vh] pb-[25px]  ml-[12px] "
        style={{ margin: "0 auto" }}
      >
        <table
          className=" mx-[0px] bg-[white] w-[90vw] h-[35vh] table-auto	border-collapse 
        sm:ml-[-100px] sm:w-[88vw] lg:ml-[-1vw] 2xl:ml-[-40px] 2xl:text-xl
        lg:w-[84vw] xl:w-[87.5vw] 2xl:w-[93vw]
        "
        >
          <caption className="tracking-wide	 caption-top bg-[white] p-[12px] text-left	font-bold sm:text-md 2xl:ml-[40px]">
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
              <th border>Address</th>
              <th border>Phone</th>
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
                  <span className="block  mt-[10px] ">
                    Suite 409 512 Quigley Cliff, Mitchellton, MS 83675-3273
                  </span>
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">(555) 867-5309</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <span className="inline-block mr-[10px]">
                    <CiEdit />
                  </span>
                  <span>
                    <CiCircleRemove />
                  </span>
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
                  425 Amada Keys, Deckowtown, AZ 91661
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">(555) 123-4567</td>
              <div className="flex justify-center">
                <span className="inline-block mr-[10px]">
                  <CiEdit />
                </span>
                <span>
                  <CiCircleRemove />
                </span>
              </div>
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
                  7061 Hoppe Place, New Treasa, MN 37421
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">(555) 987-6543</td>
              <div className="flex justify-center">
                <span className="inline-block mr-[10px]">
                  <CiEdit />
                </span>
                <span>
                  <CiCircleRemove />
                </span>
              </div>
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
                  Suite 911 4537 McGlynn Dale, Kilbackfurt, RI 52295-5145
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">(555) 246-8013</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <span className="inline-block mr-[10px]">
                    <CiEdit />
                  </span>
                  <span>
                    <CiCircleRemove />
                  </span>
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
                  3025 Barbar Parkway, New Erinburgh, MD 78809
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">(555) 555-1212</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <span className="inline-block mr-[10px]">
                    <CiEdit />
                  </span>
                  <span>
                    <CiCircleRemove />
                  </span>
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
                  563 Buck Cliffs, Erinhaven, NY 65823
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">(555) 314-1592</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <span className="inline-block mr-[10px]">
                    <CiEdit />
                  </span>
                  <span>
                    <CiCircleRemove />
                  </span>
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
                  2411 Nicholle Causeway, North Terica, OK 95421-2258
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">(555) 777-8888</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <span className="inline-block mr-[10px]">
                    <CiEdit />
                  </span>
                  <span>
                    <CiCircleRemove />
                  </span>
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
                  Suite 480 6523 Chris Plain, East Pam, KS 08841
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">(555) 369-2580</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <span className="inline-block mr-[10px]">
                    <CiEdit />
                  </span>
                  <span>
                    <CiCircleRemove />
                  </span>
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
                  Suite 333 71711 Emard Overpass, Abbotttown, IN 12117
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">(555) 444-3333</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <span className="inline-block mr-[10px]">
                    <CiEdit />
                  </span>
                  <span>
                    <CiCircleRemove />
                  </span>
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
                  Apt. 196 201 Volkman Flat, Rohanville, AL 73262
                </div>
              </td>
              <td className="sm:text-sm text-[gray]">(555) 888-9999</td>
              <td className="sm:text-sm ">
                <div className="flex justify-center">
                  <span className="inline-block mr-[10px]">
                    <CiEdit />
                  </span>
                  <span>
                    <CiCircleRemove />
                  </span>
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
