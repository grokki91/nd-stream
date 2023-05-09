#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'result.txt');
const readline = require('readline');

let all = 0;
let win = 0;
let lost = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Угадай 1 или 2 \n');
const guessDigit = () => {
    const digit = Math.floor((Math.random() * 2) + 1);
    const content = `Загаданное число - ${digit}\n`;
    fs.appendFileSync(file, content, () => {});

    rl.question('', (answer) => {
        if (answer == digit) {
            win++;
            console.log(' ---- Вы угадали! --- \n');
        } else if (answer != digit && answer.match(/[12]/) ){
            lost++;
        } else {
            console.log('Вы указали число, не соответствующее условию');
            return rl.close();
        }
        all = win + lost;
        console.log(`Общее число партий - ${all}`);
        console.log(`Количество выигранных партий - ${win}, количество проигранных - ${lost}`);
        console.log(`Процентное соотношение выигранных партий - ${win/lost * 100} %`);
        guessDigit();
    })
}

guessDigit();

