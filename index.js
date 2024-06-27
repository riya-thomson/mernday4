// 1.import express using require

var express = require('express');
require('./connection')
const user = require('./model/user');

// 2.initializing variable

var app = express();

// middleware

app.use(express.json())  //to eanble to accept the data coming in json format

//to add data to db ---- POST---------
app.post('/first', async(request, response) => {
    try {

        console.log(request.body)
        await user(request.body).save();  //saving to db
        response.send({message:"data added successfully."})

    } catch (error) {
        console.log(error)
    }
})

// to get data from db-----GET----- ie, to view all users
app.get('/view', async(request, response) => {
    try {
        const data = await user.find();  //user is model file name
        response.send(data)

    } catch (error) {
        console.log(error)
    }
})

// to delete any user 
app.delete('/remove/:id', async(request, response) => {
    try {
        console.log(request.params.id)
        await user.findByIdAndDelete(request.params.id)
        response.send({message: "deleted"})

    } catch (error) {
        console.log(error)
    }
})

// to update a user 
app.put('/edit/:id', async(request, response) => {
    try {
        var data = await user.findByIdAndUpdate(request.params.id, request.body)
        response.send({message:'updated successfully', data})
    } catch (error) {
        console.log(error)
    }
});


// 3.api creation
    // api creation syntax ---app.get('path), (req, res) => {})
    app.get('/', (request, response) => {
        response.send("hello");
    })

    app.get('/first', (request, response) => {
        response.send("You have loged in successfully.")
    })

// 4.port allocation

app.listen(3000, () => {
    console.log("port is up and running")
})