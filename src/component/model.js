import React from 'react';

const Modal = ({ isOpen, onClose, certification }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-black/40 md:p-4 text-white text-center rounded shadow-lg w-3/4 md:w-2/5 m-auto">
                <h2 className="hidden md:block text-2xl font-bold mb-2">{certification.title}</h2>
                <img src={certification.img} />
                <p className='capitalize'>{certification.details}</p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
