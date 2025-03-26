require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { connectDatabase, getConnection } = require('./database');
const sandwiches1 = require('./routes');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/ping', (req, res) => {
    res.send('Pong!');
});

connectDatabase();

app.get('/', (req, res) => {
    console.log('Connected');
    res.json({ message: getConnection() });
});

// Use user routes
app.use('/api', sandwiches1);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


// app.post("/sandwiches", async (req, res) => {
//   try {
//       const newSandwich = new Sandwich(req.body);  // Create a new Sandwich document
//       await newSandwich.save();  // Save it in MongoDB
//       res.status(201).json(newSandwich);
//   } catch (error) {
//       res.status(500).json({ message: "Error adding sandwich", error });
//   }
// });

// app.get("/sandwiches", async (req, res) => {
//     try {
//       const sandwiches = await Sandwich.find();
//       if (!sandwiches.length) return res.status(404).json({ message: "No sandwiches found" });
//       res.json(sandwiches);
//     } catch (error) {
//       console.error("Error fetching sandwiches:", error);  // Log the actual error
//       res.status(500).json({ message: "Error fetching sandwiches" });
//     }
//   });
  
