function maxPathSum(matrix, n, m) {
    // Create two rows for DP to save space
    let prev = Array(m).fill(0);
    let curr = Array(m).fill(0);

    // Initialize the first row
    for (let j = 0; j < m; j++) {
        prev[j] = matrix[0][j];
    }

    // Fill the DP table row by row
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let down = prev[j]; // Down
            let leftDiag = (j > 0) ? prev[j - 1] : 0; // Diagonally left
            let rightDiag = (j < m - 1) ? prev[j + 1] : 0; // Diagonally right

            // Update the current row
            curr[j] = matrix[i][j] + Math.max(down, leftDiag, rightDiag);
        }
        // Move current row to previous row for the next iteration
        prev = [...curr];
    }

    // The result is the maximum value in the last row
    return Math.max(...prev);
}

function solve(input) {
    const lines = input.trim().split("\n");

    // Number of test cases
    const T = parseInt(lines[0]);
    let index = 1;

    const results = [];
    for (let t = 0; t < T; t++) {
        // Read n and m
        const [n, m] = lines[index++].split(" ").map(Number);

        // Read the matrix
        const matrix = [];
        for (let i = 0; i < n; i++) {
            matrix.push(lines[index++].split(" ").map(Number));
        }

        // Compute the result for the current test case
        results.push(maxPathSum(matrix, n, m));
    }

    // Print all results
    console.log(results.join("\n"));
}

// Input example
const input = `2
4 6
12 22 5 0 20 18
0 2 5 25 18 17
12 10 5 4 2 1
3 8 2 20 10 8
2 2
3 8
7 3`;

solve(input);
