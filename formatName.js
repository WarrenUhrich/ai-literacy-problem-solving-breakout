/**
 * Reverses last name and prefixes salutation
 * 
 * @param {string} name - Last name (to be reversed.)
 * @param {string} prefix - Person's preferred salutation.
 * @return {string} - Prefix and reversed last name.
 */
const formatName = (name, prefix) => {
    let formattedName = '';
    const arr = [];
    arr.push(prefix);
    let reversedName = [...name];
    reversedName.reverse();
    reversedName = reversedName.join('');
    reversedName = reversedName.toLowerCase();
    reversedName =
        // Uppercase first letter
        reversedName.charAt(0).toUpperCase()
        +
        reversedName.slice(1); // Rest of name (lowercase)
    arr.push(reversedName);
    formattedName = arr.join('. ');
    return formattedName;
};

module.exports = formatName;
