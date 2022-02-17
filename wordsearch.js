
function wordSearch(letters, word) {

  for (let j = 0 ; j < letters[0].length ; j++) {
    let verticalWord = '';
    let horizontalWord = '';
    for (let i = 0 ; i < letters.length ; i++) {
      verticalWord += letters[i][j];
      horizontalWord += letters[j][i];
    }
    if ((verticalWord.includes(word)) ||
      (verticalWord.split('').reverse().join('').includes(word)))
    {
      return true;
    }
    if ((horizontalWord.includes(word)) ||
      (horizontalWord.split('').reverse().join('').includes(word)))
    {
      return true;
    }
  }
   return false;
}

module.exports = wordSearch