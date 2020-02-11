let stdout = process.stdout;
let string = '|/-\\|';
let counter = 100;
for(let char of string){
    setTimeout(() => {
    stdout.write(`\r${char}`); 
    }, counter += 200);
}
setTimeout(() => {
    stdout.write('\n');
}, 1500);
