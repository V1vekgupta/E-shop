// import { Icon } from '@mui/material';
// import React from 'react'
// import { formatRevenue } from '../../../utils/formatPrice';
//
// const DashboardOverview = ({ title, amount, Icon, revenue = false }) => {
//
//   const convertedAmount = revenue ? Number(amount).toFixed(2) : amount;
//
//     return (
//     <>
//     <div className='xl:w-80 w-full space-y-4 text-center md:text-start px-5 py-8'>
//         <div className='flex md:justify-start justify-center items-center gap-2'>
//             <h3 className='uppercase text-2xl text-slate-700 font-semibold'>{title}</h3>
//             <Icon className='text-slate-800 text-2xl' />
//         </div>
//
//         <h1 className='font-bold text-slate-800 text-3xl'>
//             {revenue ? "$" : null}
//             {revenue ? formatRevenue(convertedAmount) : convertedAmount}
//         </h1>
//     </div>
//     </>
//   )
// }
//
// export default DashboardOverview
import React from "react";

const DashboardOverview = ({ title, amount, Icon, revenue }) => {
    return (
        <div
            className={`flex items-center justify-between p-5 rounded-xl shadow-md transition duration-300 hover:shadow-xl hover:scale-[1.02]
        ${revenue
                ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                : "bg-white text-gray-800"
            }`}
        >
            {/* Left Content */}
            <div>
                <p className="text-sm font-medium opacity-80 uppercase tracking-wide">
                    {title}
                </p>

                <h2 className="text-2xl font-bold mt-2">
                    {revenue ? `$${amount}` : amount}
                </h2>
            </div>

            {/* Icon */}
            <div
                className={`p-3 rounded-full text-xl
          ${revenue
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
            >
                <Icon />
            </div>
        </div>
    );
};

export default DashboardOverview;