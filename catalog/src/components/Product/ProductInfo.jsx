import React from 'react';
import { Interweave } from 'interweave';

import { findPriceInSelectedCurrency } from 'utils/findPrice';

import {
  ProductInfoWrapper,
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

class ProductInfo extends React.Component {
  render() {
    return (
      <ProductInfoWrapper>
        <ProductBrand>{this.props.product.brand}</ProductBrand>
        <ProductName>{this.props.product.name}</ProductName>
        {this.props.product.attributes.map((attribute, id) => (
          <ProductOptions key={attribute.id + id}>
            <ProductOptionsTitle>{attribute.name}</ProductOptionsTitle>
            {attribute.items.map((item) =>
              attribute.type === 'text' ? (
                <ProductTextOption
                  key={item.id}
                  onClick={() => this.props.selectAttribute(item.value, attribute.name)}
                  selected={this.props.selectedAttributes[attribute.name] === item.value}
                >
                  {item.value}
                </ProductTextOption>
              ) : (
                <ProductSwatchOption
                  key={item.id}
                  color={item.value}
                  selected={this.props.selectedAttributes[attribute.name] === item.value}
                  onClick={() => this.props.selectAttribute(item.value, attribute.name)}
                />
              ),
            )}
          </ProductOptions>
        ))}
        <ProductOptions>
          <ProductOptionsTitle>Price:</ProductOptionsTitle>
          <ProductPrice>
            {this.props.selectedCurrencySymbol}
            {findPriceInSelectedCurrency(this.props.selectedCurrency, this.props.product.prices)}
          </ProductPrice>
        </ProductOptions>
        {this.props.product.inStock && (
          <AddToCartButton
            disabled={
              this.props.product.attributes.length !==
              Object.keys(this.props.selectedAttributes).length
            }
            onClick={() =>
              this.props.addProductToCart(this.props.product.id, this.props.product.prices)
            }
          >
            Add to cart
          </AddToCartButton>
        )}
        <ProductDescription>
          <Interweave content={this.props.product.description.toString()} />
        </ProductDescription>
      </ProductInfoWrapper>
    );
  }
}

export default ProductInfo;
