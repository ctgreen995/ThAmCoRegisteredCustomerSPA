import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  NavBar,
  NavLink,
  NavButton,
  NavItem,
  NavMenu,
  LogoHolder,
} from "./MainMenu.style";
import { useDispatch, useSelector } from "react-redux";
import { NavbarBrand } from "reactstrap";
import { ThemeButton } from "../../Theme/ThemeButton.style";
import { themeSwitched } from "../../../Redux/Slices/ThemeSlice";
import { updatePageState } from "../../../Redux/Slices/pageStateSlice";
import { AccountMenuOptions } from "../MenuOptions/MenuOptions";

const MainMenu = ({ pageState: pageState }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loginWithPopup, loginWithRedirect, logout } =
    useAuth0();

  const currentTheme = useSelector((state) => state.themes);

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  const HandleLogin = () => {
    if (!isAuthenticated) {
      loginWithPopup();
    }
  };

  const HandleDarkClick = () => {
    dispatch(themeSwitched("light"));
    localStorage.setItem("theme", "light");
  };
  const HandleLightClick = () => {
    dispatch(themeSwitched("dark"));
    localStorage.setItem("theme", "dark");
  };
  const handlePageUpdate = (page) => {
    dispatch(updatePageState({ openPage: page }));
  };
  useEffect(() => {}, []);

  return (
    <NavBar color={currentTheme}>
      <LogoHolder>
        <NavbarBrand href="/">
          <h3>ThAmCo</h3>
        </NavbarBrand>
        <ThemeButton
          onClick={() => HandleDarkClick()}
          display={currentTheme.name === "light" ? "none" : "block"}
        >
          LIGHT MODE
        </ThemeButton>
        <ThemeButton
          onClick={() => HandleLightClick()}
          display={currentTheme.name === "dark" ? "none" : "block"}
        >
          DARK MODE
        </ThemeButton>
      </LogoHolder>
      <NavMenu>
        <NavItem selected={pageState.openPage === "home"}>
          <NavLink tag={Link} to="/" onClick={() => handlePageUpdate("home")}>
            Home
          </NavLink>
        </NavItem>
        <NavItem selected={pageState.openPage === "products"}>
          <NavLink
            tag={Link}
            to="/products"
            onClick={() => handlePageUpdate("products")}
          >
            Products
          </NavLink>
        </NavItem>
        {!isAuthenticated && (
          <>
            <NavItem>
              <NavLink
                tag={Link}
                to="/account"
                onClick={() =>
                  dispatch(
                    updatePageState({
                      openPage: "account",
                      options: AccountMenuOptions,
                    })
                  )
                }
              >
                Account
              </NavLink>
            </NavItem>
            <NavItem>
              <NavButton onClick={() => HandleLogin()}>Login</NavButton>
            </NavItem>
          </>
        )}
        {isAuthenticated && (
          <>
            <NavItem>
              <NavButton onClick={() => logoutWithRedirect()}>Logout</NavButton>
            </NavItem>
          </>
        )}
      </NavMenu>
    </NavBar>
  );
};
export default MainMenu;
