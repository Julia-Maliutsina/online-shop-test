import React from 'react';

import Menu from './Menu';
import { PageWrapper, Title } from './styled';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Menu
          pagename={this.props.pagename}
          isCurrencyOpened={this.props.isCurrencyOpened}
          selectedCurrency={this.props.selectedCurrency}
          toggleCurrency={this.props.toggleCurrency}
          selectCurrency={this.props.selectCurrency}
          selectedCurrencySymbol={this.props.selectedCurrencySymbol}
          toggleCart={this.props.toggleCart}
          isCartOpened={this.props.isCartOpened}
          closePopUps={this.props.closePopUps}
        />
        <PageWrapper>
          {!this.props.disableTitle && (
            <Title pagename={this.props.pagename}>{this.props.pagename}</Title>
          )}
          {this.props.children}
        </PageWrapper>
      </div>
    );
  }
}

export default Layout;
