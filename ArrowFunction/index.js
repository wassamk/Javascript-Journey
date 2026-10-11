import { itemsBoughtArr } from "./itemsBoughtArr.js"

const speedWarning = speed => `You are going at ${speed} mph!`
console.log(speedWarning(100))

const overSpeed = (currentSpeed, speedLimit) => {
    return currentSpeed > speedLimit ? 
    `You are overspeeding by ${currentSpeed-speedLimit} mph` :
    null
}

console.log(overSpeed(100, 40))



const distanceTravelledinMIles = [267, 345, 283, 235, 400]

const distanceTravelledinKilometers = distanceTravelledinMIles.map(miles => Math.round(miles*1.6))

console.log(distanceTravelledinKilometers)

const calculateTotalCost = itemsBoughtArr.reduce((total, currentElement) => {
    return total + currentElement.priceUSD
}, 0)

console.log(calculateTotalCost)

const grantAccess = (level, ...names) => {
    names.forEach(function(person){
        console.log(`${person} is now level ${level}`)
    })
}

grantAccess('admin', 'John', 'Jane', 'Jack')

const text = 'Thankyou for all your hardwork throughout the year'
const sender = 'Jerry'



const getLabelsHtml = (text, sender, ...names) => {
    return names.map(function(person, index){
        // editCss(index)
        return `<div class = 'label-card' id=a${index}>
        <p> Dear ${person.name}</p>
        <p>${text}</p>
        <p>Best Wishses</p>
        <p>${sender}</p>
        </div>`
    })
}



// function editCss(index) {
//     index++;
//     document.getElementById('label-container').style.gridTemplateColumns = `repeat(1, ${index*3}fr )`
//     document.getElementById(`a${index}`).style.gridColumn = index   
// }

console.log(getLabelsHtml(text, sender, {name: 'Ronaldo'}, {name: 'Messi'}, {name: 'Neymar'}))

document.getElementById('labels-container').innerHTML = getLabelsHtml(
        text, sender, {name: 'Ronaldo'}, /*{name: 'Messi'}, {name: 'Neymar'},*/ {name:'Moussalini'}).join('');



