let mongoose = require('mongoose')

const uri = "mongodb+srv://Alex-admin:rv5MYz3GUrA22GJx@cluster0.idiu0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}
const Schema = mongoose.Schema;
const db = mongoose.connection;
db.on("error", (err) => {
    console.error("Ошибка соединения:", err);
});

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