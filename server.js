const express = require('express');
const app = express();
const path = require('path');

app.use(express.static( path.join( __dirname, 'public/dist' )))



app.get('/tasks', function(req, res){

    console.log("GET /tasks");
    // Task.find({}, function(err, tasks){
    //     return res.json(tasks);    
    // })
    res.json([
        {id:1, title:'Make Coffee and Code!', completed: false}
    ]);
})


app.post('/tasks', function(req, res){
    console.log
    let taskInstance = new Task(req.body);
    taskInstance.save(function(err){

        if (err){
            return res.json(false);
        } else {

            Task.find({}, function(err, tasks){
                return res.json(tasks);
            })
        }
    })

})



app.all('*', function(req, res){
    res.sendFile(path.resolve('./public/dist/index.html'));
})

app.listen(1337);