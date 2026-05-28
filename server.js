const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const multer=require('multer')
const fs=require('fs') 

const app=express()
app.use(express.json())
app.use(cors())

app.listen(4000,(req,res)=>
{
    console.log("server on "+4000)
})

mongoose.connect('mongodb://localhost:27017/gadget')
.then(()=>
{
    console.log("data base open")
})

let pic

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    pic = Date.now() + file.originalname
    cb(null, pic)
  }
})

const upload = multer({ storage: storage })

const addcat=mongoose.Schema(
    {
        name:String,
        quantity:String,
        file:String
    }
)

modelcat=mongoose.model('addcat',addcat,'addcat')



app.post('/addcat',upload.single('file'),async(req,res)=>
{
    const result=new modelcat({
        name:req.body.name,
        quantity:req.body.quantity,
        file:pic
    })
    const rest=await result.save()

    if(rest)
    {
        res.send({statuscode:1})
    }
    else{
        res.send({statuscode:0})
    }
})

app.get('/showcat',async(req,res)=>
{
    const result=await modelcat.find()

    if(result)
    {
        res.send({statuscode:1,data:result})
    }
    else
    {
        res.send({statuscode:0})
    }
})
const addsub=mongoose.Schema(
    {
        name:String,
        quantity:String,
        file:String,
        cid:String,
        price:String,
        off:String
    }
)
modelsub=mongoose.model('addsub',addsub,'addsub')

app.post('/addsub',upload.single('file'),async(req,res)=>
{
    const result=new modelsub({
        name:req.body.name,
        quantity:req.body.quantity,
        file:pic,
        cid:req.body.cid,
        price:req.body.price,
        off:req.body.off
    })
    const rest=await result.save()

    if(rest)
    {
        res.send({statuscode:1})
    }
    else{
        res.send({statuscode:0})
    }
})
app.get('/showsub/:id',async(req,res)=>
{
    const result=await modelsub.find({cid:req.params.id})

    if(result)
    {
        res.send({statuscode:1,data:result})
    }
    else
    {
        res.send({statuscode:0})
    }
})
app.get('/arrivals',async(req,res)=>
{
    const result=await modelsub.find()

    if(result)
    {
        res.send({statuscode:1,data:result})
    }
    else
    {
        res.send({statuscode:0})
    }
})
app.get('/detail/:id',async(req,res)=>
{
    const result=await modelsub.findOne({_id:req.params.id})

    if(result)
    {
        res.send({statuscode:1,data:result})
    }
    else
    {
        res.send({statuscode:0})
    }
})
const addcart=mongoose.Schema(
    {
        name:String,
        file:String,
        price:String
    }
)
modelcart=mongoose.model('addcart',addcart,'addcart')

app.post('/addcart',async(req,res)=>
{
    const result=new modelcart({
        name:req.body.name,
        file:req.body.pic,
        price:req.body.price
    })

    const rest=await result.save()

    if(rest)
    {
        res.send({statuscode:1})
    }
    else{
        res.send({statuscode:0})
    }
})
app.delete('/delcart/:id',async(req,res)=>
{
    const result=await modelcart.findOneAndDelete({_id:req.params.id})
    if(result)
    {
        res.send({statuscode:1})
    }
    else{
        res.send({statuscode:0})
    }
})


app.get('/showcart',async(req,res)=>
{
    const result=await modelcart.find()

    if(result)
    {
        res.send({statuscode:1,data:result})
    }
    else
    {
        res.send({statuscode:0})
    }
})

const payment=mongoose.Schema({
    name:String,
    address:String,
    phone:String,
    bankname:String,
    accountno:String,
    expirydate:String,
    cvv:String,
    totalprice:String
})

paymentmodel=mongoose.model('payment',payment,'payment')

app.post('/payment' ,async(req,res)=>
{
    const result=new paymentmodel({
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        bankname:req.body.bankname,
        accountno:req.body.accountno,
        expirydate:req.body.expirydate,
        cvv:req.body.cvv,
        totalprice:req.body.totalprice
    })

    const rest=await result.save()
    if(rest)
    {
        res.send({statuscode:1})
    }
    else
    {
        res.send({statuscode:0})
    }

})

const register=mongoose.Schema({
    name:String,
    password:String,
    email:String,
    utype:String
})

registermodel=mongoose.model('register',register,'register')

app.post('/register' ,async(req,res)=>
{
    const result=new registermodel({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        utype:"user"
    })

    const rest=await result.save()
    if(rest)
    {
        res.send({statuscode:1})
    }
    else
    {
        res.send({statuscode:0})
    }

})


app.post("/login",async(req,res)=>{
const result= await registermodel.findOne({email:req.body.email})

if(!result){
            res.send({statuscode:0})

}else{
if(result.password===req.body.password){

    if(result.utype==="user"){
                res.send({statuscode:1,utype:"user",memeberdata:result})

    }
   else{
                res.send({statuscode:1,utype:"admin",memeberdata:result})

    }

 

}
else{
     res.send({statuscode: 0, message: "Invalid password"})
}

}

})



// app.post("/login", async (req, res) => {
//   const result = await registermodel.findOne({email: req.body.email})

//   if (!result) {
//     res.send({statuscode: 0})
//   } else {
//     if (result.password === req.body.password) {
//       if (result.utype === "user") {
//         res.send({statuscode: 1, utype: "user", memeberdata: result})
//       } else {
//         res.send({statuscode: 1, utype: "admin", memeberdata: result})
//       }
//     } else {
//       // Add this else block to handle incorrect passwords
//       res.send({statuscode: 0, message: "Invalid password"})
//     }
//   }
// })

const contact=mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String
})

modelcontact=mongoose.model('contact',contact,'contact')

app.post('/contact',async(req,res)=>
{
    const result=new modelcontact({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    })

    const rest=await result.save()
    if(rest)
    {
        res.send({statuscode:1})
    }
    else
    {
        res.send({statuscode:0})
    }
})






app.delete('/del/:id',async(req,res)=>
{
    const result=await modelcat.findOneAndDelete({_id:req.params.id})

    if(result)
    {
        res.send({statuscode:1,data:result})
    }
    else
    {
        res.send({statuscode:0})
    }
})
app.put('/update',upload.single('file'),async(req,res)=>{
    if(!req.file){
        pic=req.body.oldpic
    }else{
fs.unlink('./public/uploads'+req.body.oldpic,(err)=>{
    if(err){
        console.log("not del")
    }else{
        console.log("del")
    }
})
    }
    const result= await modelcat.updateOne({_id:req.body.iid},{$set:{name:req.body.name,quantity:req.body.quantity,file:pic}})

    if(result){
        res.send({statuscode:1})
    }else{

        res.send({statuscode:0})

    }



})