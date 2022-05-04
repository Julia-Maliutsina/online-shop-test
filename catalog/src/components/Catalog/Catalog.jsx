import React from 'react';

import items from 'constants/itemsMocked';

import { CatalogItem } from './CatalogItem';
import { CatalogItemsGrid } from './styled';

class Catalog extends React.Component {
  render() {
    return (
      <CatalogItemsGrid>
        {items.map((item) => (
          <CatalogItem item={item} section={this.props.section} />
        ))}
      </CatalogItemsGrid>
    );
  }
}

export default Catalog;
