import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 3000,
    pv: 2000,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "PMar",
    uv: 1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 1780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 1390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 290,
    pv: 4300,
    amt: 2100,
  },
];

const SecondChart = () => {
  return (
    <div style={{ width: "100%" }} className="">
      <h3 className="text-[#979fa9] p-[20px] font-bold">
        Currently Running
        <span className="text-[#8b82c3] font-bold"> 28 Projects</span>
      </h3>

      <div className="pt-[50px]">
        <ResponsiveContainer width={600} height={300}>
          <AreaChart
            width={800}
            height={500}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SecondChart;
