// index.js
const express = require('express');
const hbs = require('hbs')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3002;
const  ip = "192.168.1.2"
const adminRoute =require("./routes/admin.route")
const userRoute =require("./routes/user.route")


app.set('view engine', '.hbs'); // Set the view engine

app.use(express.static('public'));
app.use('/',userRoute)
app.use('/admin',adminRoute)



app.listen(PORT, () => {
  console.log(`Server is running on http://${ip}:${PORT}`);
});
