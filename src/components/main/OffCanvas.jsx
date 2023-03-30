import {
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineShoppingCart,
  AiOutlineDatabase,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

export default function OffCanvase({ isOpen }) {
  const tabs = [
    {
      name: "home",
      icon: <AiOutlineHome />,
    },
    {
      name: "settings",
      icon: <FiSettings />,
    },
    {
      name: "items",
      icon: <AiOutlineFileText />,
    },
    {
      name: "sale",
      icon: <AiOutlineShoppingCart />,
    },
    {
      name: "stock",
      icon: <AiOutlineDatabase />,
    },
  ];

  return (
    <>
      <div
        className={`w-1/2 md:w-1/4 bg-base-300 ${
          isOpen || "-translate-x-full"
        } z-10 transition absolute`}
      >
        <ul className="h-[100vh] p-4 capitalize">
          {tabs.map(({ name, icon }, i) => (
            <li key={`asdf${i}`} className="mb-10 md:ml-4 flex text-xl">
              <span className="mt-1">{icon}</span>
              <span className="ml-8">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
