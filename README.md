## Introduction to Docker and React 

### Commands:
 - docker-compose build web (you can also build only the test service, just swap web for test)
 
 - docker-compose up -d web

 - docker-compose exec web npm test (to run the tests, if you built the test one there's no need for this command)

#### Notes:
The App will be visible at localhost:3000

The test implemented is a basic check for correct props display in  child component of the main App one.