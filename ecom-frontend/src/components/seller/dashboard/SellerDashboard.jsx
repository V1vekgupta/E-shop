import React, { useEffect } from "react";
import { FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import DashboardOverview from "../../admin/dashboard/DashboardOverview";
import { dashboardProductsAction, getOrdersForDashboard } from "../../../store/actions";
import Loader from "../../shared/Loader";
import ErrorPage from "../../shared/ErrorPage";

const SellerDashboard = () => {
  const dispatch = useDispatch();
  const { isLoading, errorMessage } = useSelector((state) => state.errors);
  const { products, pagination: productPagination } = useSelector((state) => state.products);
  const { adminOrder, pagination: orderPagination } = useSelector((state) => state.order || {});

  useEffect(() => {
    dispatch(dashboardProductsAction("", false));
    dispatch(getOrdersForDashboard("", false));
  }, [dispatch]);

  if (isLoading) return <Loader />;
  if (errorMessage) return <ErrorPage message={errorMessage} />;

  const productCount = productPagination?.totalElements ?? products?.length ?? 0;
  const orderCount = orderPagination?.totalElements ?? adminOrder?.length ?? 0;

  return (
      <div className="mt-8 px-6">

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Seller Dashboard
        </h1>

        {/* Cards */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow p-6">
            <DashboardOverview
                title="My Products"
                amount={productCount}
                Icon={FaBoxOpen}
            />
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow p-6">
            <DashboardOverview
                title="My Orders"
                amount={orderCount}
                Icon={FaShoppingCart}
            />
          </div>

        </div>

      </div>
  );
};

export default SellerDashboard;

