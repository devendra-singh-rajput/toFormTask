function maxPathSum(matrix, n, m) {
    // Initialize a DP table with the same dimensions as the matrix
    let dp = Array.from({ length: n }, () => Array(m).fill(0));
    
    // Initialize the first row of DP table with matrix values
    for (let j = 0; j < m; j++) {
        dp[0][j] = matrix[0][j];
    }

    // Fill the DP table for each subsequent row
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // Take the maximum from the three possible directions
            let down = dp[i - 1][j]; // Moving down
            let leftDiag = (j - 1 >= 0) ? dp[i - 1][j - 1] : 0; // Diagonally left
            let rightDiag = (j + 1 < m) ? dp[i - 1][j + 1] : 0; // Diagonally right

            // Calculate the current dp[i][j] value
            dp[i][j] = matrix[i][j] + Math.max(down, leftDiag, rightDiag);
        }
    }

    // The result is the maximum value in the last row of dp
    return Math.max(...dp[n - 1]);
}

function solve() {
    const T = parseInt(prompt());  // Number of test cases

    for (let t = 0; t < T; t++) {
        // Read n and m
        const [n, m] = prompt().split(" ").map(Number);
        
        // Read the matrix
        let matrix = [];
        for (let i = 0; i < n; i++) {
            matrix.push(prompt().split(" ").map(Number));
        }
        
        // Find and print the maximum path sum for this test case
        const result = maxPathSum(matrix, n, m);
        console.log(result);
    }
}

// Call the solve function to execute the solution
solve();
