const express = require('express');
const router = express.Router();

router.get('/index', async function (req,res){
    res.send('../views/index');
})

module.exports = router