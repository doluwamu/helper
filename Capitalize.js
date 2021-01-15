//  firstLetterCapitalize helps to capitalize the first letter of any word or sentence
//  capitalize helps to capitalize the first letter of every given word in a sentence

const firstLetterCapitalize = (word) => {
  if (!word || word.length === 0) return null;
  const splitWord = word.split("");
  return splitWord[0].toUpperCase() + splitWord.slice(1).join("");
};

const capitalize = (words) => {
  if (!words || words.length === 0) return null;

  const word = words.split(" ");

  return word.map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
};
