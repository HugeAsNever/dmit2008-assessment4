import React from "react";
import { PanelStyles, PanelTitle, PanelBarItems, PanelBarItem, PanelBody } from "./styles";
import {AddProduct} from 'components/products/widgets/AddProduct';


function AddProductPanel (props) {


    return (
        <PanelStyles>
            <PanelBarItems>
                <PanelBarItem><h3>Home &gt; Add Product</h3></PanelBarItem>
            </PanelBarItems>
            <PanelTitle><h2>Add a Product</h2></PanelTitle>
            <PanelBody>
                
                <AddProduct />
                
            </PanelBody>
            
            
        </PanelStyles>
      );
}

export default AddProductPanel;





