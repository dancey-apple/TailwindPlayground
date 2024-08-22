import React from 'react';

const NotificationModal = ({ closeModal }) => {
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50" onClick={handleBackgroundClick}>
            <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-lg font-bold mb-4">Notification</h2>
                <p>This is a notification message!</p>
                <div className="mt-4 flex justify-end">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default NotificationModal;
