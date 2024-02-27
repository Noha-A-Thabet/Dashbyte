import { CiEdit, CiCircleRemove } from "react-icons/ci";
import { useContext } from "react";
import { UsersContext } from "../Context/userFormContext";

const Contacts = () => {
  const { usersInfo } = useContext(UsersContext);
  // const [userNumber, setUserNumber] = useState(0);

  // useEffect(() => {
  //   setUserNumber((prev) => prev + 1);
  // }, []);

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
          style={{ border: "2px solid red" }}
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

          <tbody className="">
            {usersInfo.map((user) => {
              return (
                <tr
                  style={{}}
                  key={user.id}
                  className="text-center border-2 border-indigo-600"
                >
                  <td className="pl-[10px] flex justify-center">
                    {user.id.replace(/\D/g, "")}
                  </td>
                  <td className="sm:text-sm font-bold text-[gray] ">
                    {user.Name}
                  </td>
                  <td className="sm:text-sm"> {user.Email}</td>
                  <td className="sm:text-sm">
                    <div className="grid grid-cols-1">
                      <span className="block  ">{user.Address}</span>
                    </div>
                  </td>
                  <td className="sm:text-sm text-[gray]">{user.Phone}</td>
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
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Contacts;
