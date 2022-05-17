import React from 'react';

import { addToCart } from 'store/actions';

import CatalogItem from './CatalogItem';

class CatalogItemContainer extends React.Component {
  addProductToCart = (id, prices, event) => {
    event.preventDefault();
    const productToAdd = {
      id: id,
      prices: prices,
      selectedAttributes: {},
    };
    addToCart(productToAdd);
  };

  render() {
    return (
      <CatalogItem
        product={this.props.product}
        category={this.props.category}
        currency={this.props.currency}
        currencySymbol={this.props.currencySymbol}
        addProductToCart={this.addProductToCart}
      />
    );
  }
}

export default CatalogItemContainer;
