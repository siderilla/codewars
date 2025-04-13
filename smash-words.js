// STAVO PER FARE QUESTO MA MANCAVA IL SEPARATOR:
function smash(words) {
    let newString = '';
    for (let i = 0; i < words.length; i++) {
        let element = words[i];
        newString += element;
    }
    return newString;
};

const words = ['hello', 'world', 'this', 'is', 'great'];
console.log(smash(words));

// POI ILLUMINAZIONE CON JOIN:
function smash(words) {
    return words.join(' ');
};