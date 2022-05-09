import React from 'react';
import { Link } from 'react-router-dom';

import { findPriceInSelectedCurrency } from 'utils/findPrice';

import { ItemWrapper, ItemImage, ItemName, ItemPrice } from './styled';

class CatalogItem extends React.Component {
  render() {
    return (
      <Link to={`/${this.props.category}/:${this.props.product.id}`}>
        <ItemWrapper>
          <ItemImage imageUrl={this.props.product.gallery[0]} />
          <ItemName>
            {this.props.product.brand} {this.props.product.name}
          </ItemName>
          <ItemPrice>
            {this.props.currencySymbol}
            {findPriceInSelectedCurrency(this.props.currency, this.props.product.prices)}
          </ItemPrice>
        </ItemWrapper>
      </Link>
    );
  }
}

export default CatalogItem;
