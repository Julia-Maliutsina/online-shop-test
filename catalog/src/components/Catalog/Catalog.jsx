import React from 'react';

import items from 'constants/itemsMocked';

import { CatalogItem } from './CatalogItem';
import { CatalogItemsGrid } from './styled';

class Catalog extends React.Component {
  render() {
    return (
      <CatalogItemsGrid>
        {items.map((item) => (
          <CatalogItem image={item.image} name={item.name} price={item.price} />
        ))}
      </CatalogItemsGrid>
    );
  }
}

export default Catalog;
