import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { CBadge, CNavLink, CSidebarNav } from "@coreui/react";

export const AppSidebarNav = ({ items }) => {
  const navLink = (name, icon, badge, indent = false) => {
    return (
      <>
        {icon
          ? icon
          : indent && (
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
            )}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    );
  };

  const navItem = (item, index, indent = false) => {
    const { component, name, badge, icon, ...rest } = item;
    const Component = component;
    return (
      <Component as="div" key={index}>
        {rest.to || rest.href ? (
          <CNavLink
            {...(rest.to && { as: NavLink })}
            {...rest}
            onClick={() => {
              startTransition(() => {
                // 페이지 이동 코드
                /**
                 
이 에러는 React의 Concurrent Mode에서 발생하는 것으로 보입니다. Concurrent Mode는 여러 업데이트를 동시에 수행할 수 있게 해주는 새로운 모드입니다. 이 모드에서는 컴포넌트가 렌더링 중에 suspend 될 수 있습니다. 이 경우, React는 해당 컴포넌트를 로딩 인디케이터로 대체합니다.

이 에러를 해결하려면, startTransition 함수를 사용하여 업데이트를 비동기적으로 수행해야 합니다. startTransition 함수는 React에서 제공하는 함수로, 이 함수를 사용하여 업데이트를 수행하면 해당 업데이트가 비동기적으로 수행되고, 이로 인해 UI가 블로킹되지 않습니다.

다음은 startTransition 함수를 사용하여 페이지 이동을 수행하는 방법을 보여줍니다:

코드
이 코드는 CNavLink 컴포넌트의 onClick 이벤트 핸들러에서 startTransition 함수를 사용하여 페이지 이동을 수행합니다. 이렇게 하면 페이지 이동이 비동기적으로 수행되므로, 페이지 이동 중에 다른 업데이트가 발생하더라도 UI가 블로킹되지 않습니다.
                 * 
                 * 
                 */
              });
            }}
          >
            {navLink(name, icon, badge, indent)}
          </CNavLink>
        ) : (
          navLink(name, icon, badge, indent)
        )}
      </Component>
    );
  };

  const navGroup = (item, index) => {
    const { component, name, icon, items, to, ...rest } = item;
    const Component = component;
    return (
      <Component
        compact
        as="div"
        key={index}
        toggler={navLink(name, icon)}
        {...rest}
      >
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index, true)
        )}
      </Component>
    );
  };

  return (
    <CSidebarNav as={SimpleBar}>
      {items &&
        items.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </CSidebarNav>
  );
};

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
