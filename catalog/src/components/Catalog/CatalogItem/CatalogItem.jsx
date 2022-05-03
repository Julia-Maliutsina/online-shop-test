import React from 'react';

import { ItemWrapper, ItemImage, ItemName, ItemPrice } from './styled';

class CatalogItem extends React.Component {
  render() {
    return (
      <ItemWrapper>
        <ItemImage imageUrl={this.props.image} />
        <ItemName>{this.props.name}</ItemName>
        <ItemPrice>{this.props.price}</ItemPrice>
      </ItemWrapper>
    );
  }
}

export default CatalogItem;
