
import React, { useState } from "react";
import {
  FaSun,
  FaMoon,
  FaWallet,
  FaChartLine,
  FaExchangeAlt,
  FaPiggyBank,
  FaPlus,
} from "react-icons/fa";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const PortfolioPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Example data for charts
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Portfolio Value",
        data: [5000, 7000, 6500, 8000, 9500, 11000, 12500],
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels: ["Forex", "Commodities", "Indices", "Crypto"],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ["#4f46e5", "#f59e0b", "#10b981", "#ef4444"],
      },
    ],
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">
        {/* Header */}
        <header className="flex items-center justify-between p-6 border-b dark:border-gray-700">

          <h1 className="text-2xl font-bold">Portfolio Management</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
          <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl shadow flex items-center">
            <FaWallet className="text-3xl text-indigo-500 mr-4" />
            <div>
              <p className="text-sm">Total Balance</p>
              <h2 className="text-xl font-bold">$12,500</h2>
            </div>
          </div>
          <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl shadow flex items-center">
            <FaChartLine className="text-3xl text-green-500 mr-4" />
            <div>
              <p className="text-sm">Monthly Growth</p>
              <h2 className="text-xl font-bold">+8.5%</h2>
            </div>
          </div>
          <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl shadow flex items-center">
            <FaExchangeAlt className="text-3xl text-blue-500 mr-4" />
            <div>
              <p className="text-sm">Active Trades</p>
              <h2 className="text-xl font-bold">12</h2>
            </div>
          </div>
          <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl shadow flex items-center">
            <FaPiggyBank className="text-3xl text-yellow-500 mr-4" />
            <div>
              <p className="text-sm">Total Profit</p>
              <h2 className="text-xl font-bold">$2,150</h2>
            </div>
          </div>
        </section>

        {/* Charts */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-4">Portfolio Value Over Time</h2>
            <Line data={lineData} />
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-4">Asset Allocation</h2>
            <Pie data={pieData} />
          </div>
        </section>

        {/* Recent Trades Table */}
        <section className="p-6">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow p-5">
            <h2 className="text-lg font-bold mb-4">Recent Trades</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="py-2">Date</th>
                  <th>Asset</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Profit/Loss</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-2">2025-08-01</td>
                  <td>EUR/USD</td>
                  <td>Buy</td>
                  <td>$1,000</td>
                  <td className="text-green-500">+$150</td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-2">2025-07-28</td>
                  <td>Gold</td>
                  <td>Sell</td>
                  <td>$2,000</td>
                  <td className="text-red-500">-$50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Add Funds */}
        <section className="p-6">
          <div className="bg-indigo-500 text-white rounded-xl p-5 shadow flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">Add More Funds</h2>
              <p>Boost your portfolio by adding more funds to trade.</p>
            </div>
            <button className="bg-white text-indigo-600 px-5 py-2 rounded-full flex items-center font-medium">
              <FaPlus className="mr-2" /> Add Funds
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;
