// Function to rotate the image anticlockwise
function rotate_image(size, img) {
    for (let layer = 0; layer < size / 2; layer++) {
        let first = layer;
        let last = size - 1 - layer;
        for (let i = first; i < last; i++) {
            let offset = i - first;

            // Save the top element
            let top = img[first][i];

            // Move left to top
            img[first][i] = img[i][last];

            // Move bottom to left
            img[i][last] = img[last][last - offset];

            // Move right to bottom
            img[last][last - offset] = img[last - offset][first];

            // Move top to right
            img[last - offset][first] = top;
        }
    }

    // Output the rotated matrix
    img.forEach(row => console.log(row.join(' ')));
}

// Read input values from stdin
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let size;
let img = [];

// Read size
rl.question('', sizeInput => {
    size = parseInt(sizeInput);
    readRow(0);
});

function readRow(rowIndex) {
    if (rowIndex < size) {
        rl.question('', rowInput => {
            img.push(rowInput.trim().split(' ').map(Number));
            readRow(rowIndex + 1);
        });
    } else {
        // If all rows are read, call rotate_image and display the result
        rotate_image(size, img);
        rl.close();
    }
}
