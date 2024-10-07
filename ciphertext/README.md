<h1 align="center">Problemset - Ciphertext</h1>

## Instructions 


you are given a string of encrypted text(ciphertext)
the encryption algorithm that creates the ciphertext shifts all the alphabetic characters in the original (unencrypted) string by the same amount. but you don't know what this amount is. 
write decipher function that takes the encrypted string as input, and returns the original unencrypted string
for example, imagine that the original message was "hello" and we shifted each letter by two. the result ciphertext would be "jgnnq".
if the original message were "Coding tests are fun and challenging!" and we shifted each character by two, the result would be "Eqfkpi vguvu ctg hwp cpf ejcnngpikpi!" 
decipher function takes two arguments 
the ciphertext and a word that we know appeared in the original plain text using these clues, the function must output the original text.
we will follow the English alphabet for this question ( Z followed by A, likewise, z followed by a) 
if the word you are searching for in the original string does not appear there, return "Invalid"

----

#### Example
```sh
> input:
- "cdeb nqxg"
- "love"
> output:
"abcz love"
```
