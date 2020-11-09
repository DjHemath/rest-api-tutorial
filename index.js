const express = require("express");
const app = express();

app.use(express.json());

app.listen(5000);

app.post("/login", function(req, res) {
    // Get data from client
    const mobile = req.body.mobile;
    const pw = req.body.password;

    // Process logic
    if(mobile === '9999999999') {
        if(pw === '1234') {
            // Login success
            res.json({result: true});
        } else {
            // wrong password
            res.json({result: false, reason: 'wrong password'});
        }
    } else {
        // No such user
        res.json({result: false, reason: 'no user'});
    }
});

app.get("/ping", function(req, res) {
    res.json({
        result: 'pong'
    });
});