const express = require('express');
const router = express.Router();

//GET REQUEST TO '/'
//Responds with welcome text

router.get('/', (req, res)=> {
   res.send("Welcome to the homepage of Node Express server boilerplate.");
});


//Add your own route handler

module.exports = router;
