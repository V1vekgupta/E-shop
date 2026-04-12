import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getEffectiveRole } from '../utils/role';

const PrivateRoute = ({
    publicPage = false,
    adminOnly = false,
    sellerOnly = false,
    customerOnly = false,
    allowedRoles = null, // e.g. ["ADMIN","SELLER"]
  }) => {
    const { user } = useSelector((state) => state.auth);
    const location = useLocation();
    const effectiveRole = getEffectiveRole(user);

    if (publicPage) {
        return user ? <Navigate to="/" /> : <Outlet />
    }

    // Must be authenticated for any non-public route wrapper
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Role-based gating
    if (allowedRoles && Array.isArray(allowedRoles)) {
        if (!effectiveRole || !allowedRoles.includes(effectiveRole)) {
            return <Navigate to="/" replace />;
        }
    } else if (adminOnly) {
        if (effectiveRole !== "ADMIN") {
            return <Navigate to="/" replace />;
        }
    } else if (sellerOnly) {
        if (effectiveRole !== "SELLER") {
            return <Navigate to="/" replace />;
        }
    } else if (customerOnly) {
        if (effectiveRole !== "USER") {
            return <Navigate to="/" replace />;
        }
    }

    return <Outlet />;
}

export default PrivateRoute