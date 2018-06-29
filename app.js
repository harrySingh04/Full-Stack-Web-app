// Importing modules
const express =  require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const index = require('./routes/index');


// Port to run the server
const port = process.env.PORT || 8080;

// Set Static Folder

app.use(express.static(path.join(__dirname,'public')));

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//CORS Middleware
app.use(cors());

//Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/',index);


app.listen(port,function(){
    console.log('Server Started');
})


