const mongoose=require('mongoose')
const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true
    }
})
const Projects=mongoose.model("Projcts",projectSchema)
module.exports=Projects;