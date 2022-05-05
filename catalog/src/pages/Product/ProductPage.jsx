import React from 'react';

import Layout from 'components/Layout';
import items from 'constants/itemsMocked';

import {
  ProductWrapper,
  ProductGallery,
  ProductGalleryItem,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductOptions,
  ProductSizesOption,
  ProductColorsOption,
  ProductOptionsTitle,
  ProductDescription,
  ProductPrice,
  AddToCartButton,
} from './styled';

const PRODUCT = items[0];

class Product extends React.Component {
  state = {
    selectedImage: 0,
    selectedColor: PRODUCT.colors[0],
    selectedSize: PRODUCT.sizes[0],
  };

  selectImage = (imageIndex) => {
    this.setState({ selectedImage: imageIndex });
  };

  selectColor = (colorToSelect) => {
    this.setState({ selectedColor: colorToSelect });
  };

  selectSize = (sizeToSelect) => {
    this.setState({ selectedSize: sizeToSelect });
  };

  render() {
    return (
      <Layout pagename={this.props.section} disableTitle={true}>
        <ProductWrapper>
          <ProductGallery>
            {PRODUCT.images.map((image, index) => (
              <ProductGalleryItem imageUrl={image} onClick={() => this.selectImage(index)} />
            ))}
          </ProductGallery>
          <ProductImage imageUrl={PRODUCT.images[this.state.selectedImage]} />
          <ProductInfo>
            <ProductName>{PRODUCT.name}</ProductName>
            <ProductOptions>
              <ProductOptionsTitle>Size:</ProductOptionsTitle>
              {PRODUCT.sizes.map((size) => (
                <ProductSizesOption
                  onClick={() => this.selectSize(size)}
                  selected={size === this.state.selectedSize}
                >
                  {size}
                </ProductSizesOption>
              ))}
            </ProductOptions>
            <ProductOptions>
              <ProductOptionsTitle>Color:</ProductOptionsTitle>
              {PRODUCT.colors.map((color) => (
                <ProductColorsOption
                  color={color}
                  selected={color === this.state.selectedColor}
                  onClick={() => this.selectColor(color)}
                />
              ))}
            </ProductOptions>
            <ProductOptions>
              <ProductOptionsTitle>Price:</ProductOptionsTitle>
              <ProductPrice>{PRODUCT.price}</ProductPrice>
            </ProductOptions>
            <AddToCartButton>Add to cart</AddToCartButton>
            <ProductDescription>{PRODUCT.description}</ProductDescription>
          </ProductInfo>
        </ProductWrapper>
      </Layout>
    );
  }
}

export default Product;
