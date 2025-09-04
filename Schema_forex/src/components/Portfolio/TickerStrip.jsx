import React from "react";
import { FaBitcoin, FaEuroSign } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import { MdShowChart } from "react-icons/md";

const tickerData = [
  {
    id: 1,
    icon: <MdShowChart className="text-green-500" />,
    name: "S&P 500",
    price: "4,397.8",
    change: "+1.80 (+0.03%)",
    changeColor: "text-green-500",
  },
  {
    id: 2,
    icon: (
      <div className="bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs">
        100
      </div>
    ),
    name: "US 100 Cash CFD",
    price: "23,273.0",
    change: "+30.40 (+0.13%)",
    changeColor: "text-green-500",
  },
  {
    id: 3,
    icon: <FaEuroSign className="text-blue-400" />,
    name: "EUR to USD",
    price: "1.16309",
    change: "-0.00 (-0.16%)",
    changeColor: "text-red-500",
  },
  {
    id: 4,
    icon: <FaBitcoin className="text-orange-500" />,
    name: "Bitcoin",
    price: "113,757",
    change: "-506.00 (-0.44%)",
    changeColor: "text-red-500",
  },
  {
    id: 5,
    icon: <SiEthereum className="text-indigo-400" />,
    name: "Ethereum",
    price: "4,304.6",
    change: "+72.50 (+1.65%)",
    changeColor: "text-green-500",
  },
];

const TickerStrip = () => {
  const loopData = [...tickerData, ...tickerData]; // duplicate for seamless loop

  return (
    <div className="w-full bg-black text-white overflow-hidden py-2">
      <div className="flex w-max animate-marquee">
        {loopData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center px-6 border-r border-gray-700"
          >
            <span className="mr-2 text-lg">{item.icon}</span>
            <span className="font-semibold mr-2">{item.name}</span>
            <span className="mr-2">{item.price}</span>
            <span className={`${item.changeColor} text-sm`}>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerStrip;
