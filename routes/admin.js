const express = require("express");

const router = express.Router();
const path = require("path");
const db = require("../data/db");


router.get("/admin/blogs/delete/:blogid", async function(req,res){

    const blogid = req.params.blogid;

    try{
        const [data,dbb] = await db.execute("select * from details where id=?",[blogid]);

        res.render("admin/delete",{data : data[0]});


    }
    catch(err){
        console.log(err);
    }
})

router.post("/admin/blogs/delete/:blogid", async function(req,res){

    const blogid = req.body.blogid;

    try{


        await db.execute("DELETE FROM details WHERE id=?",[blogid]);
        
        res.redirect("/admin/blogs");
        

    }
    catch(err){
        console.log(err);
    }
    
})


router.get("/admin/blogs/edit/:blogid",async function(req,res){

    try{

        const blogid = req.params.blogid;

        const [data,dbb] = await db.execute("select * from details where id=?",[blogid]);
  
        if (data.length === 0) {

            return res.redirect("/wrongPage")
            

            
        }


        console.log("admin update page opened");
        res.render("admin/edit",{data : data[0]}); 
    }

    catch(err){

        
        console.log(err);
    }

})

router.post("/admin/blogs/edit/:blogid",async function(req,res){

    
    const blogid = req.params.blogid;
    const bookname = req.body.bookname;
    const description = req.body.description;
    

    try{

        

        

        await db.execute("UPDATE details SET title = ? , description = ? WHERE id = ?",[bookname,description,blogid]);
  
            
        res.redirect("/admin/blogs");

            

    }

    catch(err){

        console.log(err);
    }

    

})


router.get("/admin/blogs",async function(req,res){
    
    
    try{
        const [data,dbb] = await db.execute("select * from details")
  
            
            res.render("admin/blogs",{data : data}); 

            console.log("admin blog page opened");

    }

    catch(err){

        console.log(err);
    }
    
})


router.get("/admin/create-blog",(req,res) =>{
    console.log("admin create blog page opened")
    res.render("admin/create-blog");
})

router.post("/admin/create-blog",async (req,res) =>{ //buna bak
    console.log("post request recieved");
    
    const bookname = req.body.bookname;
    const description = req.body.description;

    try{

        await db.execute("INSERT INTO `blogapp`.`details` (`title`, `description`) VALUES (?,?)",[bookname,description]);
        console.log("create completed...Redirecting");
        res.redirect("/completed");

    }

    catch(err){
        console.log(err);
    };


    
})

router.get("/admin", (req,res) => { 
    console.log("admin page opened");
    res.render("admin/admin"); 
});


module.exports = router;