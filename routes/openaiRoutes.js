const express=require('express')
const {generateImg}=require('../controllers/openaicontroller')
const router=express.Router();

router.post('/generateimg', generateImg);
module.exports=router;