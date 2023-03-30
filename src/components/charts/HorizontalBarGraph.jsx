import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

export default function HorizontalBarGraph() {
  const data = [
    { name: "cash", value: Math.random() * 1000 },
    { name: "equity", value: Math.random() * 1000 },
    { name: "MPESA", value: Math.random() * 1000 },
    { name: "Credit", value: Math.random() * 1000 },
  ];
  return (
    <>
      <p className="ml-3 mt-4 text-2xl">Sale by payment method</p>

        <ResponsiveContainer width="90%" height={400} className="-ml-12 ">
        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
          layout="vertical"
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis type="number" hide />
          <YAxis
            type="category"
            width={150}
            padding={{ left: 20 }}
            dataKey="name"
          />
          <Tooltip />
          <Legend />
          {/* <ReferenceLine x={0} stroke="#000" /> */}
          <Bar dataKey="value" fill="#c1a6ed" stackId="stack" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
