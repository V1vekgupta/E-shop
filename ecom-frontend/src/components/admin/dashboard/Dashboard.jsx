// import React, { useEffect } from 'react'
// import DashboardOverview from './DashboardOverview'
// import { FaBoxOpen, FaDollarSign, FaShoppingCart, FaUsers, FaStore } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import { analyticsAction } from '../../../store/actions';
// import Loader from '../../shared/Loader';
// import ErrorPage from '../../shared/ErrorPage';
//
// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const {isLoading, errorMessage} = useSelector((state) => state.errors);
//   const {
//     analytics: { productCount, totalRevenue, totalOrders, totalUsers, totalSellers },
//    } = useSelector((state) => state.admin);
//
//    useEffect(() => {
//     dispatch(analyticsAction());
//    }, [dispatch]);
//
//    if (isLoading) {
//     return <Loader />
//    }
//
//    if (errorMessage) {
//     return <ErrorPage message={errorMessage}/>;
//    }
//
//   return (
//     <div>
//       <div className='grid gap-4 mt-8 lg:grid-cols-5 md:grid-cols-2 grid-cols-1
//           border border-slate-400 rounded-lg bg-linear-to-r
//            from-blue-50 to-blue-100 shadow-lg p-2'>
//         <DashboardOverview title="Total Users" amount={totalUsers} Icon={FaUsers} />
//         <DashboardOverview title="Total Sellers" amount={totalSellers} Icon={FaStore} />
//         <DashboardOverview title="Total Products" amount={productCount} Icon={FaBoxOpen} />
//         <DashboardOverview title="Total Orders" amount={totalOrders} Icon={FaShoppingCart} />
//         <DashboardOverview title="Total Revenue" amount={totalRevenue} Icon={FaDollarSign} revenue />
//       </div>
//     </div>
//   )
// }
//
// export default Dashboard
import React, { useEffect } from 'react'
import DashboardOverview from './DashboardOverview'
import { FaBoxOpen, FaDollarSign, FaShoppingCart, FaUsers, FaStore } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { analyticsAction } from '../../../store/actions';
import Loader from '../../shared/Loader';
import ErrorPage from '../../shared/ErrorPage';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { isLoading, errorMessage } = useSelector((state) => state.errors);

    const {
        analytics: { productCount, totalRevenue, totalOrders, totalUsers, totalSellers },
    } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(analyticsAction());
    }, [dispatch]);

    if (isLoading) return <Loader />;
    if (errorMessage) return <ErrorPage message={errorMessage} />;

    return (
        <div className="p-6">

            {/* Heading */}
            <h1 className="text-2xl font-bold text-gray-800 mb-8">
                Dashboard Overview
            </h1>

            {/* Grid */}
            <div className="grid gap-6 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

                <DashboardOverview title="Total Users" amount={totalUsers} Icon={FaUsers} />

                <DashboardOverview title="Total Sellers" amount={totalSellers} Icon={FaStore} />

                <DashboardOverview title="Total Products" amount={productCount} Icon={FaBoxOpen} />

                <DashboardOverview title="Total Orders" amount={totalOrders} Icon={FaShoppingCart} />

                <DashboardOverview title="Total Revenue" amount={totalRevenue} Icon={FaDollarSign} revenue />

            </div>
        </div>
    )
}

export default Dashboard;