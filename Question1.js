function lengthOfLongestSubstring(s) {
    let charSet = new Set(); // To store unique characters in the current window
    let start = 0; // Left pointer of the window
    let maxLength = 0; // To keep track of the maximum length

    // Iterate through the string with the 'end' pointer
    for (let end = 0; end < s.length; end++) {
        // If the character is already in the set, slide the window from the left
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++; 
        }

        // Add the new character to the set
        charSet.add(s[end]);

        // Update the maximum length of the substring
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("ABCBC"));  // Output: 3 ("ABC")
console.log(lengthOfLongestSubstring("AAA"));    // Output: 1 ("A")
