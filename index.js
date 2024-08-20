const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



const titleCased = () => {
  return tutorials.map((line) => {
    const ezz = line.split(" ");
    const capital = ezz.map(
      (e) => e.charAt(0).toUpperCase() + e.slice(1)
    );
    const response = capital.join(" ");
    return response;
  });
};



// anther awy to resole passing

// const titleCased = () => {
//   // Use the original array to avoid unnecessary modifications
//   return tutorials.map((line) => {
//     // Leverage String.prototype.replace() for efficient in-place capitalization
//     return line.replace(/\b\w/g, (match) => match.toUpperCase());
//   });
// };

