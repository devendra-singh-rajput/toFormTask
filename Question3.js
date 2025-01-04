function coinChangeCombinations(coins, target) {
    // Create a DP table with size (target + 1), initialized to 0
    let dp = Array(target + 1).fill(0);
    
    // Base case: There's exactly 1 way to make the amount 0
    dp[0] = 1;

    // Process each coin
    for (let coin of coins) {
        for (let i = coin; i <= target; i++) {
            dp[i] += dp[i - coin];
        }
    }

    // The result is the number of ways to make the target amount
    return dp[target];
}

function solve(input) {
    const lines = input.trim().split("\n");

    // Number of test cases
    const T = parseInt(lines[0]);
    let index = 1;

    const results = [];
    for (let t = 0; t < T; t++) {
        // Read n and target
        const [n, target] = lines[index++].split(" ").map(Number);
        
        // Read coins
        const coins = lines[index++].split(" ").map(Number);

        // Compute the result for the current test case
        results.push(coinChangeCombinations(coins, target));
    }

    // Print all results
    console.log(results.join("\n"));
}

// Input example
const input = `3
3 13
5 2 4
3 28
2 5 4
4 28
16 163`;

solve(input);
