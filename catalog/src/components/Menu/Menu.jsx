import {
  MenuWrapper,
  MenuCategories,
  MenuCategory,
  Logo,
  Actions,
  Currency,
  Cart,
  Arrow,
  CurrencyButton,
  CartButton,
} from './styled';
import { arrowIcon, cartIcon, currencyIcon, logo } from '../../images';

const Menu = () => (
  <MenuWrapper>
    <MenuCategories>
      <MenuCategory>Women</MenuCategory>
      <MenuCategory>Men</MenuCategory>
      <MenuCategory>Kids</MenuCategory>
    </MenuCategories>
    <Logo src={logo} />
    <Actions>
      <CurrencyButton>
        <Currency src={currencyIcon} />
        <Arrow src={arrowIcon} />
      </CurrencyButton>
      <CartButton>
        <Cart src={cartIcon} />
      </CartButton>
    </Actions>
  </MenuWrapper>
);

export default Menu;
