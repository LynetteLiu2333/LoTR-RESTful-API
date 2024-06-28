const fs = require("fs");
const csv = require("csv-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Character = require("./models/Character.js");

dotenv.config();

const characters = [];

// Read the CSV file and populate the characters array
fs.createReadStream("./LOTR_data/lotr_characters.csv")
  .pipe(csv())
  .on("data", (row) => {
    characters.push(row);
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
    insertCharactersIntoMongoDB(characters);
  });

// Connect to MongoDB and insert characters
const insertCharactersIntoMongoDB = async (characters) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected...");
    
    await Character.insertMany(characters);
    console.log("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data:", err.message);
  } finally {
    mongoose.connection.close();
  }
};
