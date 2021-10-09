// "ueoai" => IPA

function distanceToNearestVowel(str = "") {
    // clean code
    const strLower = str.toLowerCase();

    let vowelIndex = [];

    for(let i = 0; i < strLower.length; ++i) {
        if(['u', 'e', 'o', 'a', 'i'].includes(strLower[i])) {
            vowelIndex.push(i);
        }
    }
    for(let i = 0; i < strLower.length; i++) {

        let pos = 99999999999;
        for(let j = 0; j < vowelIndex.length; i++) {
            if(pos > Math.abs(vowelIndex[j] - i)) {
                pos = Math.abs(vowelIndex[j] - i);
            }
        }

        res.push(pos);
    }
    return res;
}

console.log(distanceToNearestVowel("shopper"));