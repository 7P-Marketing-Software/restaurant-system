import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DottedLineChart() {
  const factor = 350;

  const data = [
    {
      name: "01 March",
      revenue: Math.random() * factor,
    },
    {
      name: "04 March",
      revenue: Math.random() * factor,
    },
    {
      name: "07 March",
      revenue: Math.random() * factor,
    },
    {
      name: "10 March",
      revenue: Math.random() * factor,
    },
    {
      name: "13 March",
      revenue: Math.random() * factor,
    },
    {
      name: "16 March",
      revenue: Math.random() * factor,
    },
    {
      name: "20 March",
      revenue: Math.random() * factor,
    },
  ];

  return (
    <>
      <p className="ml-3 mt-4 text-2xl">Revenue</p>
        <ResponsiveContainer width="90%" height={400} className="mx-auto">
          <LineChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis domain={[0, 400]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              name="revenue"
              dataKey="revenue"
              stroke="#c1a6ed"
            />
          </LineChart>
        </ResponsiveContainer>
    </>
  );
}
