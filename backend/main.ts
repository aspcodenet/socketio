import express, { Express, Request, Response } from "express";
import cors from "cors";
import { gameRouter, initGames } from "./routes/game.routes";

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(cors());

initGames();

app.use(express.json());

app.use("/api/game", gameRouter);


app.listen(port, async () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
}); 