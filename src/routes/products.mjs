import {Router} from 'express'
const router = Router();
router.get('/api/products',(req,res)=>{
    console.log(req.headers.cookie);
    console.log(req.cookies);
    console.log(req.signedCookies)
    console.log(req.signedCookies.hello)
    if(req.signedCookies.hello && req.signedCookies.hello === 'world'){
         return res.send([{id:1,productName:'Mobile',price:10000},
        {id:2,productName:'Laptop',price:50000},
        {id:3,productName:'Tablet',price:20000},
    ])
    }
    return res.status(403).send({msg:"Sorry. You need the correct cookie"});
    
});
export default router;