import styled from "styled-components";

export const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: left;
    padding: 1em;
`;

export const StyledListItem = styled.div`
    margin-top: 1em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-self: flex-start;
    padding-bottom: 1em;
    font-size: 14px;
`;

export const StyledListItemTitle = styled.div`
    color: ${props => props.theme.primaryColour};
    margin-bottom: 0.5em;
`;

export const StyledListItemDescription = styled.div`
    color : ${props => props.theme.textColourDim};
`;

export const Left = styled.span`
    color : ${props => props.theme.textColour};
    display : flex;
`;

export const Right = styled.span`
    color : ${props => props.theme.primaryColour};
`
;

export const NoImage = styled.div`
    border-radius : 35%;
    background : ${props => props.theme.textColourDim};
    width: 35px;
    height : 35px;
`




