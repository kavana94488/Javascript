let word = "noen"


function isPalindrome() {
    let left = 0;
    let right = word.length - 1;

    while (left < right) {
        if (word[left] !== word[right]) {
            return "not a palindrome";
        }
        left++;
        right--;
    }
    return "palindrome";
}

