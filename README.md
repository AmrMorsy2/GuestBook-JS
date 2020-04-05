# GuestBook-JS

An in progress NodeJS project

## DEPENDENCIES 
  - JavaScript
  - NodeJs
  - ReactJs
  - Docker for mongoDB
## USAGE

```sh
BACKEND APIs USAGE:
  
  The backend APIs server runs on port 8881 running it locally it's accessible throw http://localhost:3000/
  
  # /user path got 2 endpoint:
    - /user/login 
        - This endpoint takes username and password throw the request body and returns a decoded token to the frontend to be stored in the web local storage
    - /user/register
        - Adds the a user data to the mongoDB
  # /msgs path got 2 endpoint:
    - /msgs/ins/:username
        - With the username is the url and AuthToken in header insert the body.message into the mongoDB
    - /msgs/del/:username/:msgid
        - With the username and message ID in the url and AuthToken in the header delete the message that match the username and the message ID
```
    
