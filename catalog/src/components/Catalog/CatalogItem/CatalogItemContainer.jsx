import React from 'react';

import { addToCart } from 'store/actions';

import CatalogItem from './CatalogItem';

class CatalogItemContainer extends React.Component {
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
