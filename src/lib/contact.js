// src/lib/contact.js

const createCallLink = (
  phone = "+919811893069"
) => {
  return `tel:${phone}`;
};
export default createCallLink;