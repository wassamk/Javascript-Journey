fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        const imageElement = data.message;
        document.querySelector('body').innerHTML += `<img src = "${imageElement}">`
    })
    .catch(error => (
        console.log(error)
    )).finally(() => ( console.log('The operation is completed')))


async function getSuggestion(){
    const response = await fetch('https://apis.scrimba.com/bored/api/activity')
    const data = response.json()
    console.log(data)
}

getSuggestion() 

try {
        const recievedMessage = await fetch('https://dog.ceo/api/breeds/image/random')
        if(!response.ok){
            throw new Error('There was a problem with the api')
        }
        const data = await recievedMessage.json()
        console.log(data)
} catch(err){
    console.log(err)
} finally{
    console.log('operation is done')
}


try {
    const posts = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: 'POST',
        headers: {
            'content-type' : 'application'
        },
        body: JSON.stringify({
            title: 'Holiday Nightmare',
            body: 'When I was kidnapped in Scotland...',
            userId: 1
        })
    })
    if(!posts.ok)
        throw new Error('Problem with the endpoint')
    const data = await posts.json()
    console.log(data)
} catch(err){
    console.log(err)
} finally {
    console.log('Posts retrieved')
}

try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts/1')
    if(!response.ok){
        throw new Error ('API ISSUE')
    }
    const data = await response.json()
    console.log(data)
} catch(err) {
    console.log(err)
}

try {
    const request = await fetch('https://apis.scrimba.com/jsonplaceholder/posts/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Mickey Mouse',
            body: 'Once upon a time in disney...',
            userId: 12
        })
    })
    if(!request.ok) 
        throw new Error('API failed')
}catch(err){
    console.log(err)
}finally{
    console.log('Post is updated')
}

const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5
    if(success){
        resolve("Operation Successful")
    }else {
        reject("Operation Failed")
    }
})

// promise.then(response => console.log(response))

try {
    const response = await promise
    console.log(response)
}catch(err){
    console.log(err)
}


function preLoading(url){
    return new Promise((resolve, reject)=>{
        const img = new Image()
        img.src = url;
        img.addEventListener("load", () => resolve(img))
        img.addEventListener("error", ()=> reject("image has not loaded"))
    }) 
}

try {
    const result = await preLoading('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
    document.getElementById('img-container').appendChild(result)    
}catch(err){
    console.log(err)
}




