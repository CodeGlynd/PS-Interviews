function decipher(ciphertext, needle) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let shift = 0; shift < 26; shift++) {
        let decryptedText = '';

        for (const char of ciphertext) {
            if (/[a-zA-Z]/.test(char)) {
                const isUpperCase = char === char.toUpperCase();
                const charIndex = alphabet.indexOf(char.toLowerCase());
                const newIndex = (charIndex - shift + 26) % 26;
                const shiftedChar = alphabet[newIndex];

                decryptedText += isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
            } else {
                decryptedText += char; // Non-alphabetic characters remain the same
            }
        }

        if (decryptedText.includes(needle)) {
            return decryptedText;
        }
    }

    return "Invalid"; // Return "Invalid" if no valid shift results in the correct word
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let ciphertext = '';
let knownWord = '';

rl.question('', (ciphertextInput) => {
    ciphertext = ciphertextInput;
    rl.question('', (knownWordInput) => {
        knownWord = knownWordInput;

        const plaintext = decipher(ciphertext, knownWord);
        console.log(plaintext);

        rl.close();
    });
});
