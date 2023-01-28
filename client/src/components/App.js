import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Layout from './Layout';
import DivLoading from './DivLoading';
import './css/App.css';
import { LoginButton } from "./Login";


function App(){

    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <DivLoading />
        );
    }

    return (
        <div className='App'>
            {isAuthenticated ? (
            <>
                <Layout />
            </>
            ) : (
                <LoginButton />
            )}         
        </div>
    );
}

export default App;