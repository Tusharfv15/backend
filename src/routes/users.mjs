import { Router } from "express";
import { query,validationResult,checkSchema,matchedData } from "express-validator";
import { createUserValidationSchema } from "../utils/validationSchemas.mjs";
import { mockUsers } from "../utils/constants.mjs";
import { resolveIndexByUserId } from "../utils/middlewares.mjs";
const router = Router();
router.get('/api/users',query('filter')
.isString()
.notEmpty()
.withMessage('Filter is required')
.isLength({min:3,max:10})
.withMessage('Must be atleast 3-10 characters'),(req,res)=>{

const result = validationResult(req)
console.log(result);
const {query:{filter,value}} = req;
//When filter and value are undefined


if(filter && value ){
    return res.send(mockUsers.filter((user)=>user[filter].includes(value)))
}

return res.send(mockUsers);
})
router.post(
    '/api/users',
    checkSchema(createUserValidationSchema),
(req,res)=>{
    const result = validationResult(req);
    console.log(result);
    if(!result.isEmpty()){
        return res.status(400).send({errors:result.array()});
    }
    const data = matchedData(req);
    console.log(data);


const newUser = {id:mockUsers[mockUsers.length-1].id+1,...data};
mockUsers.push(newUser);
return res.sendStatus(201);

})

router.get('/api/users/:id',resolveIndexByUserId,(req,res)=>{
    const {findUserIndex} = req;
    const findUser = mockUsers[findUserIndex];
     if(!findUser){
         return res.status(404).send({msg:'User not found'});
     }
     return res.send(findUser);
 })

//Query Params
//products?minPrice=1000&maxPrice=5000


//PUT=>including every single field i.e updating every field
//PATCH=>update only  portion of a record
//DELETE


//put
 router.put('/api/users/:id',resolveIndexByUserId,(req,res)=>{
    const {body,findUserIndex} = req;
    
    mockUsers[findUserIndex] = {id:mockUsers[findUserIndex].id,...body};
    return res.sendStatus(204);
})

//patch
router.patch('/api/users/:id',resolveIndexByUserId,(req,res)=>{
    const {body,findUserIndex} = req;
   mockUsers[findUserIndex] = {...mockUsers[findUserIndex],...body};
   return res.sendStatus(204);
})

//Delete 
router.delete('/api/users/:id',resolveIndexByUserId,(req,res)=>{
    const {findUserIndex} = req;
    

    mockUsers.splice(findUserIndex,1);
    return res.sendStatus(204);
    

})

export default router;