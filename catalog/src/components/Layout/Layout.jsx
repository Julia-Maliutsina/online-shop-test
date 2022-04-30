import React from 'react';

import Menu from './Menu';
import { PageWrapper, Title } from './styled';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Menu pagename={this.props.pagename} />
        <PageWrapper>
          <Title>{this.props.pagename}</Title>
          {this.props.children}
        </PageWrapper>
      </div>
    );
  }
}

export default Layout;
