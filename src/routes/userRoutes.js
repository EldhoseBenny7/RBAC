const express=require("express");
const verifyToken=require("../middlewares/authMiddleware");
const authorization=require("../middlewares/roleMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const router= express.Router();

//only admin can access this routes
router.get("/admin",verifyToken,authorizeRoles("admin"),(req,res)=>{
    res.json({message:"Welcome Admin"});
});
//both admin and manager can access this router
router.get("/manager",verifyToken,authorizeRoles("admin","manager"),(req,res)=>{
    res.json({message:"Welcome manager"});
});
//all can access this router
router.get("/user",verifyToken,authorizeRoles("admin","manager","user"),(req,res)=>{
    res.json({message:"Welcome user"});
}); 

module.exports=router;