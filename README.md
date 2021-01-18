# [Toolbox Code Challenge]

To run both server (Express.js) and client (React.js) simply clone this repo and run the docker-compose file

`git clone https://github.com/HanzHerdel/toolboxText`

`docker-compose up`

once the images be downloaded and the containers mounted the client side runs over http://localhost:3000 and the server side on http://localhost:3001

to run tests on the api (mocha, chai, supertest) run 

`docker-compose run api-server npm test`

to run tests on the client (testing-library/jest-dom) run

`docker-compose run react-app npm test`

to build locally client or server enter to his root (/api or /toolbox) and run

`yarn install` and `npm start`
