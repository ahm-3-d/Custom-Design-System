import React from "react";
import styled from "styled-components";
import ReactModal from 'react-modal';

const StyledModal = styled(ReactModal)`

`;

const Title = styled.div`
    border-bottom : 1px solid ${props => props.theme.textColourDim};
    text-align : left;
    padding : 10px;
    font-size : 16px;
`;


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        textAlign : 'center',
        height : 200,
        width: 400,
        padding : 0,
        border : 'none'
    }
};

function Modal({ title, children, modalisOpen, closeModal, ...rest }) {
    return (
        <ReactModal
            isOpen={modalisOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            {title && <Title>{title}</Title>}
            {children}
        </ReactModal>
    )
};

export default Modal;