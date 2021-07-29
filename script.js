 
 
 //import express modules
 
 const express    =  require("express");
 const bodyparser =  require("body-parser");
 
 
 // load express moduels to  App variable 
 
 const app = express();
 app.use(bodyparser.urlencoded({extended:true}));
 
 
 
// send index.html 
 app.get("/bmicalculator",function(req,res){
     res.sendFile( __dirname+'/' + 'index.html');
     
 });
 
 
 // post data through specific route 
 
  app.post("/bmicalculator",function (req,res){
      
      //converting the text  to float numbers /Calculating BMI
       heigh = parseFloat(req.body.height);
       weigh = parseFloat(req.body.weight);
       weight_kg = (weigh*0.453);
       heigh_m= (heigh/100) ;
       bmi   = weight_kg/(heigh_m*heigh_m);
      
      
      // convert to string back for output
      bmi = bmi.toFixed();
      req_nam = req.body.Name;
      
      
      //showing bmi on html page
      if(bmi<19)
      {     
      res.send( "styl <center><h3> hii " + req_nam + 
    " your bmi is around "+bmi+
    "<center>you are <h1> underweight!</h1>");
      }
      
      else if(bmi <=19  && bmi>25)
      {
     res.send( "<center><h3> hii " + req_nam + 
   " your bmi is around"+bmi+
   "<center>you are <h1>Normalweight!");
      } 
      else if (bmi <=25 && bmi < 30)
      {
      res.send( "<center><h3> hii " + req_nam + 
    " your bmi is around "+bmi+
    "<center>you are <h1>overweight!");
       }
       
      else {
        
        res.send( "<center><h3> hii " + req_nam + 
      " your bmi is around "+bmi+
      "<center>you are<h1>Obese!</h1>");
            
      }
  });
  
  
//opening the application on port 7777   
app.listen(7777,function(){
console.log("port active at 7777");}
);  
