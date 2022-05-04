import React from 'react';
import { Link } from 'react-router-dom';

import { ItemWrapper, ItemImage, ItemName, ItemPrice } from './styled';

class CatalogItem extends React.Component {
  render() {
    return (
      <Link to={`/${this.props.section}/item`}>
        <ItemWrapper>
          <ItemImage imageUrl={this.props.item.images[0]} />
          <ItemName>{this.props.item.name}</ItemName>
          <ItemPrice>{this.props.item.price}</ItemPrice>
        </ItemWrapper>
      </Link>
    );
  }
}

export default CatalogItem;
