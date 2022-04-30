import Layout from 'components/Layout';
import React from 'react';

import { PAGE } from 'constants/pages';

class KidsCatalog extends React.Component {
  render() {
    return <Layout pagename={PAGE.kids}>Kids Catalog should be here</Layout>;
  }
}

export default KidsCatalog;
