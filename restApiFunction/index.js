const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser= require('body-parser')
const app = express()


const ObjectId = require("mongodb").ObjectId;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://user:pass@restapifunction_mongo_1:27017/restdb";

const assert = require('assert');


const DATABASE_NAME = "restdb";
const COLLECTION_NAME = "users";




MongoClient.connect(uri, {useUnifiedTopology: true})
  .then(client => {
    console.log('connected to database')
    const db = client.db(DATABASE_NAME)
    const userCollection = db.collection(COLLECTION_NAME)

  //})

    app
      .use(express.static(path.join(__dirname, 'public')))
      .set('views', path.join(__dirname, 'views'))
      .set('view engine', 'ejs')
      .get('/', (req, res) => res.render('pages/index'))



//Her er funksjonen du skal skrive
////////////////////////////////////////////////////////////////////////////


      .get('/api/exists/:name', (req, res) => {
          

      })

////////////////////////////////////////////////////////////////////////////
	  

      .listen(PORT, () => {
        console.log(`Listening on ${ PORT }`)})
})
