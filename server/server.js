const express = require ('express');
const app = express();
 
app.use('/',require('../client/src/routers/routers'));

app.listen(3000);
console.log('servidor on')