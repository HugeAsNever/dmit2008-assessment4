import React from 'react';

import {ProductPreviewStyles, ProductImage,ProductDescription,ProductName,ProductPrice} from './styles';



function ProductPreview ({children, productName, productPrice,productImage,productDesc,...props})  {
  return (
        <ProductPreviewStyles  {...props}>
           
           <ProductName>{productName}</ProductName>
           <ProductPrice>$ {productPrice}</ProductPrice>
           <ProductDescription>{productDesc}</ProductDescription>
           <ProductImage>
             <img src={productImage.previewImage} alt="caonima" width="320" height="184"/>
           </ProductImage>
        </ProductPreviewStyles>
  )
}

export default ProductPreview