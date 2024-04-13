import {Router} from 'express'
const router = Router();
router.get('/api/products',(req,res)=>{
    res.send([{id:1,productName:'Mobile',price:10000},
            {id:2,productName:'Laptop',price:50000},
            {id:3,productName:'Tablet',price:20000},
        ])
});
export default router;