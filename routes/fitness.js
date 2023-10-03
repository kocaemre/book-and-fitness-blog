const express = require("express");

const router = express.Router();
const path = require("path");
const db = require("../data/db");
const PASSWORD = "hevagi"; //password for edit and delete pages

router.get("/fitness/1",async (req,res) => {
    
    try{
        const [data,dbb] = await db.execute("select * from fitness where day=1")
            
            
            console.log(data);
            
            
            res.render("fitness/fitness",{data : data,
            site_info: `Workout day ${data[0].day}` }); 

            console.log("fitness day 1 opened");
        
        
    }

    catch(err){

        console.log(err);
    }

})

router.get("/fitness/2",async (req,res) => {
    
    try{
        const [data,dbb] = await db.execute("select * from fitness where day = 2")
            
            
            console.log(data);
            
            
            res.render("fitness/fitness",{data : data,
            site_info: `Workout day ${data[0].day}`});


            console.log("fitness day 2 opened");
        
        
    }

    catch(err){

        console.log(err);
    }

})

router.get("/fitness/edit/:blogid",async function(req,res){

    try{

        const blogid = req.params.blogid;

        const [data,dbb] = await db.execute("select * from fitness where id=?",[blogid]);
  
        if (data.length === 0) {

            return res.redirect("/wrongPage")
            

            
        }


        console.log("fitness update page opened");
        res.render("fitness/edit",{data : data[0]}); 
    }

    catch(err){

        
        console.log(err);
    }

})

router.post("/fitness/edit/:blogid",async  function(req,res) {
    console.log("post request recieved");
    
    const blogid = req.params.blogid
    const title = req.body.title;
    const description = req.body.description;
    const day = req.body.day;
    password = req.body.password;

    try{

        if(PASSWORD !== password){
            return res.redirect("/wrongPage")
        }

        await db.execute("UPDATE fitness SET title=?, description=?, day=? WHERE id=?",[title,description,day,blogid]);
        console.log("Edit completed...Redirecting");
        res.redirect("/fitness/exercise-tables");

    }

    catch(err){
        console.log(err);
    };
})

router.get("/fitness/delete/:blogid", async function(req,res){

    console.log("delete page opened");

    

    try {
        
        const blogid = req.params.blogid;

        const [data,dbb] = await db.execute("select * from fitness where id=?",[blogid]);
  
        if (data.length === 0) {

            return res.redirect("/wrongPage")
            

            
        }


        
        res.render("fitness/delete",{data : data[0]});


    } catch (err) {
        console.log(err);
    }
})

router.post("/fitness/delete/:blogid", async function(req,res){

    const blogid = req.params.blogid;
    const password = req.body.password;

    try{

        if (PASSWORD !== password){
            
            return res.redirect("/wrongPage")
        }

        await db.execute("DELETE FROM fitness WHERE id=?",[blogid]);
        
        res.redirect("/fitness/exercise-tables");
        

    }
    catch(err){
        console.log(err);
    }
    
})

router.get("/fitness/create-exercise", (req,res) => {

    console.log("create-exercise page opened");
    res.render("fitness/create-exercise");
})

router.post("/fitness/create-exercise",async  function(req,res) {
    console.log("post request recieved");
    
    const title = req.body.title;
    const description = req.body.description;
    const day = req.body.day;

    try{

        await db.execute("INSERT INTO `blogapp`.`fitness` (`title`, `description`,`day`) VALUES (?,?,?)",[title,description,day]);
        console.log("create completed...Redirecting");
        res.redirect("/fitness/exercise-tables");

    }

    catch(err){
        console.log(err);
    };
})

router.get("/fitness/exercise-tables",async function(req,res){
    
    
    try{


        
        const [data,dbb] = await db.execute("select * from fitness");
  

        if (data.length === 0) {

            return res.redirect("/wrongPage")
            

            
        }
            
        res.render("fitness/exercise-tables",{data : data}); 

        console.log("exercise table page opened");

    }

    catch(err){

        console.log(err);
    }
    
})

router.get("/fitness",async (req,res) => {
    
    try{
        const [data,dbb] = await db.execute("select * from fitness")
            
            
            console.log(data);
            
            
            res.render("fitness/fitness",{data : data,
            site_info : "Fitness Home Page"}); 

            console.log("fitness page opened");
        
        
    }

    catch(err){

        console.log(err);
    }

})




module.exports = router;