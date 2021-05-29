const fs = require("fs");
var path = require('path');
const file = './app.log';

exports.log = (...args) => {
    checkIfFileAvail();
    let dateTime = new Date();
    let nVal = `[${dateTime.toLocaleString()}] - Log - ${args} \n`;
    fs.appendFile(file, nVal, (err) => {
        return true;
    });
}

exports.error = (...args) => {
    checkIfFileAvail();
    let dateTime = new Date();
    let nVal = `[${dateTime.toLocaleString()}] - Error - ${args} \n`;
    fs.appendFile(file, nVal, (err) => {
        return true;
    });
}

const checkIfFileAvail = ()=>{
    if (fs.existsSync(file)) return true;
    else {
        fs.createWriteStream(file);
        return true;
    }
}
 