//  firstLetterCapitalize helps to capitalize the first letter of any word or sentence

const firstLetterCapitalize = (word) => {
  if (!word || word.length === 0) return null;
  const splitWord = word.split("");
  return splitWord[0].toUpperCase() + splitWord.slice(1).join("");
};
