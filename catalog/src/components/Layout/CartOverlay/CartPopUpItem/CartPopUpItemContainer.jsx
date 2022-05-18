import React from 'react';

import { removeFromCart, changeQuantity } from 'store/actions';

import CartPopUpItem from './CartPopUpItem';

class CartPopUpItemContainer extends React.Component {
  state = {
    quantity: this.props.initialQuantity,
    selectedAttributes: this.props.selectedAttributes,
  };

  increaseQuantity = () => {
    const newQuantity = JSON.parse(JSON.stringify(this.state.quantity)) + 1;
    this.setState({ quantity: newQuantity });
    changeQuantity(this.props.productId, this.state.selectedAttributes, newQuantity);
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      const newQuantity = JSON.parse(JSON.stringify(this.state.quantity)) - 1;
      changeQuantity(this.props.productId, this.state.selectedAttributes, newQuantity);
      this.setState({ quantity: newQuantity });
    }
    if (this.state.quantity === 1) {
      removeFromCart(this.props.productId, this.state.selectedAttributes);
    }
  };

  render() {
    return (
      <CartPopUpItem
        productId={this.props.productId}
        quantity={this.state.quantity}
        selectedAttributes={this.state.selectedAttributes}
        increaseQuantity={this.increaseQuantity}
        decreaseQuantity={this.decreaseQuantity}
        currency={this.props.currency}
        currencySymbol={this.props.currencySymbol}
      />
    );
  }
}

export default CartPopUpItemContainer;
