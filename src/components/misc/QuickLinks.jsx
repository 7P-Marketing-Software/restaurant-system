import { BiFoodMenu } from "react-icons/bi";
import { BsPerson, BsTruck } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { FaRegMoneyBillAlt } from "react-icons/fa";

export default function Links() {
  const links = [
    { name: "food menu", icon: <BiFoodMenu /> },
    { name: "supplier payments", icon: <BsPerson /> },
    { name: "POS", icon: <SlScreenDesktop /> },
    { name: "Expense", icon: <FaRegMoneyBillAlt /> },
    { name: "purchase", icon: <BsTruck /> },
  ];

  return (
    <>
      <div className="">
        <p className="ml-3 mt-4 text-2xl mb-3">Quick Links</p>
        <ul>
          {links.map(({ name, icon }, i) => (
            <li
              key={`asdf${i}`}
              className="mx-4 mb-2 flex items-center justify-center rounded-lg bg-primary p-3"
            >
              <span className="mr-2 text-lg">{icon}</span>+
              <span className="ml-2"> {name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
