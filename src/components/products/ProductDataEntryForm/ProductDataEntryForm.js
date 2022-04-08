import React from 'react';

import {ProductDataEntryFormStyles, ProductDescription, ProductImage, ProductName, ProductPrice} from './styles';
import {Label, Input} from 'ui/forms';
import { ProductImageDropBox } from '../ProductImageDropBox';
import { UploadButton } from 'ui/buttons';

function ProductDataEntryForm ({children, handleProductName, handleProductPrice, setProductImage, handleProductDesc, handleSubmit, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props} onSubmit={handleSubmit}>
          <ProductImage>
            <Label>Product Image</Label>
            <ProductImageDropBox setProductImage={setProductImage} />
          </ProductImage>

          <fieldset>
            <ProductName>
              <Label>Product Name</Label>
              <Input onChange={(evt) => handleProductName(evt.target.value.trim())} maxLength={30} />
            </ProductName>

            <ProductPrice>
              <Label >Product Price</Label>
              <Input onChange={(evt) => handleProductPrice(evt.target.value.trim())} maxLength={8} />
            </ProductPrice>
          </fieldset>

          <ProductDescription>
            <Label>Product Description</Label>
            <textarea rows={6} onChange={(evt) => handleProductDesc(evt.target.value.trim())}></textarea>
          </ProductDescription>

          <div>
            <UploadButton width="100%" padding="0.75rem 0" margin="1.125rem 0 0 0" type='submit'>Add Product</UploadButton>
          </div>
        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm