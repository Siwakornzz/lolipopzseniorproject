import express from "express";
import { config } from "dotenv";
config();
import mongoose from "mongoose";
import server from "./server";

const {
  PORT,
  DB_USER,
  DB_PASSWORD,
  DB_ENDPOINT,
  DB_Name,
  //   FRONTEND_URI,
  //   FACEBOOK_CALLBACK_ROUTE,
  //   GOOGLE_CALLBACK_ROUTE,
} = process.env;

const createServer = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_ENDPOINT}.mongodb.net/${DB_Name}?retryWrites=true&w=majority`,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );

    const app = express();
    server.applyMiddleware({ app });

    app.listen({ port: PORT }, () => {
      console.log(
        `🐋 listening at http://localhost:${PORT}${server.graphqlPath} 🐋`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

createServer()