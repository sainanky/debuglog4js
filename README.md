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
require("debuglog4js");  // import debuglog4js package
console.file("./app.log"); // this will create an file or either you can create 
console.log(`Log - ${new Date()} - this is an demo new`);   // call function to log your log data
console.error(`Log - ${new Date()} - this is an demo new for error`); // call function to log your error data```
 
Then debuglog4js will cretae an file named app.log on your root directory where you can see your logs.
 

----
### License
ISC