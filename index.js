import express from 'express';
import router from './routes/studentRoutes.js'
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());

app.use('/api', router)



//Route
// router(app);
// app.get('/',(req,res)=>
//   res.send('hello world')
//)
// MongoDB connection
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
// mongoose.connection.once('open',function(){
//   console.log('Database connected Successfully');
// }).on('error',function(err){
//   console.log('Error', err);
// })
// const router = require('./routes/emp')
// app.use('/emp',router)
//Server
app.listen(3000,function(){
  console.log('Server is Up')
})