let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let constants = require('./constants');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || constants.port;

//Constants
var router = express.Router();
var apiKey = constants.apiKey;

router.route('/Get').get(function(req, res) {
  //Code Goes Here
  console.log("Succesful Get");
  res.json({message: "Successful Get"});
});
router.route('/Post').post(function(req, res) {
  if(req.body.apiKey.toString() === apiKey.toString())
  {
    //Code Goes Here
    let jsonRequestBodyValue = req.body.value;
    console.log("Successful Post " + jsonRequestBodyValue);
    res.json({message: "Successfull Post " + jsonRequestBodyValue});
  }
  else
    res.json("Error Incorrect API Key");
});

app.use('/', router);
app.listen(port);