#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const arg = yargs.hideBin(process.argv)[0];

const guessDigit = () => {
    const digit = Math.floor((Math.random() * 2) + 1);
    const file = path.join(__dirname, 'result.txt');
    const content = `Загаданное число - ${digit}\n`;
    fs.appendFile(file, content, () => {});
    if (arg == digit) {
        console.log('Вы угадали!');
    }
}

guessDigit();