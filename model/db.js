import { Promise, connect } from 'mongoose';

Promise = global.Promise;

connect('mongodb://localhost:27017/TestUser',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err)=>{
    if(!err){
        console.log('MongoDB connection success');
    }else{
        console.log('MongoDB connection error '+err);

    }
})