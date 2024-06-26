import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
} from "@coreui/react";

import { AppSidebarNav } from "./AppSidebarNav";

// sidebar nav config
import navigation from "../_nav";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand
          to="/home"
          style={{ textDecoration: "none", cursor: "pointer", color: "" }}
        >
          <h1>관리자TT</h1>

          {/* <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} /> */}
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: "set", sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
