import React from 'react';
import {IoIosNotifications} from "react-icons/io";
import {AiTwotoneSetting} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import {BsPersonCircle} from "react-icons/bs";
import {AppBarStyles, AppBarItem, AppBarItems, AppBarGroup, AppBarGroupItem, CompanyLogo} from './styles';
import {IconButton} from './../../ui/buttons';



function AppBar (props){
    return( 
        <AppBarStyles>
            <AppBarGroup>
                <AppBarGroupItem>
                    <CompanyLogo />
                </AppBarGroupItem>
                <AppBarGroupItem>
                    <AppBarItems>
                        <AppBarItem><IconButton><IoIosNotifications color="#546E7A" size="2rem" /></IconButton></AppBarItem>
                        <AppBarItem><IconButton><AiTwotoneSetting color="#546E7A" size="2rem" /></IconButton></AppBarItem>
                        <AppBarItem><IconButton><MdEmail color="#546E7A" size="2rem" /></IconButton></AppBarItem>
                        <AppBarItem><IconButton><BsPersonCircle color="#546E7A" size="3rem" /></IconButton></AppBarItem>
                    </AppBarItems>
                </AppBarGroupItem>
            </AppBarGroup>
            
      </AppBarStyles>
    );
}

export default AppBar;