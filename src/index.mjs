import express from 'express';
import usersRouter from './routes/users.mjs';
import productsRouter from './routes/products.mjs'
const app = express();
app.use(express.json());
app.use(usersRouter)
app.use(productsRouter)
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
            (req,res,next)=>{
            console.log("BaseUrl1")  ;
            next();   
            },
            (req,res,next)=>{
            console.log("BaseUrl2")  ;
            next();   
            },
            (req,res)=>{
    res.status(201).send({msg:'Hello World'});
})













app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);   
});
