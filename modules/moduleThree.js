import { writeFile } from 'fs';
import { readFile } from 'fs';

const quote = "Why, sometimes I've believed as many as six impossible things before breakfast.";

writeFile('alicequotes.txt', quote, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

readFile('alicequotes.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

readFile('../style.css', 'utf8', (err, data) => {
    if (err) throw err;
    const count = (data.match(/#/g) || []).length;
    console.log(`The file contains ${count} ID selectors.`);
});