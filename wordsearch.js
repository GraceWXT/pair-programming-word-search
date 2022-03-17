//letters is 2D array; ls is row
//word is word to find
// horizontalJoin is the 1D array after horizontally joined
//l is each line in one string

const wordSearch = (letters, word) => {
  let returnValue = false;
  if (letters.length && letters[0].length) {
    const horizontalJoin = letters.map(row => row.join(''));
    for (let row of horizontalJoin) {
      if (row.includes(word)) {
        returnValue = true;
      }
    }
    const vertJoin = [];
    let vertWord = [];
    for (let i = 0; i < letters[0].length; i++) {
      for (let row of letters) {
        vertWord += row[i];
      }
      vertJoin.push(vertWord);
    }
    for (let vertWord of vertJoin) {
      if (vertWord.includes(word)) {
        returnValue = true;
      }
    }
  }
  return returnValue;
};
module.exports = wordSearch;
