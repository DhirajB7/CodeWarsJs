const abbreviate = (string="") => {

    const arrayOfWords = string.split(/[^A-Za-z]/).filter(a=>a.length>=1)

    const mapWords = new Map()
    
    for (const word of arrayOfWords) {
        if(!mapWords.has(word)){
            mapWords.set(word,logic(word))
        }
    }
    
    for(const word of arrayOfWords){
        string = string.replace(word,mapWords.get(word))
    }
    return string
}

const logic = (word="")=> {
    if(word.length<4){
        return word
    }else{
        const lengthOfWord = word.length;
       return word[0]+Number(lengthOfWord-2)+word[lengthOfWord-1]
    }
    
}

console.log(abbreviate("elephant-rides are really fun!"))