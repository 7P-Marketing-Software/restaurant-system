import { VscAccount } from "react-icons/vsc";
import { ImStatsDots } from "react-icons/im";
import {
  MdOutlineMonetizationOn,
  MdOutlineWarehouse,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { TbSpeakerphone } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { Disclosure, Transition } from "@headlessui/react";

export default function OffCanvase({ isOpen }) {
  const tabs = [
    {
      name: "account",
      icon: <VscAccount />,
      panel: ["account info", "logout"],
    },
    {
      name: "statistics",
      icon: <ImStatsDots />,
      panel: [
        "sales",
        "customers",
        "employees",
        "goods",
        "shops",
        "receipts",
        "payments",
        "taxes",
      ],
    },
    {
      name: "Finances",
      icon: <MdOutlineMonetizationOn />,
      panel: [
        "transactions",
        "salaries",
        "invoices",
        "cash",
        "shifts",
        "report",
      ],
    },
    {
      name: "Menu",
      icon: <BiFoodMenu />,
      panel: [
        "categories",
        "goods",
        "ingredient categories",
        "ingredients",
        "products",
        "flow charts",
      ],
    },
    {
      name: "Warehouse ",
      icon: <MdOutlineWarehouse />,
      panel: [
        "balances",
        "deliveries",
        "moves",
        "write - offs",
        "warehouses",
        "inventory",
      ],
    },
    {
      name: "Settings  ",
      icon: <AiOutlineSetting />,
      panel: ["general", "subscription payment", "tables", "security", "check"],
    },
  ];

  return (
    <>
      <div
        className={`w-1/2 bg-base-300 md:w-1/4 ${
          isOpen || "-translate-x-full"
        } fixed z-10 transition`}
      >
        <ul className="h-[90vh] overflow-y-scroll pt-4 capitalize">
          {tabs.map(({ name, icon, panel }, i) => (
            <li key={`asdf${i}`} className="transition-all mb-6 text-xl md:ml-4">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex px-4 py-2">
                      <span className="mt-1">{icon}</span>
                      <span className="ml-8">{name}</span>
                      <span
                        className={`ml-8 mt-1 transition ${
                          open && "rotate-90 "
                        }`}
                      >
                        <MdOutlineArrowForwardIos />
                      </span>
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform -translate-y-10 opacity-0"
                      enterTo="transform opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform opacity-100"
                      leaveTo="transform -translate-y-10 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 ">
                        <ul className=" bg-base-100 py-2 pl-10 pt-4">
                          {panel.map((item) => (
                            <li className="mb-4">{item}</li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
