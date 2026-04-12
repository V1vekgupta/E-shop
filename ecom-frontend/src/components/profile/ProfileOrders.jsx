import React, { useEffect, useState } from "react";
import api from "../../api/api";
import Loader from "../shared/Loader";
import ErrorPage from "../shared/ErrorPage";

const ProfileOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/order/users?pageNumber=0&pageSize=20&sortBy=orderId&sortOrder=desc");
        if (!mounted) return;
        setOrders(data?.content || []);
        setErrorMessage(null);
      } catch (e) {
        if (!mounted) return;
        setErrorMessage(e?.response?.data?.message || "Failed to load orders");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <Loader />;
  if (errorMessage) return <ErrorPage message={errorMessage} />;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-slate-800 text-2xl font-bold">My Orders</div>
      <div className="mt-4">
        {orders.length === 0 ? (
          <div className="text-slate-600 text-sm">No orders yet.</div>
        ) : (
          <div className="space-y-3">
            {orders.map((o) => (
              <div key={o.orderId} className="flex items-center justify-between border border-slate-100 rounded-lg p-3">
                <div className="text-sm">
                  <div className="font-semibold text-slate-800">Order #{o.orderId}</div>
                  <div className="text-slate-600">Status: {o.orderStatus}</div>
                </div>
                <div className="text-sm font-semibold text-slate-800">₹{o.totalAmount}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileOrders;

