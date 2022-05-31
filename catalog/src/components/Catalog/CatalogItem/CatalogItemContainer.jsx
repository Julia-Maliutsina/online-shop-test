import React from 'react';

import { addToCart } from 'store/actions';

import CatalogItem from './CatalogItem';

class CatalogItemContainer extends React.Component {
  state = {
    isCartIconShown: false,
  };

  addProductToCart = (id, attributes, prices, event) => {
    event.preventDefault();
    let firstAttributes = {};
    for (let a = 0; a < attributes.length; a++) {
      firstAttributes[attributes[a].name] = attributes[a].items[0].value;
    }
    const productToAdd = {
      id: id,
      prices: prices,
      selectedAttributes: firstAttributes,
    };
    addToCart(productToAdd);
  };

  hideCartIcon = () => {
    this.setState({ isCartIconShown: false });
  };

  showCartIcon = () => {
    this.setState({ isCartIconShown: true });
  };

  render() {
    return (
      <CatalogItem
        product={this.props.product}
        category={this.props.category}
        currency={this.props.currency}
        currencySymbol={this.props.currencySymbol}
        addProductToCart={this.addProductToCart}
        hideCartIcon={this.hideCartIcon}
        showCartIcon={this.showCartIcon}
        isCartIconShown={this.state.isCartIconShown}
      />
    );
  }
}

export default CatalogItemContainer;
