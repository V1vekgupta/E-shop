import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../api/api";
import Loader from "../shared/Loader";
import ErrorPage from "../shared/ErrorPage";

const ProfileHome = () => {
  const { user, address, selectedUserCheckoutAddress } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [orderError, setOrderError] = useState(null);

  const selectedAddress = useMemo(() => {
    if (selectedUserCheckoutAddress) return selectedUserCheckoutAddress;
    if (Array.isArray(address) && address.length > 0) return address[0];
    return null;
  }, [address, selectedUserCheckoutAddress]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoadingOrders(true);
        const { data } = await api.get("/order/users?pageNumber=0&pageSize=5&sortBy=orderId&sortOrder=desc");
        if (!mounted) return;
        setOrders(data?.content || []);
        setOrderError(null);
      } catch (e) {
        if (!mounted) return;
        setOrderError(e?.response?.data?.message || "Failed to load orders");
      } finally {
        if (mounted) setLoadingOrders(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (orderError) return <ErrorPage message={orderError} />;

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-slate-800 text-2xl font-bold">Profile</div>
        <div className="mt-2 text-slate-600">
          <div>
            <span className="font-semibold">Name:</span> {user?.username}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {user?.email}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-slate-800 text-lg font-bold">Selected Address</div>
          <div className="mt-2 text-slate-600 text-sm">
            {selectedAddress ? (
              <>
                <div className="font-semibold">{selectedAddress?.street}</div>
                <div>
                  {selectedAddress?.city}, {selectedAddress?.state} {selectedAddress?.zipCode}
                </div>
                <div>{selectedAddress?.country}</div>
              </>
            ) : (
              <div>No address selected yet.</div>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-slate-800 text-lg font-bold">Wishlist</div>
          <div className="mt-2 text-slate-600 text-sm">Wishlist UI will appear here.</div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-slate-800 text-lg font-bold">Recent Orders</div>
        <div className="mt-3">
          {loadingOrders ? (
            <Loader />
          ) : orders.length === 0 ? (
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
    </div>
  );
};

export default ProfileHome;

