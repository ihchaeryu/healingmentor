import React, { createContext, useState } from 'react';

// Create a new context
const UserContext = createContext();

// Create a provider for the context
export const UserProvider = ({ children }) => {
    // State to hold user information
    const [user, setUser] = useState({
        username: '',
        accessToken: '',
        refreshToken: '',
        // Add more user information as needed
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
