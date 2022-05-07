import React from 'react';
import { Link } from 'react-router-dom';

import { ItemWrapper, ItemImage, ItemName, ItemPrice } from './styled';

class CatalogItem extends React.Component {
  render() {
    return (
      <Link to={`/${this.props.category}/item`}>
        <ItemWrapper>
          <ItemImage imageUrl={this.props.product.gallery[0]} />
          <ItemName>
            {this.props.product.brand} {this.props.product.name}
          </ItemName>
          <ItemPrice>
            {this.props.product.prices[0].amount}
            {this.props.product.prices[0].currency.symbol}
          </ItemPrice>
        </ItemWrapper>
      </Link>
    );
  }
}

export default CatalogItem;
