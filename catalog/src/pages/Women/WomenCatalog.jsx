import Layout from 'components/Layout';
import React from 'react';

import { PAGE } from 'constants/pages';
import { Catalog } from 'components/Catalog';

class WomenCatalog extends React.Component {
  render() {
    return (
      <Layout pagename={PAGE.women}>
        <Catalog />
      </Layout>
    );
  }
}

export default WomenCatalog;
