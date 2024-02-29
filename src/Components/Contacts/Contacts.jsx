import { CiEdit, CiTrash } from "react-icons/ci";
import { useContext, useState } from "react";
import { UsersContext } from "../Context/userFormContext";

const Contacts = () => {
  const {
    usersInfo,
    DeleteUser,
    editUserInfo,
    setEditUserInfo,
    setUpdatedAddress,
    setUpdatedEmail,
    setUpdatedName,
    setUpdatedPhone,
    updateUserInfo,
  } = useContext(UsersContext);

  const [editUserId, setEditUserId] = useState(null);

  return (
    <section className="ml-[170px] mt-[1px] ">
      <div
        className="wrappingTable  h-[20vh] pb-[25px]  ml-[12px] "
        style={{ margin: "0 auto" }}
      >
        <table
          className=" mx-[0px] bg-[white] w-[90vw] table-auto	border-collapse 
        sm:ml-[-100px] sm:w-[88vw] 
        md:w-[88vw] md:ml-[-95px]
        lg:ml-[-1vw] 
        lg:w-[84vw] 
        xl:w-[87.5vw] 
        2xl:w-[91vw] 2xl:ml-[-10px] 2xl:text-xl
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
              <th border className="">
                Name
              </th>
              <th border>Email</th>
              <th border>Address</th>
              <th border>Phone</th>
              <th border>Action</th>
            </tr>
          </thead>

          <tbody className="">
            {usersInfo.map((user) => {
              return (
                <tr
                  key={user.id}
                  className="text-center tableRows"
                  style={{
                    border: "1px solid  lightGray",
                    margin: "0px",
                    height: "20px",
                  }}
                >
                  {/* Name */}
                  <td className="sm:text-sm font-bold text-[gray] ">
                    {user.Name}
                    <br />
                    {editUserInfo && (
                      <>
                        <input
                          type="text"
                          className="m-[10px]"
                          style={{ border: "1px solid lightGray" }}
                          onChange={(e) => {
                            setUpdatedName(e.target.value);
                          }}
                        />
                      </>
                    )}
                  </td>

                  {/* email */}
                  <td className="sm:text-sm">
                    {user.Email}
                    <br />
                    {editUserInfo && (
                      <>
                        <input
                          type="text"
                          className="m-[10px]"
                          style={{ border: "1px solid lightGray" }}
                          onChange={(e) => {
                            setUpdatedEmail(e.target.value);
                          }}
                        />
                      </>
                    )}
                  </td>

                  {/* Address */}
                  <td className="sm:text-sm">
                    <div className="grid grid-cols-1 mt-[-2px] pb-[10px]">
                      <span className="block  ">{user.Address}</span>
                    </div>

                    {editUserInfo && (
                      <>
                        <input
                          type="text"
                          className="mt-[10px]"
                          style={{
                            border: "1px solid lightGray",
                            marginTop: "-50px",
                          }}
                          onChange={(e) => {
                            setUpdatedAddress(e.target.value);
                          }}
                        />
                      </>
                    )}
                  </td>

                  {/* Phone */}
                  <td className="sm:text-sm text-[gray]">
                    {user.Phone}
                    <br />
                    {editUserInfo && (
                      <>
                        <input
                          type="text"
                          className="m-[10px]"
                          style={{ border: "1px solid lightGray" }}
                          onChange={(e) => {
                            setUpdatedPhone(e.target.value);
                          }}
                        />
                      </>
                    )}
                  </td>

                  {/* Icons */}
                  <td className="sm:text-sm ">
                    <div className="flex justify-center">
                      {editUserInfo && (
                        <button
                          className="w-[65px] h-[30px] mr-[10px] bg-[green] text-[white] font-bold"
                          style={{ border: "1px solid lightGray" }}
                          onClick={() => {
                            updateUserInfo(user.id);
                            setEditUserInfo(false);
                            setEditUserId();
                          }}
                        >
                          Submit
                        </button>
                      )}

                      <button className="inline-block mr-[10px] font-[55px]">
                        <CiEdit
                          onClick={() => {
                            setEditUserInfo(true);
                          }}
                          style={{ fontSize: "18px" }}
                        />
                      </button>
                      <button>
                        <CiTrash
                          className=" hover:pointer-events-auto"
                          onClick={() => {
                            DeleteUser(user.id);
                          }}
                          style={{ fontSize: "18px" }}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Contacts;
