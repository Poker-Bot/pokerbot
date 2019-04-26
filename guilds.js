const mongoose = require("mongoose");
const guildsSchema = mongoose.Schema({
    serverId:Number,
    serverName:String,
    autorole:String,
    boolautorole:Boolean,
    welcomemessage:String,
    boolwelcomemessage:Boolean,
    welcomechannel:String,
    boolwelcomechannel:String,
    totalUsers:String,
    usersCount:String,
    botCount:String,
    boolstats:Boolean,
    createroom:String,
    boolcreateroom:Boolean,
    antimat:Boolean,
    anticaps:Boolean,
    shop:Array,
    prices:Array,
    casino:Boolean,
    bonus:Boolean,
    type:Number
});
module.exports = mongoose.model("Guild", guildsSchema)