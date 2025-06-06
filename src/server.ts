import express from "express";
import routes from "./routes";
import cors from "cors";
import { connectToDatabase } from "./config/db";

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

connectToDatabase().then(async () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Access the application at http://localhost:${PORT}`);
  });
});
