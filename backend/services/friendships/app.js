import express from "express";
import fileUpload from "express-fileupload";
import amistadesRoutes from "./routes/amistades.routes.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import cors from 'cors';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// middlewares
app.use(cors())
app.use(express.json());
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "./upload",
    })
);

// routes
app.use(amistadesRoutes);
console.log(__dirname);
app.use(express.static(join(__dirname, "../client/build")));

export default app;
