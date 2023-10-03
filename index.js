const express = require("express");
const { request } = require("http");
const path = require("path");

const app = express();

const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const fitnessRoutes = require("./routes/fitness");


const PORT = 3000; // port number

app.set("view engine","ejs");
app.use(express.urlencoded({extended : false}));


app.use("/libs",express.static('node_modules')); //eğer bir sorun olursa node_modules path ini __dirname olarak ver
app.use("/public",express.static('public'));





app.use(adminRoutes);
app.use(userRoutes);
app.use(fitnessRoutes);

app.use("/wrongPage",(req, res, next) => { // redirecting when entering a unkown page
     
     res.render("users/wrongPage");
});

app.use((req, res, next) => { // redirecting when entering a unkown page
     
    res.redirect("/wrongPage");
});





app.listen(PORT, function(){
    console.log("Web server listening on",PORT);
})

