import React, { createContext, useState, useEffect, useMemo, useContext } from "react";

export const AuthDataContext = createContext(null);

const AuthDataProvider = props => {
  
    const [authData, setAuthData] = useState(false);

    useEffect(() => {
    
        const currentAuthData = authData 

        if (currentAuthData) setAuthData(currentAuthData);

    }, []);

    const onLogout = () => setAuthData(false);

    const onLogin = newAuthData => setAuthData(newAuthData);

    const handlerSetUser = user => setUser(user)

    const authDataValue = useMemo( () => ({ loggedIn: authData, onLogin, onLogout }), [authData ]);

    return <AuthDataContext.Provider value={authDataValue} {...props} />;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;