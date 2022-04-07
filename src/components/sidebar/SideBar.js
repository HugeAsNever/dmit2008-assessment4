import React from "react";
import ProductOptions from "./ProductOptions";
import {SideBarStyles, SideBarTitle, SideBarButton, SideBarItems, SideBarItem} from './styles';
import { BsFillGrid1X2Fill, BsXOctagonFill, BsPersonFill, BsPersonLinesFill, BsMinecart, BsBookmarkHeart, BsFlower2, BsCreditCard2FrontFill, BsFillArrowUpRightSquareFill, BsBack } from "react-icons/bs";

//security
import { auth } from 'libs/firebase';
import { signOut } from 'firebase/auth';

function SideBar() {

    function handleLogout(evt) {
        signOut(auth);
    }

    return ( 
        <SideBarStyles>
            <SideBarTitle><BsFillGrid1X2Fill />&nbsp;&nbsp;DASHBOARD</SideBarTitle>
            
            <SideBarItems>
                <SideBarItem><SideBarButton><BsPersonLinesFill />&nbsp;&nbsp;USERS</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><BsPersonFill />&nbsp;&nbsp;PROFILE</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton onClick={handleLogout}><BsXOctagonFill />&nbsp;&nbsp;LOGOUT</SideBarButton></SideBarItem>
            </SideBarItems>

            <ProductOptions />

            <SideBarItems>
                <SideBarItem><SideBarButton><BsMinecart />&nbsp;&nbsp;ORDERS</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><BsBookmarkHeart />&nbsp;&nbsp;REVIEWS</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><BsFlower2 />&nbsp;&nbsp;BRANDS</SideBarButton></SideBarItem>
            </SideBarItems>

            <SideBarItems>
                <SideBarItem><SideBarButton><BsCreditCard2FrontFill />&nbsp;&nbsp;AUTHENTICATION</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><BsFillArrowUpRightSquareFill />&nbsp;&nbsp;ICONS</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><BsBack />&nbsp;&nbsp;OTHER PAGES</SideBarButton></SideBarItem>
            </SideBarItems>


        </SideBarStyles>
     );
}

export default SideBar;