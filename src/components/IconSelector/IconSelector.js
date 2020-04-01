import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

const Container = styled.div`
    display : flex;
    color : ${props => props.theme.textColour};
`;

const StyledOption = styled.div`
    opacity : ${props => props.selected ? 1 : 0.5}; 
    margin-right : 1em;

    :hover {
        opacity : 0.8;
        cursor : pointer;
    }
`

export const Option = ({ name, children, onClick, selected, ...rest}) => (
    <StyledOption key={name} onClick={() => onClick(name)} selected={selected.indexOf(name) > -1} {...rest} >
        {children}
    </StyledOption>
);

Option.propTypes = {
    name : PropTypes.string.isRequired
};

function IconSelector({ children, onChange, ...rest }) {
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        onChange(selected);
    }, [selected]);

    const onOptionClick = (name) => {
        if (selected.length === 0) {
            setSelected([name]);
            return
        }

        if (selected.indexOf(name) > -1) {
            setSelected(selected.filter(option => option !== name));
            return;
        };

        setSelected(selected.concat([ name ]));
    };

    return (
        <Container {...rest}>
            {children.map(child => React.cloneElement(child, { onClick : onOptionClick, selected}))}
        </Container>
    )
};

IconSelector.propTypes = {
    children : PropTypes.string,
    onChange : PropTypes.func
}

export default IconSelector;