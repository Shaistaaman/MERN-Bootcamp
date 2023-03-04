const express = require('express');
const router = express.Router();


const User = require("../Database/models/user.js")

// /api/users/post POSt
router.post('/users/post', async (req, res) => {
    const { name, age } = req.body;
    const userData = new User({
        name,
        age,
    });

    try {
        const savedData = await userData.save();
        res.status(200).send(savedData);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});


module.exports = router;