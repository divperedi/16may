// import greeting from './modules/moduleOne.js';
// import sum from './modules/moduleTwo.js';
// import { add, subtract, division, multiplication } from './operations.js';
import { writeFile } from 'fs';
import readlineSync from 'readline-sync';
import { readFile } from 'fs';
import express from 'express';

const app = express();
const PORT = 8000;

// let insults;

// readFile('insults.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     insults = JSON.parse(data);
//     console.log(insults);
//     console.log(`Total number of insults: ${insults.length}`);
// });

// readFile('index.html', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// app.get('/insults', (req, res) => {
//     if (!insults) {
//         res.status(500).send('Insults not loaded');
//         return;
//     }
//     res.send(insults[Math.floor(Math.random() * insults.length)]);
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});







// READLINE SYNC
// let filename = readlineSync.question('What should the file be named?');
// let content = readlineSync.question('What should be written in the file?');

// writeFile(filename, content, (err) => {
//     if (err) throw err;
//     console.log('The file has been created!');
// });



// READLINE SYNC
let username = readlineSync.question('What is your name babe?');
console.log('Hi ' + username + '!');

let mood = readlineSync.question('How are you doing? *Joey Tribbianis voice*')
console.log('So ' + username + ' is ' + mood); 

let secret = readlineSync.question('What is your biggest secret? Do not worry, i will not tell anybody!');
console.log(secret + ' is a big secret!');

writeFile(username, mood, (err) => {
    if (err) throw err;
    console.log('The file has been created!');
});



// REPETITION MODULES
// const moduleOne = require('./modules/moduleOne');
// const moduleTwo = require('./modules/moduleTwo');

// console.log(greeting);
// console.log(sum(7, 4));

// console.log(add(4, 89));
// console.log(subtract(65, 758));
// console.log(division(654, 8));
// console.log(multiplication(34, 21));