// src/lib/whatsapp.js

const createWhatsAppLink = (service) => {
  const message =
    `Hello Acharya Ji,  I am looking for ${service}. Please guide me.`;

  return `https://wa.me/919811893069?text=${encodeURIComponent(message)}`;
};

export default createWhatsAppLink;