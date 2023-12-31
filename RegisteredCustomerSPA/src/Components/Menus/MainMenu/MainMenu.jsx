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
import { updatePageState } from "../../../Redux/Slices/PageStateSlice";

const MainMenu = ({ pageState: pageState }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, loginWithPopup, logout, getAccessTokenSilently } =
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
          <NavLink
            tag={Link}
            to="/"
            onClick={() => dispatch(updatePageState({ openPage: "home" }))}
          >
            Home
          </NavLink>
        </NavItem>
        {!isAuthenticated && (
          <NavItem>
            <NavButton onClick={() => HandleLogin()}>Login</NavButton>
          </NavItem>
        )}
        {isAuthenticated && (
          <>
            <NavItem selected={pageState.openPage === "viewProducts"}>
              <NavLink
                tag={Link}
                to="/viewProducts"
                onClick={() =>
                  dispatch(updatePageState({ openPage: "viewProducts" }))
                }
              >
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/accountManagement"
                selected={pageState.openPage === "accountManagement"}
                onClick={() =>
                  dispatch(
                    updatePageState({
                      openPage: "accountManagement",
                    })
                  )
                }
              >
                Account Management
              </NavLink>
            </NavItem>
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
