const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.send("Cosmic Art!")
})

PORT = 1322;
app.listen(PORT, () => {
    console.log(`This server is running on port ${PORT}`)
})