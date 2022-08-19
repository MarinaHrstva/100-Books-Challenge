import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";



const PrivateRoute = ({ children }) => {
    const { user } = useContext(UserContext);

    if (!user.email) {
        return <Navigate to="/login" replace />
    }

    return children;
};

export default PrivateRoute;