// creating a file using node js in node module folder.
understanding the concept of asynchronous nature of node js



1. creating / writting a file using node js
const vari = require('node:fs');
const content = 'Html source code ;';
vari.writeFile('/Users/HP-5/Desktop/node js practice/index.html', content, err => {
    if (err) {
        console.error(err);
    } else {
        console.log("first execution");
        console.log("fie  created sucess ... !");
    }
});


console.log("first  execution");

2. creating / writting file synchronously using node j.



const fs = require('node:fs');
const content = 'Some content!';

try {
    fs.writeFileSync('/Users/HP-5/Desktop/node js practice/txt4.txt', content);

} catch (err) {
    console.error(err);
}

console.log("last   execution");


3. appending content to file using node js



const fs = require('node:fs');
const content = 'Some content!';
console.log("first term  execution");

try {
    fs.writeFileSync('/Users/HP-5/Desktop/node js practice/txt4.txt', content);

} catch (err) {
    console.error(err);
}
console.log("last term execution");



4. reading a file using node js.

const fs = require('node:fs');
fs.readFile('/Users/HP-5/Desktop/node js practice/txt4.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
