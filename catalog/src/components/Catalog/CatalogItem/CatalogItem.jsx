import React from 'react';

import { findPriceInSelectedCurrency } from 'utils/findPrice';
import { addToCartIcon } from 'images';

import {
  LinkToProduct,
  ItemWrapper,
  ItemImage,
  ItemName,
  ItemPrice,
  AddToCart,
  OutOfStock,
} from './styled';

class CatalogItem extends React.Component {
  render() {
    return (
      <LinkToProduct to={`/${this.props.category}/:${this.props.product.id}`}>
        <ItemWrapper
          onMouseOut={() => this.props.hideCartIcon()}
          onMouseOver={() => this.props.showCartIcon()}
        >
          <ItemImage imageUrl={this.props.product.gallery[0]}>
            {this.props.product.inStock && this.props.isCartIconShown && (
              <AddToCart
                src={addToCartIcon}
                alt="add to cart"
                onClick={(event) => {
                  this.props.addProductToCart(
                    this.props.product.id,
                    this.props.product.attributes,
                    this.props.product.prices,
                    event,
                  );
                }}
              />
            )}
            {!this.props.product.inStock && <OutOfStock>Out of stock</OutOfStock>}
          </ItemImage>
          <ItemName>
            {this.props.product.brand} {this.props.product.name}
          </ItemName>
          <ItemPrice>
            {this.props.currencySymbol}
            {findPriceInSelectedCurrency(this.props.currency, this.props.product.prices)}
          </ItemPrice>
        </ItemWrapper>
      </LinkToProduct>
    );
  }
}

export default CatalogItem;
