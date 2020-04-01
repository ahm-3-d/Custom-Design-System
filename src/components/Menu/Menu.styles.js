import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuContainer = styled.div`
    height: 100vh;
    background : ${props => props.theme.menuBackground};
    width : 100%;
`;

const LogoContainer = styled.div`
    left: calc(-50vw + 50%);
    right: calc(-50vw + 50%);
    margin : 0px auto 0px auto;
    height : 50px;
    width: 50px;
    border-radius : 15px;
    background : ${props => props.theme.backgroundColour};
    text-align : center;
`;

const MenuItemStyles = styled.div`
    .active {
        background: ${props => props.theme.secondaryColour};
        border-radius: 0px 15px 15px 0px;
    }

    .active > .menu_icons {
        color: ${props => props.theme.activeIconColour};
    }
`
const MenuItemContainer = styled.div`
    text-decoration : none;
    color : ${props => props.theme.textColour};
    font-size : 13px;
    width : 78%;
    margin-top: 5px;
    padding: 10px;
    margin-left : 1em;
`;

const MenuIcon = styled(FontAwesomeIcon)`
    font-size: 16px;
    margin-left: 28px;
    margin-right: 10px;
    color: ${props => props.theme.iconColour};
`;

export {
    MenuContainer,
    LogoContainer,
    MenuItemStyles,
    MenuItemContainer,
    MenuIcon
};