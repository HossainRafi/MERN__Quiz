import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

const app = express();

/** app middlewares */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

/** appliation port */
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server connected to http://localhost:${port}`);
});
