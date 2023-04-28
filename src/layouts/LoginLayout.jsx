import React from 'react';
import NevigationBar from '../Pages/Shared/NavigationBar/NevigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NevigationBar></NevigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;