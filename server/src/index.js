const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const router = require("./routes/user")

app.use(express.static(path.join(__dirname, '/../../client/build')));

app.use("/api/v1/users", router);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/../../client/build/index.html'));
});



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


