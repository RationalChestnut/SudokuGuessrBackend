const axios = require("axios").default;

// generate a single sudoku (with solution) of a certain difficulty
const generateSudoku = async (difficulty) => {
  try {
    const res = await axios.get(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`);
    const sudoku = res.data.board;
    const solution = await solveSudoku(sudoku);

    return { puzzle: sudoku, solution };
  } catch(err) {
    console.log(err);
  }
}

const solveSudoku = async (sudoku) => {
  try{
    const res = await axios.post("https://sugoku.herokuapp.com/solve", {
      method: 'POST',
      body: encodeParams(sudoku),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    
    return res.data.solution;
  } catch(err){
    console.log(err);
  }
}

// the only function thats exported
// generates an array of sudokus of a certain difficulty
const generateSudokus = async (difficulty, num) => {
  const sudokus = []
  
  for (let i = 0; i < num; i++) {
    sudokus.push(await generateSudoku(difficulty));
  }

  return sudokus;
}

// helper functions copied from the github
const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '');

const encodeParams = (params) => 
  Object.keys(params)
  .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
  .join('&');

// URL: https://github.com/bertoort/sugoku
module.exports = generateSudokus;