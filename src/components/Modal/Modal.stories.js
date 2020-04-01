import React, { useState } from "react";

import Modal from './Modal';
import Button from '../Button/Button';

export default {
    component : Modal,
    title : 'Modal'
};

export const Default = () => {
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true)
    };

    function closeModal() {
        setIsOpen(false)
    };

    return (
        <div>
            <Button onClick={openModal}>Open Modal!</Button>
            <Modal
                title="Basic Modal"
                closeModal={closeModal}
                modalisOpen={isOpen}
            >
                Hello! I am a simple modal!
            </Modal>
        </div>
    );
}