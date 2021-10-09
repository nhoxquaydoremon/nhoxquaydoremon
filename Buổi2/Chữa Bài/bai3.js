function translatePigLatin(str) {
    const vowel = ["u", "e", "o", "a", "i"];

    if (vowel.includes(str[0])) {
        return str + "way"
    }

    let indexFirstVowel = Infinity;
    for(let i = 0; i < str.lenght; i++) {
        let index = str.indexOf(vowel[i]);
        if(firstIndexOfVowel > index && index != -1) {
            firstIndexOfVowel = index;
        }
    }
    return (
        str.substring(firstIndexOfVowel) +
        str.substring(0, firstIndexOfVowel) + 
        "ay"
    );
}