const {Schema, model} = require('mongoose')

const companySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    deadlines:{
        type: Number,
        default : 0,
        required : true,
        tasks : {
            required : true,
            needed_tasks : [],
        }
    },
    isDone : {
        type: Boolean,
    },
    users : {
        type : Schema.Types.ObjectId,
        ref: 'User',
        persons : []
    }


})

module.exports = model('User', companySchema )