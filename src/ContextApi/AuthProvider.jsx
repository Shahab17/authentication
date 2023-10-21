import { createContext  } from "react";
import PropTypes from 'prop-types'


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const authInfo = {name: "nodi nala khal bil"}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children: PropTypes.node
}

/***
 * 1. create context and export it
 * 2. set provider
 * 3. use the AuthProvider in the main.jsx file
 * 4. access children in the AuthProvider components as children and use it in the middle of the Provider
 * 
 *  */