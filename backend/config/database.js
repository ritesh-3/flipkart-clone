const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = () => {
    console.log("Connecting to", MONGO_URI)
    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log("Mongoose Connected");
        });
}

module.exports = connectDatabase;