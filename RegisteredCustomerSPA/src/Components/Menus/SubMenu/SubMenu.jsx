import React from "react";
import { SubNavBar, SubNavLink, SubNavItem } from "./SubMenu.style";
import { useSelector } from "react-redux";

const SubMenu = () => {
  const openPage = useSelector((state) => state.pageState);

  return (
    <SubNavBar>
      {openPage.options &&
        openPage.options.map((item) => (
          <SubNavItem
            key={item.key}
            selected={openPage.openSubPage === item.key}
          >
            <SubNavLink to={item.url}>{item.label}</SubNavLink>
          </SubNavItem>
        ))}
    </SubNavBar>
  );
};

export default SubMenu;
