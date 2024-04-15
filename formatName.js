// Please write a utility function that we can use to both
// reverse someone's last name and prepend their preferred
// salutation.
// Make sure first letter after reversal is capitalized.

// formatName('Quinn', 'Mx'); // Mx. NniuQ

// 1. INPUT
    // 2 {string}s
    // {string} lastName
    // {string} salutation
// 2. OUTPUT
    // {string} - Salutation + reversed last name (concatenated)
// 3. PROCESSING
    // Start by reversing the last name...
    // Capitalize first letter after reversal...
    // Add period to end of salutation...
    // Concatenate salutation+reversed lastName
    // Return this concatenated result

/**
 * Format name (salutation and reversed name)
 * 
 * @param {string} lastName
 * @param {string} salutation
 * @return {string} - Salutation and reversed last name
 */
const formatName = (lastName, salutation) => { // 1. INPUT

    // 3. PROCESSING
    // Lower case the lastName
    let reversedLastName = lastName.toLowerCase();
    // Start by reversing the last name...
    reversedLastName = reversedLastName
        .split('')
        .reverse()
        .join('');
    // Capitalize first letter after reversal...
    reversedLastName =
        reversedLastName[0].toUpperCase()
        +
        reversedLastName.slice(1);
    // Add period to end of salutation...
    const updatedSalutation = `${salutation}.`;
    // Concatenate salutation+reversed lastName
    const output = updatedSalutation + ' ' + reversedLastName;
    // Return this concatenated result
    return String(output); // 2. OUTPUT
};

console.log(
    "formatName('Quinn', 'Mx') =",
    formatName('Quinn', 'Mx')
); // Mx. Nniuq
console.log(
    "formatName('Bean', 'Mr') =",
    formatName('Bean', 'Mr')
); // Mr. Naeb
console.log(
    "formatName('Clause', 'Mrs') =",
    formatName('Clause', 'Mrs')
); // Mrs. Esualc

