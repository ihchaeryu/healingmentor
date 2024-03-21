import React, { createContext, useState } from 'react';
import axios from 'axios';

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

    // handle login 
    const login = (id, pwd) => {
        return axios({
            method: 'post',
            maxBodyLength: Infinity,
            url: '/api/v1/user/auth/login',
            headers: {
                'Content-type': 'application/json',
            },
            data: { username: id, password: pwd },
        }).then(res => {
            console.log(res);
            // set user context
            setUser({
                ...user,
                username: res.data.user,
                accessToken: res.data.token.access,
                refreshToken: res.data.token.refresh
            })
            return res.data.token.access;
        }).catch(err => {
            console.log(err);
            throw new Error('Login failed');
        });
    };

    const logout = () => {
        setUser({
            ...user,
            username: '',
            accessToken: '',
            refreshToken: ''
        })
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
