
let result = '';
const characters = "abcdefg12345442324242";
const charactersLength = characters.length;
for (let i = 0; i < charactersLength; i++) {
    result += characters.charAt(
        Math.floor(Math.random() * charactersLength)
    );
}
console.log(result);