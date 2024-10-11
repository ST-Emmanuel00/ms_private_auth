import express, { Application } from "express";
import cors from "cors";
import cookieparser from "cookie-parser";
import router from "./routes";
import { corsOptions } from "./config";
import { errorHandler } from "./middlewares";

const app: Application = express();

// Middlewares
app.use(express.json());

app.use(cors(corsOptions));
app.use(cookieparser());

// Routes
app.use("/api", router);

app.use(errorHandler);

export default app;
