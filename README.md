## [Toolbox Code Challenge]

To run both server (Express.js) and client (React.js) simply clone this repo and run the docker-compose file

`git clone https://github.com/HanzHerdel/toolboxText`

`cd toolboxText`

`docker-compose up`

once the images be downloaded and the containers mounted the client side runs over http://localhost:3000 and the server side on http://localhost:3001

to run tests on the api (mocha, chai, supertest) run 

`docker-compose run api-server npm test`

to run tests on the client (testing-library/jest-dom) run

`docker-compose run react-app npm test`

to build locally client or server enter to his root (/api or /toolbox) and run

`yarn install` and `npm start`

## Front End
the front side uses #Bootstrap for spacing and others, react-bootstrap to his basics components #Redux for propagating data and #Jest to test correct render, also uses axios to make requests.
Others: The "Send" button is blocked when there is no text to send using Bootstrap Forms, when a palindrome is detected a small label on the list is appears on the ui

## Backend
the api has one route, the functionality is splited in controllers and services, it uses #Standarjs to mantain the format and returns an object {text:String, palindrome:Boolean}, in Json format, it uses mocha chai and supertest for testing.

## Docker
it uses docker containers and docker-compose to unify the proccesses
