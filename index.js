const express = require('express')
const cors = require('cors')
const mongoDB = require('./db')
const User = require('./models/User')
const app = express();

app.use(cors());

const port = 5000

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.get('/user', async (req, res) => {
    try {
      const users = await User.find(); // Fetch all users
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching data');
    }
})

app.use(express.json())

app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/cleanData'));


mongoDB()
app.listen(port, ()=>{
    console.log('this is running')
})