import React from "react";
import { Link } from "react-router-dom";

const Graphical = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 container border-t  border-gray-200 dark:border-gray-700">
      {/* Left side - Image (col-md-8) */}
      <div className="md:col-span-8 flex justify-center items-center flex-col pt-4">
        <Link
          to="https://www.myfxbook.com/members/PEmanagedfunds/pe-managed-funds/7328501/3fvGW1igjyO0WqInsQdb"
          target="_blank"
        >
          <img
            src="img/graph1.png"
            alt="Graph"
            className=""
          />
        </Link>
        <Link className="px-3 py-1 rounded-2xl border border-blue-500 text-blue-600 dark:text-blue-400 font-medium" to="https://www.myfxbook.com/members/PEmanagedfunds/pe-managed-funds/7328501/3fvGW1igjyO0WqInsQdb"> View Analytics</Link>
      </div>

      {/* Right side - Stats Table (col-md-4) */}
      <div className="md:col-span-3 border rounded-lg shadow-md bg-white dark:bg-gray-900 p-4 text-sm">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 mb-4">
          <button className="px-3 py-1">Info</button>
          <button className="px-3 py-1 border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 font-medium">
            Stats
          </button>
          <button className="px-3 py-1">General</button>
        </div>

        {/* Table Content */}
        <div className="space-y-2 text-gray-700 dark:text-gray-200">
          <div className="flex justify-between">
            <span>Gain :</span>
            <span className="text-green-600 font-medium">+848.98%</span>
          </div>
          <div className="flex justify-between">
            <span>Abs. Gain:</span>
            <span className="text-green-600 font-medium">+515.18%</span>
          </div>
          <div className="flex justify-between">
            <span>Daily</span>
            <span>0.09%</span>
          </div>
          <div className="flex justify-between">
            <span>Monthly:</span>
            <span>2.63%</span>
          </div>
          <div className="flex justify-between">
            <span>Drawdown:</span>
            <span>16.86%</span>
          </div>
          <div className="flex justify-between">
            <span>Balance:</span>
            <span>$941,006.62</span>
          </div>
          <div className="flex justify-between">
            <span>Equity:</span>
            <span>(99.99%) $940,950.83</span>
          </div>
          <div className="flex justify-between">
            <span>Highest:</span>
            <span>(Jun 18) $941,006.62</span>
          </div>
          <div className="flex justify-between">
            <span>Profit:</span>
            <span className="text-green-600 font-medium">$824,048.79</span>
          </div>
          <div className="flex justify-between">
            <span>Interest:</span>
            <span className="text-red-500">-33,143.78</span>
          </div>
          <div className="flex justify-between">
            <span>Deposits:</span>
            <span>$162,453.67</span>
          </div>
          <div className="flex justify-between">
            <span>Withdrawals:</span>
            <span>$42,996.94</span>
          </div>
          <div className="flex justify-between">
            <span>Updated</span>
            <span>14 hours ago</span>
          </div>
          <div className="flex justify-between">
            <span>Tracking</span>
            <span>11</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphical;
