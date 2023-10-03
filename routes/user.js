const express = require("express");

const router = express.Router();
const path = require("path");

const db = require("../data/db");








router.get("/blog-page",async function(req,res){
    


    try{
        const [data,dbb] = await db.execute("select * from details")
            
            
            console.log(data);
            
            
            res.render("users/blog-page",{data : data}); 

            console.log("blog page opened");
        
        
    }

    catch(err){

        console.log(err);
    }

    

         
    

});

router.get("/completed",(req,res) => {
    res.render("users/completed");
    console.log("completed page opened");
})


router.get("/",async function(req,res){
    


        try{
            const [dataa,] = await db.execute("select * from blog")
                console.log("index page opened");
                console.log(dataa);
                console.log("index page opened");
                
                
                res.render("users/index",{data : dataa}); 
            
            
        }
    
        catch(err){
    
            console.log(err);
        }
    
});





module.exports = router;