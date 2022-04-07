import React from "react";
import { PanelStyles, PanelTitle, PanelBarItems, PanelBarItem, PanelBody } from "./styles";
import {Button} from '../../ui/buttons';
import {useNavigate} from "react-router-dom";
import {ProductCard} from "components/productCard";
import placeholder from 'assest/images/placeholder.png'


function AllProductsPanel (props) {


    let navigation = useNavigate();
    let productTitle = 'Product Name';
    let productPrice = '123.45';
    let productDesc = 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have';
    let productImage = placeholder;

    function onHandleAdd(evt) {
        evt.preventDefault();
        navigation('add');

    
    }
    return (
        <PanelStyles>
            <PanelBarItems>
                <PanelBarItem><h3>Home &gt; All Product</h3></PanelBarItem>
                <PanelBarItem><Button onClick={onHandleAdd} bgcolor="blue" color="white">Add Product</Button></PanelBarItem>
            </PanelBarItems>
            <PanelTitle><h2>Product Listings</h2></PanelTitle>
            <PanelBody>
                <ProductCard title={productTitle} price={productPrice} desc={productDesc} image={productImage} />
                <ProductCard title={productTitle} price={productPrice} desc={productDesc} image={productImage} />
                <ProductCard title={productTitle} price={productPrice} desc={productDesc} image={productImage} />
                <ProductCard title={productTitle} price={productPrice} desc={productDesc} image={productImage} />
                <ProductCard title={productTitle} price={productPrice} desc={productDesc} image={productImage} />


                
            </PanelBody>
            
            
        </PanelStyles>
      );
}

export default AllProductsPanel;





