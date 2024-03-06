import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
// import "./Dashboard.css";
const Charts = () => {
  const data = [
    { name: "Jan", Email: 20 },
    { name: "Feb", Email: 32 },
    { name: "Mar", Email: 52 },
    { name: "Apr", Email: 92 },
    { name: "May", Email: 80 },
    { name: "Jun", Email: 66 },
    { name: "Aug", Email: 95 },
    { name: "Sep", Email: 34 },
    { name: "Oct", Email: 22 },
    { name: "Nov", Email: 76 },
    { name: "Dec", Email: 80 },
  ];
  return (
    <>
      <div className="emailSent grid grid-cols-1">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="p-[15px]  font-bold text-lg">Total Projects</h2>
        </div>
      </div>
      <BarChart width={480} height={330} data={data} className="bar pt-[20px]">
        <Bar type="monotone" dataKey="Email" strokeWidth={3} fill="#8884d8" />
        <XAxis dataKey="name" className="font-semibold" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
      </BarChart>
    </>
  );
};

export default Charts;
