import React from 'react';

import { addToCart } from 'store/actions';

import ProductWithParams from './ProductPage';

class ProductPageContainer extends React.Component {
  state = {
    selectedImage: 0,
    selectedAttributes: {},
  };

  selectImage = (imageIndex) => {
    this.setState({ selectedImage: imageIndex });
  };

  selectAttribute = (attributeToSelect, attributeName) => {
    const newSelectedAttributes = JSON.parse(JSON.stringify(this.state.selectedAttributes));
    newSelectedAttributes[attributeName] = attributeToSelect;
    this.setState({ selectedAttributes: newSelectedAttributes });
  };

  addProductToCart = (id, prices) => {
    const productToAdd = {
      id: id,
      prices: prices,
      selectedAttributes: this.state.selectedAttributes,
    };
    addToCart(productToAdd);
  };

  render() {
    return (
      <ProductWithParams
        selectedImage={this.state.selectedImage}
        selectedAttributes={this.state.selectedAttributes}
        selectImage={this.selectImage}
        selectAttribute={this.selectAttribute}
        addProductToCart={this.addProductToCart}
        selectedCurrency={this.props.selectedCurrency}
        selectedCurrencySymbol={this.props.selectedCurrencySymbol}
      />
    );
  }
}

export default ProductPageContainer;
