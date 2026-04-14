const crypto = require("crypto");

const transactionId = (length=12) => {
    const bytes = new Uint32Array(length);

    crypto.getRandomValues(bytes);

    const numbers = Array.from(bytes, byte => byte % 10).join('');

    return `TXN-${numbers}`;
}


module.exports = {
    transactionId
}