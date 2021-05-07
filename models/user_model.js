const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isLoggedIn: {
        type: Boolean,
        required: true
    },
    isLeader: {
        type: Boolean,
        required: true
    },
    deadlines: {
        type: Number,
        default: 0,
        required: true,
        tasks: {
            type: Schema.Types.ObjectId,
            ref: 'Company',
            required: true,
            done_tasks: [],
            needed_tasks: [],
            expired_tasks: []
        }
    }

})

module.exports = model('User', userSchema)