const fs = require("fs");
var path = require('path');
const file = './app.log';

exports.log = (...args) => {
    return generateLogs(args, 'Log');
}

exports.error = (...args) => {
    return generateLogs(args, 'Error');
}

exports.warning = (...args) => {
    return generateLogs(args, 'Warning');
}

exports.info = (...args) => {
    return generateLogs(args, 'Info');
}

exports.debug = (...args) => {
    return generateLogs(args, 'Debug');
}

const generateLogs = (args, param) => {
    checkIfFileAvail();
    let dateTime = new Date();
    let nVal = `[${dateTime.toLocaleString()}] - ${param} - ${args} \n`;
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
 