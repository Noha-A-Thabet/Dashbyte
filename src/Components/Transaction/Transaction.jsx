import { FaRegSquareFull } from "react-icons/fa6";

const Transaction = () => {
  return (
    <div className="wrappingTable bg-[#f4f4f8]  w-[90.5vw] h-[50vh] mx-[165px] pb-[25px]">
      <table className=" mx-[20px] bg-[white] w-[88vw] h-[45vh] table-auto	border-collapse	">
        <caption className="tracking-wide	 caption-top bg-[white] p-[10px] text-left	font-bold ">
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
            <th border className="">
              Billing Name
            </th>
            <th border className="">
              Date
            </th>
            <th border className="">
              Total
            </th>
            <th border className="">
              Payment Status
            </th>
            <th border className="">
              Payment Method
            </th>
            <th border className="">
              View Details
            </th>
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
            <td className="font-bold text-[gray]">#SK2540</td>
            <td>Neal Matthews </td>
            <td>07 Oct, 2019 </td>
            <td className="text-[gray]">$400 </td>
            <td className="bg-[#daf4eb] w-[10px]  p-[5px] text-[green]">
              Paid{" "}
            </td>
            <td> Mastercard</td>
            <td> view details</td>
          </tr>
          {/* /second/ */}
          <tr
            className="text-center h-[40px]"
            style={{ borderBottom: "1px solid lightGray" }}
          >
            <td className="pl-[10px]">
              <FaRegSquareFull />
            </td>
            <td className="font-bold text-[gray]">#SK2541</td>
            <td>Jamal Burnett </td>
            <td>07 Oct, 2019 </td>
            <td className="text-[gray]">$380 </td>
            <td className="bg-[#FDE4E4] text-[red] p-[5px]">Chargeback </td>
            <td> Visa</td>
            <td> view details</td>
          </tr>
          {/* /third/ */}
          <tr
            className="text-center h-[40px]"
            style={{ borderBottom: "1px solid lightGray" }}
          >
            <td className="pl-[10px]">
              <FaRegSquareFull />
            </td>
            <td className="font-bold text-[gray]">#SK2542</td>
            <td>Juan Mitchell </td>
            <td>06 Oct, 2019 </td>
            <td className="text-[gray]">$384 </td>
            <td className="bg-[#daf4eb] text-[green]">Paid </td>
            <td> Paypal</td>
            <td> view details</td>
          </tr>

          {/* /fourth/ */}
          <tr
            className="text-center h-[40px]"
            style={{ borderBottom: "1px solid lightGray" }}
          >
            <td className="pl-[10px]">
              <FaRegSquareFull />
            </td>
            <td className="font-bold text-[gray]">#SK2543</td>
            <td>Juan Mitchell </td>
            <td>06 Oct, 2019 </td>
            <td className="text-[gray]">$384 </td>
            <td className="bg-[#daf4eb] text-[green]">Paid </td>
            <td> Paypal</td>
            <td> view details</td>
          </tr>

          {/* /fifth/ */}
          <tr
            className="text-center h-[40px]"
            style={{ borderBottom: "1px solid lightGray" }}
          >
            <td className="pl-[10px]">
              <FaRegSquareFull />
            </td>
            <td className="font-bold text-[gray]">#SK2544</td>
            <td>Ronald Taylor </td>
            <td>04 Oct, 2019 </td>
            <td className="text-[gray]">$404 </td>
            <td className="bg-[#ffff008c] text-[orange]">Refund </td>
            <td> Visa</td>
            <td> view details</td>
          </tr>

          {/* /sixth/ */}
          <tr className="text-center h-[40px]">
            <td className="pl-[10px]">
              <FaRegSquareFull />
            </td>
            <td className="font-bold text-[gray]">#SK2545</td>
            <td>Jacob Hunter </td>
            <td>05 Oct, 2019 </td>
            <td className="text-[gray]">$392 </td>
            <td className="bg-[#daf4eb] w-[10px]  p-[5px] text-[green]">
              Paid
            </td>
            <td> Paypal</td>
            <td> view details</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
