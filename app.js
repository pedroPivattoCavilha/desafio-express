const express = require("express")
const ProductRoutes = require("./routes/ProductsRoutes")
const app = express()

app.set("view engine", "ejs")

app.use(express.json())

app.use("/produtos", ProductRoutes)

app.get("/", (req, res) => {
    res.send("Hi Pedro")
})

app.listen(3030, ()=>{
    console.log("Servidor rodando")
})