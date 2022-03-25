const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;

const sudokuRouter = require("./routes/sudoku.js");

const generateSudokus = require("./sudokuHandler/generateSudoku2.js");
const { getEasySudokus, getMediumSudokus, getHardSudokus } = require("./dbUtil.js");

// generateSudokus("easy", 333).then((sudokus) => {
//   setEasySudokus(sudokus);
// });

// generateSudokus("medium", 333).then((sudokus) => {
//   setMediumSudokus(sudokus);
// });

// generateSudokus("hard", 333).then((sudokus) => {
//   setHardSudokus(sudokus);
// });

// db.get("easySudokus").then((value) => {
//   console.log(value[0]);
// })

getEasySudokus().then((sudokus) => {console.log(sudokus)});

app.use("/generateSudoku", sudokuRouter);

app.listen(PORT, () => {
  console.log(`App running on server: ${PORT}`);
});