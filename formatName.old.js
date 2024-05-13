// Please write a utility function that we can use to both
// reverse someone's last name and prepend their preferred
// salutation.
// Make sure first letter after reversal is capitalized.

/**
 * Planning...
 * 1) INPUT: 2 (name, prefix)
 *      name
 *         Data-Type: string
 *         Where?     Function Parameter
 *      prefix
 *         Data-Type: string
 *         Where?     Function Parameter
 * 2) OUTPUT: 
 *     Data-Type: string
 *     Where?     Function Return
 * 3) PROCESSING:
 *     * Create new array
 *     * Put the prefix in the first index
 *     * Reverse the name
 *          * -> .reverse() ?
 *              `name` is a `string`
 *              I want to reverse a string in JavaScript... How!?
 *          * NEW)
 *            1. Convert `name` into an arr using ...(spread)
 *            2. Run .reverse()
 *            3. Run .join() to glue it back together
 *     * Capitalize first letter of name
 *         * Uncapitalize all letters in name
 *         * Capitalize first letter after reversal
 *               -> use charAt to isolate first character
 *               -> run toUpperCase() on this char
 *               -> slice first character off of name
 *               -> glue upper first char to rest of (sliced) name
 *     * Put the name in the second index
 *     * Join the array together as string
 *     * return the new string
 */

/**
 * Reverses last name and prefixes salutation
 * 
 * @param {string} name - Last name (to be reversed.)
 * @param {string} prefix - Person's preferred salutation.
 * @return {string} - Prefix and reversed last name.
 */
const formatName = (name, prefix) => { // INPUT
    let formattedName = '';

    // PROCESSING:
    // Create new array
    const arr = [];
    // Put the prefix in the first index
    arr.push(prefix);
    // Reverse the name
    // 1. Convert `name` into an arr using ...(spread)
    let reversedName = [...name];
    // 2. Run .reverse()
    reversedName.reverse();
    // 3. Run .join() to glue it back together
    reversedName = reversedName.join('');
    // Capitalize first letter of name
        // Uncapitalize all letters in name
    reversedName = reversedName.toLowerCase();
        // Capitalize first letter after reversal
    reversedName =
            // use charAt to isolate first character
            // run toUpperCase() on this char
        reversedName.charAt(0).toUpperCase()
        +
            // slice first character off of name
            // glue upper first char to rest of (sliced) name
        reversedName.slice(1); // Skip 1 char!
    // Put the name in the second index
    arr.push(reversedName);
    // Join the array together as string
    formattedName = arr.join('. ');
    // return the new string
    return formattedName; // OUTPUT
};

const result = formatName('Quinn', 'Mx');
console.log(
    "formatName('Quinn', 'Mx') =",
    result,
    'EXPECTED:', 'Mx. Nniuq'
); // Mx. Nniuq
console.log(
    "formatName('Bean', 'Mr') =",
    formatName('Bean', 'Mr'),
    'EXPECTED:', 'Mr. Naeb'
); // Mr. Naeb
console.log(
    "formatName('Clause', 'Mrs') =",
    formatName('Clause', 'Mrs'),
    'EXPECTED:', 'Mrs. Esualc'
); // Mrs. Esualc
