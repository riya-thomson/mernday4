// 1.import
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://riyathomson:riyathomson@cluster0.7jb1srn.mongodb.net/OpenBatchdb1?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Successfully connected to db.")
})

.catch((error) => {
    console.log(error)
})