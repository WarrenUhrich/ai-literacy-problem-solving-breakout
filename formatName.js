// Please write a utility function that we can use to both
// reverse someone's last name and prepend their preferred
// salutation.
// Should we assume they'll always be strings? YES!

// formatName('Quinn', 'Mx'); // Mx. NniuQ

// 1) INPUT
// * comes from... PARAMETERS!
// * name {string}
// * salutation {string}
// 2) OUTPUT
// * where does it go... RETURN!
// * "salutation and reversed name"
// * data-type: string
// 3) PROCESSING
// Steps to solve this problem...
// * Split name
// * Reverse name
// * Join array (reversed name)
// * Concatenate
// * Return

/**
 * Prepend salutation and reverse name.
 * 
 * @param {string} name - Name to be reversed.
 * @param {string} salutation - Salutation to be prepended.
 * @return {string} - Salutation and reversed name.
 */
const formatName = (name, salutation) => { // INPUT
  if (!name || !salutation) {
    throw new Error('Both name and salutation are required.');
  }
  let reverseName = name
    .toLowerCase()
    .split('')
    .reverse(); // Array
  reverseName[0] = reverseName[0].toUpperCase();
  return `${salutation}. ${reverseName.join('')}`; 
};

/**
 * Prepend salutation and reverse name.
 * 
 * @param {string} name - Name to be reversed.
 * @param {string} salutation - Salutation to be prepended.
 * @return {string} - Salutation and reversed name.
 */
// const formatName = (name, salutation) => { // INPUT
//   let result;

//   // PROCESSING...
//   // * Split name
//   let nameArr = name.toLowerCase().split('');
//   // * Reverse name
//   nameArr.reverse();
//   nameArr[0] = nameArr[0].toUpperCase();
//   // * Join array (reversed name)
//   let reversedName = nameArr.join('');
//   // reversedName = reversedName.toLowerCase();
//   // Strings are immutable, this doesn't work :(
//   // reversedName[0] = reversedName[0].toUpperCase();
//   // * ~~Concatenate (salutation + name)~~
//   // * Interpolate (salutation and name)
//   result = `${salutation}. ${reversedName}`;
//   // * Return
//   return String(result); // OUTPUT
// };


console.log(
  "formatName('Quinn', 'Mx') =",
  formatName('Quinn', 'Mx'),
  'Should be: Mx. Nniuq'
); // Mx. Nniuq
console.log(
  "formatName('Bean', 'Mr') =",
  formatName('Bean', 'Mr'),
  'Should be: Mr. Naeb'
); // Mr. Naeb
console.log(
  "formatName('Clause', 'Mrs') =",
  formatName('Clause', 'Mrs'),
  'Should be: Mrs. Esualc'
); // Mrs. Esualc
