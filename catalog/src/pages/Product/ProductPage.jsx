import React from 'react';
import { useParams } from 'react-router-dom';
import { Query } from '@apollo/react-components';

import Layout from 'components/Layout';
import items from 'constants/itemsMocked';
import PRODUCT_QUERY from 'api/getProduct';
import { findPriceInSelectedCurrency } from 'utils/findPrice';

import {
  ProductWrapper,
  ProductGallery,
  ProductGalleryItem,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductBrand,
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
      <Layout
        pagename={this.props.section}
        disableTitle={true}
        selectCurrency={this.props.selectCurrency}
        selectedCurrency={this.props.selectedCurrency}
        selectedCurrencySymbol={this.props.selectedCurrencySymbol}
      >
        <ProductWrapper>
          <Query
            query={PRODUCT_QUERY}
            variables={{
              productId: this.props.params.productId.slice(1),
            }}
          >
            {({ loading, data }) => {
              if (loading) return 'Loading...';
              const { product } = data;
              return (
                <>
                  <ProductGallery>
                    {product.gallery.map((image, index) => (
                      <ProductGalleryItem
                        imageUrl={image}
                        onClick={() => this.selectImage(index)}
                      />
                    ))}
                  </ProductGallery>
                  <ProductImage imageUrl={product.gallery[this.state.selectedImage]} />
                  <ProductInfo>
                    <ProductBrand>{product.brand}</ProductBrand>
                    <ProductName>{product.name}</ProductName>
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
                      <ProductPrice>
                        {this.props.selectedCurrencySymbol}
                        {findPriceInSelectedCurrency(this.props.selectedCurrency, product.prices)}
                      </ProductPrice>
                    </ProductOptions>
                    <AddToCartButton>Add to cart</AddToCartButton>
                    <ProductDescription>{product.description}</ProductDescription>
                  </ProductInfo>
                </>
              );
            }}
          </Query>
        </ProductWrapper>
      </Layout>
    );
  }
}

export default (props) => <Product {...props} params={useParams()} />;
