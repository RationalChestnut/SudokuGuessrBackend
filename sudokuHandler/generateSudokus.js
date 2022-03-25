const sudoku = require("sudoku");

const generateSudokus = (num) => {
  const easyPuzzles = [];
  const mediumPuzzles = [];
  const hardPuzzles = [];
  
  for (let i = 0; i < num; i++) {
    let puzzle = sudoku.makepuzzle();
    let solvedPuzzle = sudoku.solvepuzzle(puzzle);
    let difficulty = sudoku.ratepuzzle(puzzle, 4) // Rates it out of 10
    
    // puts puzzles in 1-9 format
    for (let i = 0; i < puzzle.length; i++) {
      if (puzzle[i]) {
        puzzle[i] += 1;
        given++;
      } else {
        puzzle[i] = 0;
      }
      
      solvedPuzzle[i] += 1;
    }
    
    // Creates an object to store all the data
    let completePuzzle = {
      puzzle: puzzle,
      solvedPuzzle: solvedPuzzle,
      difficulty: difficulty
    }
    
    if (difficulty >= 0 && difficulty <= 0.1) {
      easyPuzzles.push(completePuzzle);
    } else if (difficulty > 0.1 && difficulty < 2) {
      // Medium
      mediumPuzzles.push(completePuzzle);
    } else {
      // Hard
      hardPuzzles.push(completePuzzle);
    }
  }
  
  return {
    easy: easyPuzzles,
    medium: mediumPuzzles,
    hard: hardPuzzles,
  };
}

module.exports = generateSudokus;