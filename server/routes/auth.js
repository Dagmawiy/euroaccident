
const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');

let router = express.Router();

router.post('/', (req, res) => {
    const { user } = req.body;

    axios.get('https://my-json-server.typicode.com/proactivehealth/work-test-sample/users')
        .then((resp) =>{
            const data = resp.data; // Get response 

            let usernames = []; // new arry for the name tags we need to match or select
            let userObject = []; // new arry for the name tags we need to match or select

            if(data === null) // check if response reruns null. 
                return res.status(401).json({token: null,  user: 'User not found', success : false  });
                
            data.map((items) =>{ // loop the response and collect the names for a our confirmation later 
                usernames.push(items.login); 
                
                if(items.login === user)
                    userObject.push(items); 
            });

            const is_array = usernames.includes(user); // check if the given name is realy  exist the collection as confirmation

            if (!is_array) // if user not exist return not auth
                return res.status(401).json({token: null,  user: 'User not found', success : false  });
            
            let token = jwt.sign({ data: userObject }, 'secret', { expiresIn: '1h' });
            
            return res.status(201).json({ token: token, user: userObject, success : true }); // return response with the user data
        
        }).catch(error => {
            return res.status(500).json({ errors: { messege: 'Someting went wrong' } });
        });;

     
});

module.exports = router;