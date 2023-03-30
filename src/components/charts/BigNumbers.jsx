import { AiOutlineCalendar, AiOutlineSchedule } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsPeople, BsReceiptCutoff } from "react-icons/bs";
import Box from "../../atoms/Box";

export default function BigNumbers() {
  const bigNumberData = [
    {
      name: "date",
      value: "28, march",
      icon: <AiOutlineCalendar />,
    },
    {
      name: "revenue",
      value: "42.76$",
      icon: <FaRegMoneyBillAlt />,
    },
    {
      name: "net profit",
      value: "16.32$",
      icon: <FaRegMoneyBillAlt />,
    },
    {
      name: "transactions",
      value: "234",
      icon: <AiOutlineSchedule />,
    },
    {
      name: "customers",
      value: "453",
      icon: <BsPeople />,
    },
    {
      name: "avg receipt",
      value: "28.43$",
      icon: <BsReceiptCutoff />,
    },
  ];

  return (
    <>
      <div className=" px-2 gap-2 mx-auto container columns-3 lg:columns-6 pt-6">
        {bigNumberData.map(({ name, value, icon }, i) => (
          <Box key={`asdf${i}`} name={name} value={value} icon={icon} />
        ))}
      </div>
    </>
  );
}
