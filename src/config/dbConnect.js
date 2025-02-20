const mongoose = require('mongoose');

const dbConnect = async () => {

    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log('database connected');
    } catch (err) {
        console.log(err)
    }

}

module.exports = dbConnect;