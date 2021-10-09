function rot13(str) {
    // char
    // dynamic programing language
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz";
    const cipher = "NOPQRSTUVWXYZABCDEFGHJKLMnopqrstuvwxyzabcdefghjklm";
    let encoding = "";
    for(let i = 0; i < str.length; ++i) {
        const index = alphabet.indexOf(str[i]);
        encoding += cipher[index]
    }
    return encoding;
}

console.log(rot13("COVIDGETOUT"))