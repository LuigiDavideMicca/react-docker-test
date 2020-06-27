# Introduction to Docker and React

## Commands:

-  docker-compose build web (you can also build only the test service, just swap web for test)

**TO START THE REACT APP:**

-  `docker-compose up -d web`

**TO RUN JEST TESTS:**

-  `docker-compose exec web npm test`

(if you built the test one there's no need for this command)

**TO RUN k6 TEST:**

-  `docker-compose run k6 run /k6-tests/WholeApp.test.js`

### Notes:

The App will be visible at localhost:3000.

K6 Test is a stess test on the network on the main page of the App.

Jest Test are implmented to check components props and input values down the components tree.
