import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import loader from './loader.json'


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return <Lottie className="w-2/3 mx-auto" animationData={loader} loop={true} />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;