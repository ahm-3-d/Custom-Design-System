import React from "react";
import PropTypes from 'prop-types';

import {
    MenuContainer,
    LogoContainer,
    MenuItemStyles,
    MenuItemContainer,
    MenuIcon
} from "./Menu.styles";

const MenuItem = ({ icon, children, ...rest }) => (
    <MenuItemStyles>
        <MenuItemContainer {...rest}>
            {icon && <MenuIcon icon={icon} className='menu_icons' />}
            <span style={{ textAlign: 'center' }}>
                {children}
            </span>
        </MenuItemContainer>
    </MenuItemStyles>
);

function Menu({ Logo, children, ...rest }) {
    return (
        <MenuContainer {...rest}>
            <div>
                &nbsp;
            </div>
            {Logo ? (<LogoContainer> <Logo /> </LogoContainer>) : null}


            <div style={{ marginTop: 20 }}>
                {children}
            </div>
        </MenuContainer>
    )
};

MenuItem.propTypes = {
    icon: PropTypes.string,
    children: PropTypes.string
}

Menu.propTypes = {
};

export default Menu;
export {
    MenuItem,
    MenuIcon
}

