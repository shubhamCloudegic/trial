const express = require('express');
const pool = require('./database');
let router = express.Router();


router.get('/get/:id',async function(req,res){
    try{
const queryis = 'SELECT id,name FROM user WHERE id = ?';
const rows = await pool.query(queryis,req.params.id);
console.log(rows)
res.status(200).send(rows)

    }catch(err){
        res.status(500).send({messege:err.message})
    }
})


router.post('/create',async function(req,res){
//var Name = req.body.name
//const  id = req.body.id
//const queryis = 'INSERT INTO user (name,dept_id) VALUES';
let reqbody = req.body
 let { name,dept_id} = reqbody
 let data = {name: req.body.name ,dept_id:req.body.dept_id}
 const q = "INSERT INTO user SET ?";
 let queri =  pool.query(q,data,(err,results) =>{
     if(err) throw err
     res.send({messege:"done"})
 })


//const RESULT = await pool.query(q)

//res.status(200).json({data:RESULT.affectedRows + " " + "inserted data"})

})

router.get('/get/',async function(req,res){
    try{
const queryis = 'SELECT name FROM user';
console.log(typeof(queryis))
const rows = await pool.query(queryis);
if(!rows.length > 0){
    return res.status(400).send({ message:"data not found"})
}
console.log(typeof(rows))
console.log(rows)
res.status(200).send(rows)

    }catch(err){
        res.status(500).send({messege:err.message})
    }
})

router.put('/updates/:id',async function(req,res){
    const name = req.body.name
    const dept_id = req.body.dept_id
    var id = req.params.id
    Queruis = `UPDATE user SET name="${name}",dept_id = ${dept_id} WHERE id=${id}`;
    const rows = await pool.query(Queruis)
    res.status(200).send({data:"updated"})
})


router.delete('/delete/:id',async function(req,res){
let id = req.params.id

findid =`SELECT * FROM user WHERE id = ${id}`;
finddata = await pool.query(findid)

if(!finddata.length >0){
    return res.status(400).send({message:"data does not found with this id !"})
}
let Queryis = `DELETE FROM user WHERE id = ${id}`;
let remove =await pool.query(Queryis)
console.log(remove)
res.status(200).send({messege:"it is Deleted !!"})
})

router.put('/put',async function(req,res){
    let sqlquery ="UPDATE user SET name = '"+req.body.name+"', dept_id = '"+req.body.dept_id+"' WHERE id = "+req.params.id;

})

module.exports = router