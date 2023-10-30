// https://www.codewars.com/kata/5601409514fc93442500010b/solutions/javascript
const  betterThanAverage = (classPoints=[], yourPoints) => {

    classPoints.push(yourPoints)

    return yourPoints > (classPoints.reduce((a,b) => a+b)/classPoints.length)
}