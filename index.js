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

function titleCased() {
  // map goes through each element in the array
  let words = tutorials.map(tutorial => {
    //splits the string into an *array with individual words
    let individualWords = tutorial.split(" ");

    //map goes through each word in the array individualWords and uppercases the first letter
    let capWords = individualWords.map(words => words.charAt(0).toUpperCase() + words.slice(1));

    // takes the array *capWords and joins them back into a string
    return capWords.join(" ");
}); 
  return words; 
}