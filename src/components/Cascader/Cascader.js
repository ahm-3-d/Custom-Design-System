import React, { useState } from "react";
import styled from "styled-components";
import ReactCascader from 'rc-cascader';

import Input from '../Input/Input';

const CascaderContainer = styled.div`
    width : 250px;
    height : 150px;
    display : flex;
    justify-content : center;

    div:last-child {
        border : none;
    }
`
const CascaderSplitter = styled.div`
    height : 100%;
    background : ${props => props.theme.contentBackground};
    border-right : 1px solid ${props => props.theme.textColourDim};
`
const Item = styled.div`
    font-size : 11px;
    padding : 8px;
    border-bottom : 1px solid ${props => props.theme.textColourDim};
    background : ${props => props.selected && `red`};

    :hover {
        opacity : 0.5;
        cursor : pointer;
    }
`

function Cascader({ data, placeholder, ...rest}) {
    return (
        <ReactCascader options={data} {...rest}>
            <Input placeholder="Click me!" value="lol" onChange={() => console.log('Yo')} />
        </ReactCascader>
    )
};

export default Cascader;