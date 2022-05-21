import React from 'react';

import { removeFromCart, changeQuantity } from 'store/actions';

import CartPopUpItem from './CartPopUpItem';

class CartPopUpItemContainer extends React.Component {
  increaseQuantity = () => {
    const newQuantity = JSON.parse(JSON.stringify(this.props.quantity)) + 1;
    changeQuantity(this.props.productId, this.props.selectedAttributes, newQuantity);
  };

  decreaseQuantity = () => {
    if (this.props.quantity > 1) {
      const newQuantity = JSON.parse(JSON.stringify(this.props.quantity)) - 1;
      changeQuantity(this.props.productId, this.props.selectedAttributes, newQuantity);
    }
    if (this.props.quantity === 1) {
      removeFromCart(this.props.productId, this.props.selectedAttributes);
    }
  };

  render() {
    return (
      <CartPopUpItem
        productId={this.props.productId}
        quantity={this.props.quantity}
        selectedAttributes={this.props.selectedAttributes}
        increaseQuantity={this.increaseQuantity}
        decreaseQuantity={this.decreaseQuantity}
        currency={this.props.currency}
        currencySymbol={this.props.currencySymbol}
      />
    );
  }
}

export default CartPopUpItemContainer;
