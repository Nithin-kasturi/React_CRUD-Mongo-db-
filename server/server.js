const express=require('express');
const app=express();
const cors=require('cors');
const User=require('./model/user');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.listen(8000,()=>{
    console.log("Listening on port 8000");
});
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to database");
    })
    .catch(error => {
        console.error("Error connecting to database:", error);
    });
app.get('/',async (req,res)=>{
    let alldata=await User.find({});
    res.json(alldata);
});
app.post('/student',async (req,res)=>{
    const {name,email}=req.body;
    const id=await User.countDocuments();
    const newUser=new User({
        Id:id+1,
        Name:name,
        Email:email,
    });
    newUser.save();
    res.send("Success");
});
app.get('/read/:id',async (req,res)=>{
    const Id=req.params.id;
    const details=await User.findOne({Id:Id});
    console.log(details);
    res.json(details);
});
app.post('/edit/:id',async (req,res)=>{
    const Id=req.params.id;
    console.log(Id);
    const Name=req.body.name;
    const Email=req.body.email;
    const updatedItems={Name,Email};
    console.log(updatedItems);
    await User.updateOne({Id:Id},{$set:updatedItems});
    res.send("Success");
});
app.delete('/delete/:id',async (req,res)=>{
    const Id=req.params.id;
    console.log(Id);
    await User.deleteOne({Id:Id});
    res.send("deleted");
});