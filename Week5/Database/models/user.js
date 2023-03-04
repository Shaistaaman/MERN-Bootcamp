const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    name: {
        required: true,
        type: 'string'
    },
    age: {
        required: true,
        type: 'number'
    }

})
module.exports = mongoose.model('User', userSchema);