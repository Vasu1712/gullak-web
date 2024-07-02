import React from 'react';
import Footer from './Footer';

const Transactions = () => {
  return (
    <div className="bg-gradient-to-br from-grad1 via-grad2 to-grad3 p-4">
        <div className="mt-6 w-full overflow-y-auto mb-4">
            <h4 className="text-3xl font-semibold text-gray-800 mb-6">Transaction History</h4>
            <ul className="space-y-2">
            <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
                <div>
                <h5 className="font-md text-lg">Puran's Store</h5>
                <p className="text-sm text-gray-500">02 July 2023 | 10:00</p>
                </div>
                <p className="text-red-500">₹202</p>
            </li>
            <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
                <div>
                <h5 className="font-md text-lg">Excitel Wi-Fi Bill</h5>
                <p className="text-sm text-gray-500">29 June 2023 | 14:40</p>
                </div>
                <p className="text-red-500">₹120</p>
            </li>
            <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
                <div>
                <h5 className="font-md text-lg">Stipend</h5>
                <p className="text-sm text-gray-500">24 June 2023 | 12:10</p>
                </div>
                <p className="text-green-500">₹100000</p>
            </li>
            <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
                <div>
                <h5 className="font-md text-lg">Monthly Subscription</h5>
                <p className="text-sm text-gray-500">22 June 2023 | 10:00</p>
                </div>
                <p className="text-red-500">₹699</p>
            </li>
            <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
                <div>
                <h5 className="font-md text-lg">Puran's Store</h5>
                <p className="text-sm text-gray-500">02 July 2023 | 10:00</p>
                </div>
                <p className="text-red-500">₹202</p>
            </li>
            <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
                <div>
                <h5 className="font-md text-lg">Excitel Wi-Fi Bill</h5>
                <p className="text-sm text-gray-500">29 June 2023 | 14:40</p>
                </div>
                <p className="text-red-500">₹120</p>
            </li>
            <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
                <div>
                <h5 className="font-md text-lg">Stipend</h5>
                <p className="text-sm text-gray-500">24 June 2023 | 12:10</p>
                </div>
                <p className="text-green-500">₹100000</p>
            </li>
            <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
                <div>
                <h5 className="font-md text-lg">Monthly Subscription</h5>
                <p className="text-sm text-gray-500">22 June 2023 | 10:00</p>
                </div>
                <p className="text-red-500">₹699</p>
            </li>
            <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
                <div>
                <h5 className="font-md text-lg">Puran's Store</h5>
                <p className="text-sm text-gray-500">02 July 2023 | 10:00</p>
                </div>
                <p className="text-red-500">₹202</p>
            </li>
            <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
                <div>
                <h5 className="font-md text-lg">Excitel Wi-Fi Bill</h5>
                <p className="text-sm text-gray-500">29 June 2023 | 14:40</p>
                </div>
                <p className="text-red-500">₹120</p>
            </li>
            <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
                <div>
                <h5 className="font-md text-lg">Stipend</h5>
                <p className="text-sm text-gray-500">24 June 2023 | 12:10</p>
                </div>
                <p className="text-green-500">₹100000</p>
            </li>
            <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
                <div>
                <h5 className="font-md text-lg">Monthly Subscription</h5>
                <p className="text-sm text-gray-500">22 June 2023 | 10:00</p>
                </div>
                <p className="text-red-500">₹699</p>
            </li>
            </ul>
        </div>
        <Footer/>
    </div>    
  );
};

export default Transactions;
