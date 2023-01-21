

let mongoose=require("mongoose")

let Calculate=mongoose.Schema({
    p:Number,
    I:Number,
    N:Number
    

})

let Calculatemodel=mongoose.model('calculate',Calculate)

module.exports={
    Calculatemodel
}