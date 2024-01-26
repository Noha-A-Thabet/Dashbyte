import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

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
      <div className="grid grid-cols-2">
        <h2 className="p-[15px] font-bold">Email Sent</h2>
        <div className="grid grid-cols-3 gap-2 p-[15px] font-bold">
          <h4>Week</h4>
          <h4>Month</h4>
          <h4
            style={{
              backgroundColor: "#556ee6",
              color: "white",
            }}
            className="w-[48px]  h-[25px] font-bold text-center rounded-lg"
          >
            Year
          </h4>
        </div>
      </div>
      <BarChart width={550} height={330} data={data} className="pt-[20px]">
        <Bar type="monotone" dataKey="Email" strokeWidth={3} fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </>
  );
};

export default Charts;
