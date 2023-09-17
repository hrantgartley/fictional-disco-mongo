const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.get("/", (_req, res) => {
    res.send("This is my root route")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
