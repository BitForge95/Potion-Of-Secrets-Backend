import dotenv from "dotenv"
import {app} from './app.js'
import dbConnect from "./lib/dbConnect.js"
dotenv.config({
    path: './.env'
})

dbConnect()
.then(app.listen(process.env.PORT || "" ,async() => {
    console.log(`Listening on Port ${process.env.PORT}`)
}))
.catch(error => {
    console.error(" Failed Listen Port :", error)
} )


