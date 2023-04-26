import fs from 'node:fs/promises';
import path from 'node:path';

import { processPayment } from './controllers/calculator.js';


const pathFile = path.join(process.cwd(), 'data', 'employees.txt');
console.info(`\x1b[33m The path for employee.txt is: ${ pathFile } \x1b[0m`);

async function readFile() {

    try {
        const fileContents = await fs.readFile(pathFile, 'utf8');
        const fileLineByLine = fileContents.split(/\r?\n/);
        return fileLineByLine;
    } catch (err) {
        console.error(`Error reading file: ${err}`);
    }
    return [];
}

function processFile(){
    readFile().then((lines) => {
        lines.forEach(line => {
            const employee = processPayment(line);

            if(employee.errors.length !== 0){
                console.log(`Time entries for ${employee.name} have errors, please check them: ${employee.errors}`);
            }else{
                console.log(`The amount to pay ${employee.name} is: ${employee.totalAmount.toFixed(2)} USD.`);
            }
            console.log('----------------------------------------');
        });
    });
}

processFile();
