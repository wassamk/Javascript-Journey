import { playlistArr } from "./playlist.js"

const nameArr = ['Michael', 'Max', 'Hamilton']

// for(let item of nameArr){
//     console.log(item)
// }

const playlistHtml = playlistArr.map(function(music){
     return `<section class="card">
        <div class="card-start">
            <img src="./${music.albumArt}">
        </div>
            <div class="card-mid">
                <h4 class="card-title">${music.title}</h4>
                <p class="card-artist">${music.artist}</p>
            </div>
        <div class="card-end">
            <p class="card-menu">...</p>
        </div>
    </section>
    `
}).join('')

// for (let i = 0; i < playlistArr.length; i++) {
//     playlistHtml.push(
//     `<section class="card">
//         <div class="card-start">
//             <img src="./${playlistArr[i].albumArt}">
//         </div>
//             <div class="card-mid">
//                 <h4 class="card-title">${playlistArr[i].title}</h4>
//                 <p class="card-artist">${playlistArr[i].artist}</p>
//             </div>
//         <div class="card-end">
//             <p class="card-menu">...</p>
//         </div>
//     </section>
//         `
//     )
// }

// console.log(playlistHtml)

document.getElementById('container').innerHTML = playlistHtml


const groupInfo = [
    {
        name: 'Mizz',
        age: 23,
        height: 178,
        powers: ['fire', 'heat', 'lava']
    },
    {
        name: 'Drake',
        age: 21,
        height: 180,
        powers: ['water', 'cold', 'ice']
    },
    {
        name: 'John',
        age: 21,
        height: 172,
        powers: ['sand', 'dusty', 'mold']
    }
]

const joiner = groupInfo.map(function(obj){
    return {
        ...obj,
        age: obj.age+1
    }
})

console.log(joiner)

groupInfo.forEach(function(friend){
    friend.powers.forEach(function(power, index){
        console.log(index + ' ' + power)
    })
})


nameArr.forEach(function(person){
    console.log(person)
})

console.log('____________')

const character = {
    name: 'Walter White',
    age: 50,
    illness: 'Cancer'
}

for (let property in character){
    console.log(character[property])
}

const numbers = [1,2,3,4]

nameArr.forEach(function(point, index){
    nameArr[index] = point + 'driver'
})

console.log(nameArr)

console.log(numbers.join(' nigga ')) 

const x2 = numbers.map(function(x1){
    return x1*2
})

console.log(x2)

numbers.map(function(twice){
    console.log(twice*2)
})

const ages = [2,2,3,4,10,20,32,43,49,55,60]

const adults = ages.filter(function(age){
    return age >= 18 
})

console.log(adults)

const nameA = nameArr.filter(names =>{
    return names.includes('x')
})

console.log(nameA)

const adds = ages.reduce(function(total, currentElement){
    if (currentElement === total)  {
        return total + currentElement
    }
    return total
})

console.log(adds)

const students = [
    {
        name: 'John',
        marks: 80
    },
    {
        name: 'Kavaratskhelia',
        marks: 30
    },
    {
        name: 'Gonzalo Garcia',
        marks: 100
    }
]

const avgMarks = students.reduce(function(total, currentElement){
    return total + currentElement.marks
}, 0)

console.log(avgMarks/students.length)


const sentence = "i went to Australia and i saw a shark"

console.log(sentence.replaceAll(/\b\w/g, function(word){
    return word.toUpperCase()
}))




