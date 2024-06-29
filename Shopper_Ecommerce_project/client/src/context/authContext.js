import { useState, createContext, useContext, useEffect, } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });
    axios.defaults.headers.common["Authorization"] = auth?.token;

    useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
            const authData = JSON.parse(data);
            console.log(authData);
            setAuth({
                ...auth,
                user: authData.user,
                token: authData.token
            });
        }
        // eslint-disable-next-line
    }, []);
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider >
    )
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };