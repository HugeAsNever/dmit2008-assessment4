import React from "react";
import { Link } from "react-router-dom";
import {SideBarItems, SideBarItem} from './styles';
import {BsLayoutTextWindowReverse,BsStickiesFill, BsTagsFill} from "react-icons/bs";


function ProductOptions() {
    return ( 
        <SideBarItems>
            <SideBarItem><Link to="/dashboard"><BsTagsFill />&nbsp;&nbsp;ALL PRODUCTS</Link></SideBarItem>
            <SideBarItem><Link to="add"><BsStickiesFill />&nbsp;&nbsp;ADD PRODUCTS</Link></SideBarItem>
            <SideBarItem><Link to="edit"><BsLayoutTextWindowReverse />&nbsp;&nbsp;EDIT PRODUCTS</Link></SideBarItem>
        </SideBarItems>
     );
}

export default ProductOptions;