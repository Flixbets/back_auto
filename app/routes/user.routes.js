module.exports =(app)=>{
    
  const user = require("../controllers/user.controller");

  var router = require("express").Router();

  router.post('/CreateUser',user.createUser)


  
  app.use("/api/user",router);
}