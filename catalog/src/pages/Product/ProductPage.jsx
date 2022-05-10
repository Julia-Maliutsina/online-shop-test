import React from 'react';
import { useParams } from 'react-router-dom';
import { Query } from '@apollo/react-components';

import Layout from 'components/Layout';
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
class Product extends React.Component {
  state = {
    selectedImage: 0,
    selectedAttributes: {},
  };

  selectImage = (imageIndex) => {
    this.setState({ selectedImage: imageIndex });
  };

  setHtml = (html) => {
    return { __html: html };
  };

  selectAttribute = (attributeToSelect, attributeName) => {
    const newSelectedAttributes = this.state.selectedAttributes;
    if (!newSelectedAttributes.length) {
      newSelectedAttributes[attributeName] = attributeToSelect;
      console.log(newSelectedAttributes);
      this.setState({ selectedAttributes: newSelectedAttributes });
      return;
    }
    for (let i = 0; i <= this.state.selectedAttributes.length; i++) {
      if (
        this.state.selectedAttributes[i][attributeName] ||
        i === this.state.selectedAttributes.length
      ) {
        newSelectedAttributes[i][attributeName] = attributeToSelect;
        this.setState({ selectedAttributes: newSelectedAttributes });
        break;
      }
    }
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
                    {product.attributes.map((attribute) => (
                      <ProductOptions key={attribute.id}>
                        <ProductOptionsTitle>{attribute.name}</ProductOptionsTitle>
                        {attribute.type === 'text'
                          ? attribute.items.map((item) => (
                              <ProductSizesOption
                                key={item.id}
                                onClick={() => this.selectAttribute(item.value, attribute.name)}
                                selected={
                                  this.state.selectedAttributes[attribute.name] === item.value
                                }
                              >
                                {item.value}
                              </ProductSizesOption>
                            ))
                          : attribute.items.map((item) => (
                              <ProductColorsOption
                                color={item.value}
                                selected={
                                  this.state.selectedAttributes[attribute.name] === item.value
                                }
                                onClick={() => this.selectAttribute(item.value, attribute.name)}
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
                    <AddToCartButton>Add to cart</AddToCartButton>
                    <ProductDescription
                      dangerouslySetInnerHTML={this.setHtml(product.description)}
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
