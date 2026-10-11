let favorite_movie = {
    title: 'topgun',
    year: 2026,
    actor: 'Tom cruise',
    director: 'Christopher Nolan'
}

const {title, year, actor, director} = favorite_movie

console.log(`my favorite movie is ${title} released in ${year} starred by ${actor} and directed by ${director}`)

// let nextEntry = document.querySelector('input[name="nextEntry"]:checked')?.value;

let selectedValue = document.querySelector('input[type=checkbox]:checked')?.value;

console.log(selectedValue);

let tb = document.getElementById('title1')

tb.addEventListener("keydown", function(event)  {
    console.log(event.code)
})

function answerCapital(country, city){
    console.log(`the capital of ${country} is ${city}`)
}

const msg = 'brother'

if (msg !== 'brother'){
    throw new Error ("This aint no brother")
} else {
    console.log('yea brother')
}


const bankBalance = 249_777_1656
console.log(bankBalance)

setTimeout(answerCapital, 3000, 'Pakistan', 'Islamabad')

console.log('what is the capital of pakistan?')