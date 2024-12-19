function coinChangeCombinations(coins, target) {
    // Create a DP table with size (target + 1), initialized to 0
    let dp = Array(target + 1).fill(0);
    
    // There's exactly 1 way to make the amount 0 (by choosing no coins)
    dp[0] = 1;

    // Process each coin one by one
    for (let coin of coins) {
        // For each coin, update dp[i] for all i >= coin
        for (let i = coin; i <= target; i++) {
            dp[i] += dp[i - coin];
        }
    }

    // The result is the number of ways to make the target amount
    return dp[target];
}

// Function to process the input
function solve() {
    let T = parseInt(prompt("Enter the number of test cases:")); // Read number of test cases
    for (let t = 0; t < T; t++) {
        let [n, target] = prompt("Enter the number of coins and the target:").split(" ").map(Number); // Read number of coins and target
        let coins = prompt("Enter the coin denominations:").split(" ").map(Number); // Read coin denominations

        // Compute and print the result for the current test case
        let result = coinChangeCombinations(coins, target);
        console.log(result);
    }
}

// Call the solve function to start the process
solve();
