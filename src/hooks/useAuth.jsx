import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;