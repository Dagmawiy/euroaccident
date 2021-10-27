
const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const veifyerToken = require('../user/verifyToken');
let router = express.Router();

router.get('/', veifyerToken, (req, res) => {

    jwt.verify(req.token, 'secret', (err, authData) => {
    
      if (err) {
        return res.status(401).json({ errors: { user: 'user mssing token' } });
      } else {
      axios.all([
          axios.get('https://my-json-server.typicode.com/proactivehealth/work-test-sample/user_insurances'),
          axios.get('https://my-json-server.typicode.com/proactivehealth/work-test-sample/insurances')
        ]).then(axios.spread((response1, response2) => {
        
          let inss = [];
          for (const [key, value] of Object.entries(response1.data)) {  
              response2.data.filter((i,n) => {
                  if(authData.data[0].id == parseInt(key) && value.includes(i.id)){
                          inss.push(i);
                  }
              });
          }
          
          return res.status(200).json({ data :inss});
      
        })).catch(error => {
          console.log(error);
        });
      }
    });
});

module.exports = router;