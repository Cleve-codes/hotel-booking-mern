import express, {Request, Response} from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes"


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => {
  console.log("Connected to MongoDB")
}).catch((err) => {
  console.log(err)
})

const app = express();
app.use(express.json())
app.use(cors())

app.use("/api/user", userRoutes)

app.listen(7000, () => {
  console.log("Server  started on localhost:7000")
})