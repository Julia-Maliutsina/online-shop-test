import React from 'react';

import Menu from './Menu';
import { PageWrapper, Title } from './styled';

class Layout extends React.Component {
  state = {
    isCurrencyOpened: false,
  };

  openCurrency = () => {
    this.setState({ isCurrencyOpened: !this.state.isCurrencyOpened });
  };

  selectCurrency = (currencyToSelect, currencySymbolToSelect) => {
    this.props.selectCurrency(currencyToSelect, currencySymbolToSelect);
    this.setState({
      isCurrencyOpened: false,
    });
  };

  render() {
    return (
      <div>
        <Menu
          pagename={this.props.pagename}
          isCurrencyOpened={this.state.isCurrencyOpened}
          selectedCurrency={this.props.selectedCurrency}
          openCurrency={this.openCurrency}
          selectCurrency={this.selectCurrency}
          selectedCurrencySymbol={this.props.selectedCurrencySymbol}
        />
        <PageWrapper>
          {!this.props.disableTitle && <Title>{this.props.pagename}</Title>}
          {this.props.children}
        </PageWrapper>
      </div>
    );
  }
}

export default Layout;
