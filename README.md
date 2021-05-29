# debuglog4js

debuglog4js  is a log tool or we can say that debugging tool for javascript developers to save their logs and errors in a log file.

And of course debuglog4js itself is open source with a [public repository][ankit]
 on GitHub.
 
### Installation
debuglog4js requires [Node.js](https://nodejs.org/) v4+ to run.
```sh
npm install debuglog4js --save
```
### Usgae

Install the dependencies and devDependencies and start the server.

```sh
const debug = require("debuglog4js");  // import debuglog4js package
debug.log('sample log');    //general logs
debug.log('sample log for user = 24');   //general logs with user id or other details
debug.error(`Error comes in = ${err}`);    //error logs
```
 
Then debuglog4js will cretae an file named app.log on your root directory where you can see your logs.
 

----
### License
ISC