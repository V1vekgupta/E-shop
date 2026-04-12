import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserAddresses } from "../../store/actions";

const ProfileLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAddresses());
  }, [dispatch]);

  return (
    <div className="lg:px-14 sm:px-8 px-4 py-10">
      <Outlet />
    </div>
  );
};

export default ProfileLayout;

