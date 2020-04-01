import styled from 'styled-components';

const Container = styled.div`
    display: block;
    overflow: auto;
    width : 100%;
`
const TableContainer = styled.table`
    width : 95%;
    border-collapse : separate;
    border-spacing : 0 1em;
    margin-left : 20px;
`;
const TableBody = styled.tbody`
    border-spacing : 0 1em;
    text-align : center;
    overflow-y: auto;
    overflow-x: hidden;
`;
const TableHead = styled.thead`
    color : ${props => props.theme.textColour};
    font-size : 14px;
    overflow-y: auto;
    overflow-x: hidden;
`;
const TableRow = styled.tr`
    background : ${props => props.selected ? props.theme.primaryColour : props.theme.backgroundColour};
    color : ${props => props.selected && props.theme.textColourInverse};
    font-size : 13px;
    border-spacing : 0em 1em;

    ${props => props.selectable && `
        :hover {
            cursor : pointer;
        };
    `}
`
const TableHeadData = styled.th`
    margin: 0;
    padding: 0.5rem;
    font-weight: normal;
    font-style: normal;
`;
const TableData = styled.td`
    padding: 0.5rem;
    color : ${props => props.theme.textColourDim};
    border : 0px solid;
    font-weight : 400;
    padding : 15px;

    :first-child {
        border-top-left-radius: 10px; 
        border-bottom-left-radius: 10px;
    }

    :last-child {
        border-bottom-right-radius: 10px; 
        border-top-right-radius: 10px; 
    }
`;

const LoadingContainer = styled.div`
    position : absolute;
    left: 50%;
    transform: translate(-50%);
`;



export {
    Container,
    TableContainer,
    TableBody,
    TableHead,
    TableRow,
    TableHeadData,
    TableData,
    LoadingContainer
};

