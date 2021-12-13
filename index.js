const translate = (input) => {
    let lowerInput = input.toLowerCase();
    let vowels = ["a", "e", "i", "o","u"]
    let potato = lowerInput.match(/[aeiou]/g) || 0
    let place = lowerInput.indexOf(potato[0])
    let finalInput = lowerInput.substring(place) + lowerInput.substring(0, place) + "ay";
    for (let i = 0; i <vowels.length; i++) {
        if (lowerInput.startsWith(vowels[i], 0)) {
            finalInput = `${lowerInput}way`
            console.log("First")
            break;
        }       
    }
    return finalInput;
}
console.log(translate("HELLO"))

module.exports = translate;