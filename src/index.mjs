import express from 'express';
import routes from './routes/index.mjs'
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());
app.use(cookieParser('helloworld'));
app.use(routes);

/* const loggingMiddleware = (req,res,next)=>{
    console.log(`${req.method} - ${req.url}`);
    next();
} */
//Enabling middleware globally
/* app.use(loggingMiddleware,(req,res,next)=>{
    console.log('Finished Logging');
    next();
})  */



const PORT  = process.env.PORT || 3000;



app.get('/',//Enabling middleware locally
            /* (req,res,next)=>{
            console.log("BaseUrl1")  ;
            next();   
            },
            (req,res,next)=>{
            console.log("BaseUrl2")  ;
            next();   
            }, */
            (req,res)=>{
                res.cookie('hello','world',{maxAge:60000*60*2,signed:true});
    res.status(201).send({msg:'Hello World'});
})













app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);   
});

