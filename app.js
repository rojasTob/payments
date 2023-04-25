import fs from 'node:fs/promises';
import path from 'node:path';
// const fs = require('fs/promises');
// const path = require('path');
// import dataParser from './parsers/dataParser';


const pathFile = path.join(process.cwd(), 'data', 'employees.txt');
console.log('>> path >>', pathFile);

async function readFile() {

    try {
        const fileContents = await fs.readFile(pathFile, 'utf8');
        console.log('content type: ', typeof fileContents);
        console.log(fileContents);
        return fileContents;
    } catch (err) {
        console.error(`Error reading file: ${err}`);
    }
    return '';
}
  
readFile();