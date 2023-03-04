const mongoose = require("mongoose")

module.exports = () => {
    mongoose.connect("mongodb+srv://admin:EzzyAppUser@cluster0.4yhpxdj.mongodb.net/users?retryWrites=true&w=majority", { useNewUrlParser: true })
        .then(() => {
            console.log("Connected to MongoDB")
        })
        .catch(error => console.log(error))

    // mongoose.connection.close()
}
