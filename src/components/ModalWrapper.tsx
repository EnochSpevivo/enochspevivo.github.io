import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// this component exists to DRY up my usage of react-modal
const ModalWrapper = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="flex items-center justify-center fixed inset-0 bg-black/40"
            className={`animate__animated animate__fadeIn animate__faster relative max-w-[90vw] flex flex-col gap-y-4 h-auto rounded-lg bg-[#0D1321] p-[35px] text-white font-extralight h-fit md:max-w-[550px]`}
        >
            <>
                <button onClick={() => onRequestClose()}>
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="absolute top-4 right-6 text-[28px] transition-all cursor-pointer hover:text-[#00e6e6] md:text-[32px] md:top-3 md:right-6"
                    />
                </button>

                {children}
            </>
        </Modal>
    );
};

export default ModalWrapper;
