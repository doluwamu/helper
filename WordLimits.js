// The BreakWordFragment and BreakWordFull fragment helps to reduce the number of word you want to display

// The major difference between them is:
// The BreakWordFragment returns a word, or characters in the word once the limit has been reached,

// The BreakWordFragment will always return the word which closest to the limit but not greater,

// Example: sentence = "I love building websites with my friends"

// The result when you pass the sentence through the BreakWordFragment will be ("I love building w...")

// While the result when you pass the sentence through the BreakWordFragment will be ("I love building...")

// Note1: When using the functions, you need to pass in two parameters
// which are(word, limit{which should be a nubmer, and is optional as there is a default limit})

// Note2: The default 17

const BreakWordFragment = (word, limit = 17) => {
  if (!word || word.length === 0) return "";
  if (word.length > limit) {
    const wordArray = word.split("");
    const wordSliced = wordArray.slice(0, limit);
    const wordJoined = `${wordSliced.join("")}...`;
    // return the result
    return wordJoined;
  } else {
    return word;
  }
};

const BreakWordFull = (word, limit = 17) => {
  if (!word || word.length === 0) return "";
  const newWord = [];
  if (word.length > limit) {
    word.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newWord.push(cur);
      }
      return acc + cur.length;
    }, 0);

    //return the result
    return `${newWord.join(" ")}...`;
  }
  return word;
};
