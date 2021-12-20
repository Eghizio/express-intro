const generateID = () => '_' + Math.random().toString(36).substring(2, 9);

const exists = (value) => !!value;

module.exports = {
    generateID,
    exists
};