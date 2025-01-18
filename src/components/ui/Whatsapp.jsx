import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9235923865" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 p-3 bg-green-500 rounded-full shadow-lg"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </a>
  );
};

export default WhatsAppButton;