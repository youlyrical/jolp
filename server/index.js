const express = require('express')
const path = require("path");
const mongoose = require('mongoose');
const app = express()
const port = 5000;
const config = require("./config/key.js");

//mongodb+srv://jhkim966:ZGbB8mdj54DBBa1g@cluster0.uq3hj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.use(express.static(path.join(__dirname, '../client/build')));
app.use("/image", express.static("./image"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/post", require("./Router/Post.js"));
app.listen(port, () => {
  mongoose
    .connect(config.mongoURI)
    .then(()=> {
      console.log(`Example app listening on port ${port}`);
      console.log(`Connecting MongoDB....`);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})