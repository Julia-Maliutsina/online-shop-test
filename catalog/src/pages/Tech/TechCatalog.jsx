import Layout from 'components/Layout';
import React from 'react';

import { PAGE } from 'constants/pages';
import { Catalog } from 'components/Catalog';

class TechCatalog extends React.Component {
  render() {
    return (
      <Layout pagename={PAGE.tech}>
        <Catalog section={PAGE.tech} />
      </Layout>
    );
  }
}

export default TechCatalog;
