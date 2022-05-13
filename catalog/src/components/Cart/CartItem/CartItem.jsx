import React from 'react';
import { Query } from '@apollo/react-components';
import { connect } from 'react-redux';

import PRODUCT_QUERY from 'api/getProduct';
import { findPriceInSelectedCurrency } from 'utils/findPrice';
import { arrowForwardIcon, arrowBackIcon, plusIcon, minusIcon } from 'images';

import {
  CartItemWrapper,
  ProductName,
  ProductBrand,
  ProductOptions,
  ProductOptionsTitle,
  ProductTextOption,
  ProductSwatchOption,
  ProductPrice,
  ProductInfo,
  ProductImage,
  Arrow,
  Quantity,
  ChangeQuantity,
  QuantityNumber,
} from './styled';

class CartItem extends React.Component {
  state = {
    quantity: this.props.initialQuantity,
    activeImage: 0,
    selectedAttributes: this.props.selectedAttributes,
  };

  increaseQuantity = () => {
    if (this.state.quantity === 0) {
      const productToAdd = {
        id: this.props.productId,
        prices: this.props.prices,
        selectedAttributes: this.state.selectedAttributes,
        quantity: 1,
      };
      this.props.addProductToCart(productToAdd);
    }
    const newQuantity = this.state.quantity + 1;
    this.setState({ quantity: newQuantity });
  };

  decreaseQuantity = () => {
    if (this.state.quantity >= 1) {
      const newQuantity = this.state.quantity - 1;
      this.setState({ quantity: newQuantity });
    }
    if (this.state.quantity === 1) {
      this.props.removeProduct(this.props.productId);
    }
  };

  selectAttribute = (attributeToSelect, attributeName) => {
    const newSelectedAttributes = this.state.selectedAttributes;
    if (!newSelectedAttributes.length) {
      newSelectedAttributes[attributeName] = attributeToSelect;
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

  changeActiveImage = (change, maxLength) => {
    if (this.state.activeImage === maxLength && change === 1) {
      const newActiveImage = 0;
      this.setState({ activeImage: newActiveImage });
      return;
    }
    if (this.state.activeImage === 0 && change === -1) {
      const newActiveImage = maxLength;
      this.setState({ activeImage: newActiveImage });
      return;
    }
    const newActiveImage = this.state.activeImage + change;
    this.setState({ activeImage: newActiveImage });
  };

  render() {
    return (
      <Query
        query={PRODUCT_QUERY}
        variables={{
          productId: this.props.productId,
        }}
      >
        {({ loading, data }) => {
          if (loading) return 'Loading...';
          const { product } = data;
          return (
            <CartItemWrapper>
              <ProductInfo>
                <ProductBrand>{product.brand}</ProductBrand>
                <ProductName>{product.name}</ProductName>
                <ProductOptions>
                  <ProductPrice>
                    {this.props.currencySymbol}
                    {findPriceInSelectedCurrency(this.props.currency, product.prices)}
                  </ProductPrice>
                </ProductOptions>
                {product.attributes.map((attribute) => (
                  <ProductOptions key={attribute.id}>
                    <ProductOptionsTitle>{attribute.name}</ProductOptionsTitle>
                    {attribute.type === 'text'
                      ? attribute.items.map((item) => (
                          <ProductTextOption
                            key={item.id}
                            onClick={() => this.selectAttribute(item.value, attribute.name)}
                            selected={this.state.selectedAttributes[attribute.name] === item.value}
                          >
                            {item.value}
                          </ProductTextOption>
                        ))
                      : attribute.items.map((item) => (
                          <ProductSwatchOption
                            color={item.value}
                            selected={this.state.selectedAttributes[attribute.name] === item.value}
                            onClick={() => this.selectAttribute(item.value, attribute.name)}
                          />
                        ))}
                  </ProductOptions>
                ))}
              </ProductInfo>
              <Quantity>
                <ChangeQuantity onClick={() => this.increaseQuantity()}>
                  <img src={plusIcon} />
                </ChangeQuantity>
                <QuantityNumber>{this.state.quantity}</QuantityNumber>
                <ChangeQuantity onClick={() => this.decreaseQuantity()}>
                  <img src={minusIcon} />
                </ChangeQuantity>
              </Quantity>
              <ProductImage imageUrl={product.gallery[this.state.activeImage]}>
                <Arrow
                  src={arrowBackIcon}
                  onClick={() => this.changeActiveImage(-1, product.gallery.length - 1)}
                />
                <Arrow
                  src={arrowForwardIcon}
                  onClick={() => this.changeActiveImage(1, product.gallery.length - 1)}
                />
              </ProductImage>
            </CartItemWrapper>
          );
        }}
      </Query>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (productIdToRemove) =>
      dispatch({ type: 'removeProductFromCart', payload: { productIdToRemove } }),
    addProductToCart: (productToAdd) =>
      dispatch({ type: 'addProductToCart', payload: { productToAdd } }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
