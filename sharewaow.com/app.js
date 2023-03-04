const express = require('express');
const mongodb = require('mongodb');

const app = express();
const port = 3000;

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";

app.use(express.urlencoded({ extended: true }));

app.post('/create-ride', (req, res) => {
    MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
        if (err) {
            console.log('Error connecting to MongoDB:', err);
            return;
        }

        const db = client.db('carpool');
        const collection = db.collection('rides');

        const ride = {
            departureTime: req.body.departureTime,
            toAddress: req.body.toAddress,
            fromAddress: req.body.fromAddress,
            seats: req.body.seats,
            pricePerSeat: req.body.pricePerSeat,
            phoneNumber: req.body.phoneNumber
        };

        collection.insertOne(ride, (err, result) => {
            if (err) {
                console.log('Error inserting ride:', err);
                return;
            }

            res.send('Ride created successfully');
            client.close();
        });
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
