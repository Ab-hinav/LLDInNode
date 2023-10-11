import * as readline from 'readline';


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('how are you?', (v) => {console.log('me',v)
    r1.close();});






