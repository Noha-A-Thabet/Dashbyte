import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

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

      {/* <ResponsiveContainer width="80%" height="80%"> */}
      <BarChart data={data} className="bar pt-[20px] " width={400} height={330}>
        <Bar type="monotone" dataKey="Email" strokeWidth={3} fill="#8884d8" />
        <XAxis dataKey="name" className="font-semibold" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
      </BarChart>

      {/* </ResponsiveContainer> */}

      {/* <ResponsiveContainer> */}
      {/* <BarChart
          width={400}
          height={330}
          data={data}
          className="bar pt-[20px] "
        >
          <Bar type="monotone" dataKey="Email" strokeWidth={3} fill="#8884d8" />
          <XAxis dataKey="name" className="font-semibold" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
      {/* </BarChart> */}
      {/* </ResponsiveContainer> */}
      {/* </div> */}
    </>
  );
};

export default Charts;
