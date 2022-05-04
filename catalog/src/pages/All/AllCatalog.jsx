import Layout from 'components/Layout';
import React from 'react';

import { PAGE } from 'constants/pages';

class AllCatalog extends React.Component {
  render() {
    return <Layout pagename={PAGE.all}>Kids Catalog should be here</Layout>;
  }
}

export default AllCatalog;
