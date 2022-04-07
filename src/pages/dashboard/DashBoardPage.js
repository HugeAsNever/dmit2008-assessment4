import React, {useState} from 'react';
import {AppBar} from 'components/appbar';
import {SideBar} from 'components/sidebar';
import {DashBoardPageStyles} from "./styles";

//security
import { auth } from 'libs/firebase';
import { Outlet, useNavigate } from 'react-router-dom';
import  { onAuthStateChanged } from 'firebase/auth';

function DashBoardPage  (props){

    const [isAuth, checkIsAuth] = useState(false);
    const naviToLogin = useNavigate();
    onAuthStateChanged(auth, (user) => {
        if(user){
            checkIsAuth(true);
        } else {
            checkIsAuth(false);
            naviToLogin('/');
        }
    })

    if(isAuth) {
        return(
            <>
                <AppBar/>
                <DashBoardPageStyles>
                    <SideBar />
                        <Outlet />
                    
                </DashBoardPageStyles>

            </> 
        );
    } else {
        return null;
    }
    
}

export default DashBoardPage; 