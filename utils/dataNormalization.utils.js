const normalizePhoneNumber = (phone) => {
    if (!phone) return phone;
    
    let normalized = phone.trim();
    
    // Remove +234
    if (normalized.startsWith('+234')) {
        normalized = normalized.substring(4);
    }
    // Remove 234 (if entered without +)
    else if (normalized.startsWith('234') && normalized.length > 10) {
        normalized = normalized.substring(3);
    }
    // Remove leading 0
    else if (normalized.startsWith('0')) {
        normalized = normalized.substring(1);
    }
    
    return normalized;
};

// generate username from first and last name by generating the first and last name to be 4-7 strings length
const generateUsername = (firstName, lastName) => {
    const fName = firstName.toLowerCase().trim();
    const lName = lastName.toLowerCase().trim();
    const part1 = fName.slice(0, 4); 
    const part2 = lName.slice(0, 7 - part1.length);

    const baseUsername = `${part1}${part2}`;
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);

    return `${baseUsername}${randomSuffix}`;
};

module.exports = {
    normalizePhoneNumber,
    generateUsername
};
