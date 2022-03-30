const Database = require("@replit/database");
const db = new Database();

const clearDB = () => {
  // Clear the easy puzzle category
  // db.delete("easySudokus").then(() => console.log("Cleared easy puzzles"));

  // Clear the medium puzzle category
  // db.delete("mediumSudokus").then(() => console.log("Cleared medium puzzles"));

  // Clear the hard puzzle category
  // db.delete("hardSudokus").then(() => console.log("Cleared hard puzzles"));
  
  db.delete("users").then(() => console.log("Cleared usernames"));
}

const setEasySudokus = (sudokus) => {
  db.set("easySudokus", sudokus).then(() => {
    console.log("Added easy puzzles.");
  });
}

const getEasySudokus = async () => {
  const easySudokus = await db.get("easySudokus");
  
  return easySudokus;
}

const setMediumSudokus = (sudokus) => {
  db.set("mediumSudokus", sudokus).then(() => {
    console.log("Added medium puzzles.");
  });
}

const getMediumSudokus = async () => {
  const mediumSudokus = await db.get("mediumSudokus");
  
  return mediumSudokus;
}

const setHardSudokus = (sudokus) => {
  db.set("hardSudokus", sudokus).then(() => {
    console.log("Added hard puzzles.");
  });
}

const getHardSudokus = async () => {
  const hardSudokus = await db.get("hardSudokus");
  
  return hardSudokus;
}

module.exports = { clearDB, setEasySudokus, setMediumSudokus, setHardSudokus, getEasySudokus, getHardSudokus, getMediumSudokus };