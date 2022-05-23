import React from 'react';

import { removeFromCart, changeQuantity } from 'store/actions';

import CartItem from './CartItem';

class CartItemContainer extends React.Component {
  state = {
    activeImage: 0,
  };

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
    const newActiveImage = JSON.parse(JSON.stringify(this.state.activeImage)) + change;
    this.setState({ activeImage: newActiveImage });
  };

  render() {
    return (
      <CartItem
        productId={this.props.productId}
        quantity={this.props.quantity}
        activeImage={this.state.activeImage}
        selectedAttributes={this.props.selectedAttributes}
        increaseQuantity={this.increaseQuantity}
        decreaseQuantity={this.decreaseQuantity}
        changeActiveImage={this.changeActiveImage}
        currency={this.props.currency}
        currencySymbol={this.props.currencySymbol}
      />
    );
  }
}

export default CartItemContainer;
