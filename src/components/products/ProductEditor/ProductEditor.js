import React from 'react';
import { ProductDataEntryForm } from '../ProductDataEntryForm';
import { ProductPreview } from '../ProductPreview';
import {ProductEditorStyles} from './styles'

function ProductEditor ({children,handleSubmit,productName, handleProductName, productPrice, handleProductPrice,productImage, setProductImage,productDesc,handleProductDesc,...props})  {

  return (
        <ProductEditorStyles  {...props}>
          <ProductDataEntryForm handleProductName={handleProductName} handleProductPrice={handleProductPrice} setProductImage={setProductImage} handleProductDesc={handleProductDesc} handleSubmit={handleSubmit} />
          <ProductPreview productName={productName} productPrice={productPrice} productImage={productImage} productDesc={productDesc} />

        </ProductEditorStyles>
  )
}

export default ProductEditor