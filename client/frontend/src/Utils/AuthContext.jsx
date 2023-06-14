// import { createContext, useContext, useState } from "react";

// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn ] = useState(false);

//     const login = async (username, password) => {
//         try {
//             const response = await fetch ("/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ username, password })
//             });
//         }
//         catch(error){
//         console.log(error)            
//         }
//     };
    
//     const logout = () => setIsLoggedIn(false);

//     return (
//         <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const UserAuth = () => {
//     return useContext(AuthContext)
// }