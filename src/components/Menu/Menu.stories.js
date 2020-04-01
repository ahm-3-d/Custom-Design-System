import React, { Fragment } from 'react';
import Menu, { MenuItem } from './Menu';

export default {
    component: Menu,
    title: 'Menu'
};

const Logo = () => (
    <img
        style={{ width: 40, height: 40, marginTop: 6 }}
        src="https://cdn.discordapp.com/attachments/549203895071670272/690195444739211282/neuronbasictrans.png" 
        alt="logo" />
);

const MenuItems = ({ active }) => (
    <Fragment>
        <MenuItem icon="sitemap" className={active && 'active'}>
            <span> Dashboard </span>
        </MenuItem>
        <MenuItem icon="chart-line">
            <span> Analytics </span>
        </MenuItem>
        <MenuItem icon="wallet">
            <span> Tasks <span style={{ opacity: 0.5 }}>(0 Total)</span></span>
        </MenuItem>
    </Fragment>
)

export const Default = () => <div style={{ width : 220 }}><Menu Logo={Logo}> <MenuItems /> </Menu></div>
export const NoLogo = () => <div style={{ width : 220 }}><Menu> <MenuItems /> </Menu></div>
export const ActiveClass = () => <div style={{ width : 220 }}><Menu><MenuItems active={true}/></Menu></div>
