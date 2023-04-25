import { Fragment, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as AppLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import CartIcon from "../../components/cart-icon/CartIcon";
import { CartContext } from "../../contexts/cart.context";
import { signoutUser } from "../../utils/firebase.util";
import { NavigationContainer, LogoContainer, NavLinks, NavLinksContainer } from "./Nav.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await signoutUser();
    navigate("/")
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <AppLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLinks to="/shop">SHOP</NavLinks>
          {currentUser ? (
            <NavLinks onClick={logoutHandler}>
              SIGN OUT
            </NavLinks>
          ) : (
            <NavLinks to="/auth">SIGN IN</NavLinks>
          )}
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
