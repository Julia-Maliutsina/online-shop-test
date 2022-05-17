import React from 'react';
import { useParams } from 'react-router-dom';
import { Query } from '@apollo/react-components';

import { Layout } from 'components/Layout';
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
  ProductTextOption,
  ProductSwatchOption,
  ProductOptionsTitle,
  ProductDescription,
  ProductPrice,
  AddToCartButton,
} from './styled';
class Product extends React.Component {
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
                        key={index}
                        imageUrl={image}
                        onClick={() => this.props.selectImage(index)}
                      />
                    ))}
                  </ProductGallery>
                  <ProductImage imageUrl={product.gallery[this.props.selectedImage]} />
                  <ProductInfo>
                    <ProductBrand>{product.brand}</ProductBrand>
                    <ProductName>{product.name}</ProductName>
                    {product.attributes.map((attribute, id) => (
                      <ProductOptions key={attribute.id + id}>
                        <ProductOptionsTitle>{attribute.name}</ProductOptionsTitle>
                        {attribute.type === 'text'
                          ? attribute.items.map((item) => (
                              <ProductTextOption
                                key={item.id}
                                onClick={() =>
                                  this.props.selectAttribute(item.value, attribute.name)
                                }
                                selected={
                                  this.props.selectedAttributes[attribute.name] === item.value
                                }
                              >
                                {item.value}
                              </ProductTextOption>
                            ))
                          : attribute.items.map((item) => (
                              <ProductSwatchOption
                                color={item.value}
                                selected={
                                  this.props.selectedAttributes[attribute.name] === item.value
                                }
                                onClick={() =>
                                  this.props.selectAttribute(item.value, attribute.name)
                                }
                              />
                            ))}
                      </ProductOptions>
                    ))}
                    <ProductOptions>
                      <ProductOptionsTitle>Price:</ProductOptionsTitle>
                      <ProductPrice>
                        {this.props.selectedCurrencySymbol}
                        {findPriceInSelectedCurrency(this.props.selectedCurrency, product.prices)}
                      </ProductPrice>
                    </ProductOptions>
                    {product.inStock && (
                      <AddToCartButton
                        disabled={
                          product.attributes.length !==
                          Object.keys(this.props.selectedAttributes).length
                        }
                        onClick={() => this.props.addProductToCart(product.id, product.prices)}
                      >
                        Add to cart
                      </AddToCartButton>
                    )}
                    <ProductDescription
                      dangerouslySetInnerHTML={this.props.setHtml(product.description)}
                    ></ProductDescription>
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

const ProductWithParams = (props) => <Product {...props} params={useParams()} />;

export default ProductWithParams;
