let blacklistedTokens = []; // Array to store blacklisted tokens

const add = (token) => {
    // Add the token to the blacklist
    blacklistedTokens.push(token);
};

const isBlacklisted = (token) => {
    // Check if the token is blacklisted
    return blacklistedTokens.includes(token);
};

module.exports = { add, isBlacklisted };
