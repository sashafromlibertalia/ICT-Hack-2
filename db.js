let mongoose = require('mongoose')
const {Schema, model} = require('mongoose')
const uri = "mongodb+srv://Alex-admin:rv5MYz3GUrA22GJx@cluster0.idiu0.mongodb.net/ict-hack?retryWrites=true&w=majority"
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}

mongoose.connection.on("error", (err) => {
    console.error("Ошибка соединения:", err);
});
const companySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    deadlines: {
        type: Number,
        default: 0,
        required: true,
        tasks: {
            required: true,
            needed_tasks: [],
        }
    },
    isDone: {
        type: Boolean,
    },
    users: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        persons: []
    }
})

const userSchema = new Schema({
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    login: {
        type: String
    },
    password: {
        type: String,
        // required: true
    },
    isLoggedIn: {
        type: Boolean,
        // required: true
    },
    isLeader: {
        type: Boolean,
        // required: true
    },
    deadlines: {
        type: Number,
        default: 0,
        // required: true,
        tasks: {
            type: Schema.Types.ObjectId,
            ref: 'Company',
            // required: true,
            done_tasks: [],
            needed_tasks: [],
            expired_tasks: []
        },
        collection: 'users'
    },
    createdAt: {
        type: Date
    }

})


function connectToDB() {
    if (mongoose.connection.readyState === 0) {
        try {
            mongoose.connect(uri, options)
                .then(() =>
                    console.log("Подключение к базе внутри функции прошло успешно")
                );
        } catch (e) {
            console.log("Не удалось подключиться внутри функции");
        }
    } else if (mongoose.connection.readyState === 2) {
        console.log("Окончательно подключились к базе!")
    }
    return new Promise(function (resolve) {
        resolve();
    });
}

function disconnect() {
    mongoose.disconnect();
}

module.exports.mongo = mongoose
module.exports.uri = uri
module.exports.options = options
module.exports.disconnect = disconnect()
module.exports.connectToDB = connectToDB()
module.exports.users = mongoose.model("users", userSchema)
module.exports.company = mongoose.model("company", companySchema)
