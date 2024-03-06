import { FaRegSquareFull } from "react-icons/fa6";

const Transaction = () => {
  return (
    <div className="wrappingTable bg-[#f4f4f8]  w-[50vw]  mx-[165px] pb-[25px] h-[40vh] ">
      <table
        className="bg-[white] w-[55vw] ml-[-45px] h-[42vh] sm:w-[85vw] md:w-[88vw] lg:w-[81vw] xl:w-[55vw] 2xl:w-[57vw] 2xl:h-[43vh]"
        style={{ border: "2px solid pink" }}
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
              <FaRegSquareFull />
            </th>
            <th border className="">
              Order ID
            </th>
            <th border>Billing Name</th>
            <th border>Date</th>
            <th border>Total</th>
            <th border> Status</th>
            <th border>Payment Method</th>
            {/* <th border>Details</th> */}
          </tr>
        </thead>
        <tbody>
          <tr
            style={{ borderBottom: "1px solid lightGray" }}
            className="text-center h-[40px]"
          >
            <td className="pl-[10px]">
              <FaRegSquareFull />
            </td>
            <td className="sm:text-sm font-bold text-[gray] ">#SK2540</td>
            <td className="sm:text-sm">Neal Matthews </td>
            <td className="sm:text-sm">07 Oct, 2019 </td>
            <td className="sm:text-sm text-[gray]">$400 </td>
            <td className="sm:text-sm bg-[#daf4eb] w-[10px]  p-[5px] text-[green]">
              Paid
            </td>
            <td className="sm:text-sm"> Mastercard</td>
          </tr>
          {/* /second/ */}
          <tr
            className="text-center h-[40px]"
            style={{ borderBottom: "1px solid lightGray" }}
          >
            <td className="pl-[10px]">
              <FaRegSquareFull />
            </td>
            <td className="font-bold text-[gray] sm:text-sm ">#SK2541</td>
            <td className="sm:text-sm ">Jamal Burnett </td>
            <td>07 Oct, 2019 </td>
            <td className="sm:text-sm text-[gray]">$380 </td>
            <td className="sm:text-sm bg-[#FDE4E4] text-[red] p-[5px]">
              Chargeback{" "}
            </td>
            <td> Visa</td>
          </tr>
          {/* /third/ */}
          <tr
            className="text-center h-[40px]"
            style={{ borderBottom: "1px solid lightGray" }}
          >
            <td className="pl-[10px]">
              <FaRegSquareFull />
            </td>
            <td className="sm:text-sm  font-bold text-[gray]">#SK2542</td>
            <td className=" sm:text-sm">Juan Mitchell </td>
            <td className=" sm:text-sm">06 Oct, 2019 </td>
            <td className="sm:text-sm  text-[gray]">$384 </td>
            <td className="sm:text-sm  bg-[#daf4eb] text-[green]">Paid </td>
            <td className=" sm:text-sm"> Paypal</td>
            {/* <td className=" sm:text-sm">
              <button className="bg-[#485EC4] text-[white] w-[8vw] h-[4vh] rounded-lg  sm:w-[14vw] lg:h-[5vh] xl:w-[10vw]">
                View Details
              </button>
            </td> */}
          </tr>

          {/* /fourth/ */}
          <tr
            className="text-center h-[40px]"
            style={{ borderBottom: "1px solid lightGray" }}
          >
            <td className="pl-[10px]">
              <FaRegSquareFull />
            </td>
            <td className="font-bold text-[gray] sm:text-sm">#SK2543</td>
            <td className=" sm:text-sm">Juan Mitchell </td>
            <td className=" sm:text-sm">06 Oct, 2019 </td>
            <td className="  sm:text-sm text-[gray]">$384 </td>
            <td className="  sm:text-sm bg-[#daf4eb] text-[green]">Paid </td>
            <td className=" sm:text-sm"> Paypal</td>
            {/* <td className=" sm:text-sm">
              <button className="bg-[#485EC4] text-[white] w-[8vw] h-[4vh] rounded-lg  sm:w-[14vw] lg:h-[5vh] xl:w-[10vw]">
                View Details
              </button>
            </td> */}
          </tr>

          {/* /fifth/ */}
          <tr
            className="text-center h-[40px]"
            style={{ borderBottom: "1px solid lightGray" }}
          >
            <td className="pl-[10px]">
              <FaRegSquareFull />
            </td>
            <td className="font-bold text-[gray]  sm:text-sm">#SK2544</td>
            <td className="sm:text-sm">Ronald Taylor </td>
            <td className="sm:text-sm">04 Oct, 2019 </td>
            <td className="text-[gray]  sm:text-sm">$404 </td>
            <td className="bg-[#ffff008c] text-[orange]  sm:text-sm">
              Refund{" "}
            </td>
            <td className="sm:text-sm"> Visa</td>
            {/* <td className=" sm:text-sm">
              <button className="bg-[#485EC4] text-[white] w-[8vw] h-[4vh] rounded-lg  sm:w-[14vw] lg:h-[5vh] xl:w-[10vw]">
                View Details
              </button>
            </td> */}
          </tr>

          {/* /sixth/ */}
          <tr className="text-center h-[40px]">
            <td className="pl-[10px]">
              <FaRegSquareFull />
            </td>
            <td className=" sm:text-smfont-bold text-[gray]">#SK2545</td>
            <td className=" sm:text-sm">Jacob Hunter </td>
            <td className=" sm:text-sm">05 Oct, 2019 </td>
            <td className="text-[gray] sm:text-sm">$392 </td>
            <td className="bg-[#daf4eb] w-[10px]  p-[5px] text-[green] sm:text-sm">
              Paid
            </td>
            <td className=" sm:text-sm"> Paypal</td>
            {/* <td className=" sm:text-sm">
              <button className="bg-[#485EC4] text-[white] w-[8vw] h-[4vh] rounded-lg  sm:w-[14vw] lg:h-[5vh] xl:w-[10vw]">
                View Details
              </button>
            </td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
