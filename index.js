const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const http = require("http");
const socketIo = require("socket.io");
const Database = require("@replit/database");
const db = new Database();

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "https://sudokuguessr.yxli666.repl.co",
    methods: ["GET", "POST"],
  },
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS, PUT"
    );
    next();
});

io.on("connection", (socket) => {
  socket.on("createRoom", (room) => {
    let currentRooms = [];
    
    db.get("rooms").then((rooms) => {
      if (rooms) {
        currentRooms = rooms;
      }
    });

    const newRoom = {
      id: room.id,
      started: false,
      host: socket.id,
      difficulty: room.difficulty,
      rounds: room.numRounds,
      roundTimeLimit: room.roundTimeLimit,
      category: room.theme,
      players: [{
        name: room.name,
        id: socket.id,
        points: 0,
        // False = not ready
        // True = ready
        status: false,
      }]
    };
    
    currentRooms.push(newRoom);
    
    db.set("rooms", currentRooms).then(() => {
      console.log(newRoom);
    });
    
    socket.join(room.id);
  });
  
  socket.on("joinRoom", async (roomId, player) => {
    console.log("Trying to join room...")
    
    let currentRooms = await db.get("rooms");

    if (!currentRooms) return socket.to(socket.id).emit("failedToJoin");
        
    for (room of currentRooms) {
      if (room.id === Number.parseInt(roomId)) {
        room.players.push(player);
        return db.set("rooms", currentRooms).then(() => {
          console.log("Joined Room")
          socket.join(roomId);
          socket.to(roomId).emit("playerChange", room.players);
        });
      }
    }
    
    console.log("Failed to join")
    socket.to(socket.id).emit("failToJoin");
  })
});

// check new room id with the database
app.post("/checkroom", (req, res) => {
  db.get("rooms").then((rooms) => {
    for (room of rooms) {
      if(room.id == req.id){
        res.json({isAvailable: false});
      }
    }
  })
  res.json({isAvailable: true})
})

// app.get("/sudoku", (req, res) => {
//   let lengthOfSudokus = db.list.then(keys => {
//     return keys.length
//   })
//   let randomSudokuNumber = Math.floor(Math.random() * lengthOfSudokus;
//   console.log(randomSudokuNumber)
//   if(req.difficulty == "easy"){
//     db.get(`easySudokus`, randomSudokuNumber)
//   }
//   else if(req.difficulty == "medium"){
    
//   }
//   else{
    
//   }
// })

server.listen(PORT, () => {
  console.log(`App running on server: ${PORT}`);
});


// const generateSudokus = require("./sudokuHandler/generateSudokus.js");
// const { getEasySudokus, getMediumSudokus, getHardSudokus } = require("./dbUtil.js");
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