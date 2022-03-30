const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3500;
const Database = require("@replit/database");
const db = new Database();
const countries = require("./countries.js")
const { clearDB, setEasySudokus, setMediumSudokus, setHardSudokus, getEasySudokus, getMediumSudokus, getHardSudokus } = require("./dbUtil.js");
const axios = require("axios");
const generateSudokus = require("./sudokuHandler/generateSudokus.js");
const animality = require("animality")
const animals = require("./animals.js");

app.use(express.json());
app.use(cors({origin: "https://sudokuguessr.yxli666.repl.co"}));

// db.get("easySudokus").then((value) => {
//   console.log(value[0]);
// })

app.post("/getSudoku", (req, res) => {
  let {difficulty} = req.body;

  
  db.get(`${difficulty}Sudokus`).then(sudokus => {
    const random = Math.floor(Math.random() * sudokus.length);
    return res.json({sudoku: sudokus[random]});
  }).catch(err => {
    console.log(err);
  });
})

app.get("/leaderboard", (req, res) => {
  db.get("users").then(users => {
    let cleanUsers = users.filter((user) => user.high !== null && user.high.category !== null && user.high.theme !== null && user.high.score > 0);
    
    let sortedUsers = cleanUsers.sort((a, b) => {
      if (a.high.score > b.high.score) {
        return -1;
      }
      
      if (b.high.score > a.high.score) {
        return 1;
      } 

      return 0;
    });

    res.status(200).json({leaderboard: sortedUsers.slice(0, 11)});
  });
})

app.post("/createUser", (req, res) => {  
  let listOfUsers = []
  db.get("users").then(users => {
    if (users) {
      listOfUsers = users;
      
      if(users.find((user) => user.username === req.body.username)) {
        return res.status(409).json({message: "Username already taken"});
      }
  
      listOfUsers.push({username: req.body.username, high: {score: 0}});
      db.set("users", listOfUsers).then(() => {
        res.status(200).json({message: "Created Successfully"})
      })
    } else {
      listOfUsers.push({username: req.body.username, high: {score: 0}});
      db.set("users", listOfUsers).then(() => {
        res.status(200).json({message: "Created Successfully"})
      })
    }
  })
})

app.post("/updateUser", (req, res) => {
  const {username, high} = req.body;
  let listOfUsers = [];
  
  db.get("users").then(users => {
    if (users) {
      listOfUsers = users;
      
      let foundUser = users.find((aaa) => aaa.username === username);

      if (foundUser) {
        if (foundUser.high.score < high.score) {
          foundUser.high = high;

          listOfUsers = listOfUsers.filter((user) => user.username !== foundUser.username);
          listOfUsers.push(foundUser);
          
          db.set("users", listOfUsers).then(() => {
            res.status(200).json({message: "Updated user"});
          })
        } else {
          res.status(200).json({message: "No new high"});
        }
      } else {
        res.status(404).json({message: "User not found"});
      }
    } 
  })
})

app.get("/countryflags", async (req, res) => {
  let country = countries[Math.floor(Math.random() * countries.length)];

  return res.status(200).json({image: {keyword: country.name, link: `https://countryflagsapi.com/png/${country.abbr}`}});
});


app.get(`/pokemon/:id`, async (req, res) => {
  const {id} = req.params;

  try {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let pokemon = JSON.parse(JSON.stringify(response.data));
    let pokemonName = pokemon.species.name;
    let pokemonImage = pokemon.sprites.versions["generation-i"].yellow.front_default;
    return res.status(200).json({image: {keyword: pokemonName, link: pokemonImage}})
  } catch(err) {
    console.log(err);
    res.status(404).send("Server Error");
  }
})

app.get("/animals", (req, res) => {
  let animalID = Math.floor(Math.random() * 15);
  let animalChosen = animals[animalID];
  try{
    animality.getAsync(animalChosen, "API_KEY").then(animalOutput => {
    let animalName = animalOutput.name;
    let animalImage = animalOutput.image;
    if(animalName == "redpanda"){
      animalName = "Red Panda";
    }
    return res.status(200).json({image: {keyword: animalName, link: animalImage}});
    })
  }
  catch(err){
    console.log("Error")
    return res.status(404).send("Server Error");
  }
})

app.post("/addscore",  async(req, res) => {
  let user = req.body.username;
  let score = req.body.score;
  let difficulty = req.body.difficulty;
  let theme = req.body.theme;
  try{
    db.get("scores").then(scores => {
    let scoreboard = scores;
      // Need to add rank somehow
    scoreboard.push({username: user, score: score, difficulty: difficulty, theme: theme})
    // Sort by score - Probably doesn't work
    scoreboard = scoreboard.score.sort()
    return res.status(500).send("Server Error");
  })
  } catch(e){
    console.log(e);
    return res.status(500).send("Server Error");
  }
  
});

app.listen(PORT, () => {
  console.log(`App running on server: ${PORT}`);
});

// generateSudokus("easy", 333).then((sudokus) => {
//   setEasySudokus(sudokus);
// });

// generateSudokus("medium", 333).then((sudokus) => {
//   setMediumSudokus(sudokus);
// });

// generateSudokus("hard", 333).then((sudokus) => {
//   setHardSudokus(sudokus);
// });