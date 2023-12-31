import React, { useEffect } from "react";
import {
  LayoutContainer,
  TopRow,
  MainContentWrapper,
  Content,
} from "./Layout.style";
import MainMenu from "../Menus/MainMenu/MainMenu";
import { useSelector, useDispatch } from "react-redux";
import { themeSwitched } from "../../Redux/Slices/ThemeSlice";
import { updatePageState } from "../../Redux/Slices/PageStateSlice";
import { GlobalStyles } from "../Theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Loading from "../Loader/Loader";

const Layout = (props) => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.themes);
  const pageState = useSelector((state) => state.pageState);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      dispatch(themeSwitched(localTheme));
    }
    const localPageState = localStorage.getItem("pageState");
    if (localPageState) {
      dispatch(updatePageState(JSON.parse(localPageState)));
    }
  }, [dispatch]);

  return pageState ? (
    <LayoutContainer>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <TopRow>
          <MainMenu pageState={pageState} />
        </TopRow>
        <MainContentWrapper>
          <Content>{props.children}</Content>
        </MainContentWrapper>
      </ThemeProvider>
    </LayoutContainer>
  ) : (
    <Loading />
  );
};

export default Layout;
