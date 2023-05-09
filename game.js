#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Угадай 1 или 2 \n');
const guessDigit = () => {
    const digit = Math.floor((Math.random() * 2) + 1);
    const file = path.join(__dirname, 'result.txt');
    const content = `Загаданное число - ${digit}\n`;
    fs.appendFile(file, content, () => {});
    rl.question('', (answer) => {
        if (answer == digit) {
            console.log('Вы угадали!');
            fs.appendFile(file, 'Вы угадали!\n', () => {});
            return rl.close();
        }
        guessDigit();
    })
}

guessDigit();