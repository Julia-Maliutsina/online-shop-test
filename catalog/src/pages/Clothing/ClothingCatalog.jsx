import Layout from 'components/Layout';
import React from 'react';

import { PAGE } from 'constants/pages';

class ClothingCatalog extends React.Component {
  render() {
    return <Layout pagename={PAGE.clothing}>Men Catalog should be here</Layout>;
  }
}

export default ClothingCatalog;
