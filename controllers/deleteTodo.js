const Todo = require("../models/Todo");

//define route handler
exports.deleteTodo = async(req,res) =>{
try{

    const {id} = req.params;

    await Todo.findByIdAndDelete(id);
  
    
// send a json response with a success flag
res.status(200).json(
    {
        succes:true,       
        message:'Todo has been Deleted'
    }
);
}
catch(err)
{
   console.log(err);
   console.error(err);
   res.status(500).json({
    success:false,
    data:"internal server error",
    message:err.message,
   })
}
}
 