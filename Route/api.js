const client=require('./connection');
const express=require('express');
const empController=require('../Controllers/EmployeeController');
const depController=require('../Controllers/DepController');
const projectController=require('../Controllers/ProjectController');
const app=express();





app.get('/users', (req, res)=>{
    res.send('hp')
})

app.get('/data',empController.read);
app.get('/data/:id',empController.showOne);
app.delete('/data/:id',empController.delete);
app.post('/create',empController.create);

app.get('/dep',depController.read);
app.get('/dep/:id',depController.showOne);
app.delete('/dep/:id',depController.delete);
app.post('/createdep',depController.create);

app.get('/project',projectController.read);
app.get('/project/:id',projectController.showOne);
app.delete('/project/:id',projectController.delete);
app.post('/project',projectController.create);

app.listen(8000, ()=>{
    console.log("Sever is now listening at port 8000");
})