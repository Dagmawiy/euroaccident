# Euro assignment 

-  Login user if the user exist in our database or api list
-  Show errer message if user not exist 

-  Show user insurance by maping user_insurance ans insurance api's

-  Logout user 

# Solution description

I will use nodejs for the server side and react for the cliant side by separating on data processing and display of customer data gives us better control both clear handling around the entire application.

# what dose the backend do

We communicate with euro insurance's rest api and build up objects that are sent back and forth to the client. 

The tech behind 
-   express
-   dotenv
-   jsonwebtoken
-   nondmon

# what dose the front-end do

We communicate with euro insurance's rest api and build up objects that are sent back and forth to the client. 

The tech behind 
-   React and all dependencie neede. please look into the packge.json in the client folder
-   Bootstrap


# Get started by 

Create a .env file to the root of the project and add the following

PORT=5000
API_PORT=5000

You can get started by starting the server side first. gives you access to all end points

- cd into the project root cd/euro
- npm install
- npm run server 

The server will run on port 5000. If you wish to change the port please make sure you change to port in .env and the proxy in your front end

# Star the front end 

- cd into project front-end root like so cd/euro/client 
- npm install
- Obs if you have problems with starting up the project run this command before npm start export NODE_OPTIONS=--openssl-legacy-provider
- npm start 

You web browser will open with the front page of the assignment

# Test users

[
    {
        "id": 1,
        "login": "elly",
        "name": "Elly Ljungberg"
    },
    {
        "id": 2,
        "login": "hans",
        "name": "Hans Sahlin"
    },
    {
        "id": 3,
        "login": "elisabeth",
        "name": "Elisabet Österberg"
    }
]



