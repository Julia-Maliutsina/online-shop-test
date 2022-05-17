import React from 'react';

import { removeFromCart, changeAttributes, changeQuantity } from 'store/actions';

import CartItem from './CartItem';

class CartItemContainer extends React.Component {
  state = {
    quantity: this.props.initialQuantity,
    activeImage: 0,
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
    const newActiveImage = JSON.parse(JSON.stringify(this.state.activeImage)) + change;
    this.setState({ activeImage: newActiveImage });
  };

  render() {
    return (
      <CartItem
        productId={this.props.productId}
        quantity={this.state.quantity}
        activeImage={this.state.activeImage}
        selectedAttributes={this.state.selectedAttributes}
        increaseQuantity={this.increaseQuantity}
        decreaseQuantity={this.decreaseQuantity}
        selectAttribute={this.selectAttribute}
        changeActiveImage={this.changeActiveImage}
        currency={this.props.currency}
        currencySymbol={this.props.currencySymbol}
      />
    );
  }
}

export default CartItemContainer;
