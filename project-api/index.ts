import express from "express";
import cors from "cors";
import invertRouter from "./routers/invert";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/', invertRouter)


const run = async () => {

    app.listen(port, () => {
        console.log(`Server started on http://localhost:${port}`);
    })
}
run().catch(console.error);
