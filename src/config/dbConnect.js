import mongoose from "mongoose";

import * as dotenv from 'dotenv'
dotenv.config()

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ac-ghntg2b-shard-00-00.ucnptj3.mongodb.net:27017,ac-ghntg2b-shard-00-01.ucnptj3.mongodb.net:27017,ac-ghntg2b-shard-00-02.ucnptj3.mongodb.net:27017/?ssl=true&replicaSet=atlas-1eiewe-shard-0&authSource=admin&retryWrites=true&w=majority`); 

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@alura.ucnptj3.mongodb.net/alura-node`); //?retryWrites=true&w=majority

let db = mongoose.connection;

export default db;