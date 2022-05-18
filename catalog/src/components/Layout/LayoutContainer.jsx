import React from 'react';

import Layout from './Layout';

class LayoutContainer extends React.Component {
  state = {
    isCurrencyOpened: false,
    isCartOpened: false,
  };

  toggleCurrency = () => {
    if (!this.state.isCurrencyOpened && this.state.isCartOpened) {
      this.setState({ isCurrencyOpened: true, isCartOpened: false });
    } else {
      this.setState({ isCurrencyOpened: !this.state.isCurrencyOpened });
    }
  };

  toggleCart = () => {
    if (!this.state.isCartOpened && this.state.isCurrencyOpened) {
      this.setState({ isCartOpened: true, isCurrencyOpened: false });
    } else {
      this.setState({ isCartOpened: !this.state.isCartOpened });
    }
  };

  closePopUps = () => {
    this.setState({ isCurrencyOpened: false, isCartOpened: false });
  };

  selectCurrency = (currencyToSelect, currencySymbolToSelect) => {
    this.props.selectCurrency(currencyToSelect, currencySymbolToSelect);
    this.setState({
      isCurrencyOpened: false,
    });
  };

  render() {
    return (
      <Layout
        pagename={this.props.pagename}
        isCurrencyOpened={this.state.isCurrencyOpened}
        selectedCurrency={this.props.selectedCurrency}
        toggleCurrency={this.toggleCurrency}
        selectCurrency={this.selectCurrency}
        selectedCurrencySymbol={this.props.selectedCurrencySymbol}
        toggleCart={this.toggleCart}
        isCartOpened={this.state.isCartOpened}
        closePopUps={this.closePopUps}
        disableTitle={this.props.disableTitle}
        children={this.props.children}
      />
    );
  }
}

export default LayoutContainer;
