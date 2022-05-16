import React from 'react';
import { Query } from '@apollo/react-components';

import PRODUCT_QUERY from 'api/getProduct';
import { findPriceInSelectedCurrency } from 'utils/findPrice';
import { arrowForwardIcon, arrowBackIcon, plusIcon, minusIcon } from 'images';
import { addToCart, removeFromCart, changeAttributes, changeQuantity } from 'store/actions';

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
      addToCart(productToAdd);
      return;
    }
    const newQuantity = this.state.quantity + 1;
    this.setState({ quantity: newQuantity });
    changeQuantity(this.props.productId, this.state.selectedAttributes, newQuantity);
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      const newQuantity = this.state.quantity - 1;
      this.setState({ quantity: newQuantity });
      changeQuantity(this.props.productId, this.state.selectedAttributes, newQuantity);
    }
    if (this.state.quantity === 1) {
      this.setState({ quantity: 0 });
      removeFromCart(this.props.productId, this.state.selectedAttributes);
    }
  };

  selectAttribute = (newAttribute, attributeName) => {
    let newSelectedAttributes = JSON.parse(JSON.stringify(this.state.selectedAttributes));
    newSelectedAttributes[attributeName] = newAttribute;
    changeAttributes(this.props.productId, this.state.selectedAttributes, newSelectedAttributes);
    this.setState({ selectedAttributes: newSelectedAttributes });
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
                  <img alt="more" src={plusIcon} />
                </ChangeQuantity>
                <QuantityNumber>{this.state.quantity}</QuantityNumber>
                <ChangeQuantity onClick={() => this.decreaseQuantity()}>
                  <img alt="less" src={minusIcon} />
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

export default CartItem;
