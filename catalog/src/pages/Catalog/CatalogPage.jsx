import Layout from 'components/Layout';
import React from 'react';

import { Catalog } from 'components/Catalog';

class TechCatalog extends React.Component {
  render() {
    return (
      <Layout pagename={this.props.pagename}>
        <Catalog category={this.props.pagename} />
      </Layout>
    );
  }
}

export default TechCatalog;
