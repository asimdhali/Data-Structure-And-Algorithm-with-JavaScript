function charCount(str){
    let charList = {};
    
    for(let char of str.toLowerCase()){
        // Skip non-alphabetic characters
        if(!/[a-z]/.test(char)) continue;

        // Increment the count or initialize it
        charList[char] = (charList[char] || 0) + 1;
    }
    return charList;
}
console.log(charCount("hello Everyone!!"));