function walkDog (){
    return new Promise((resolve,reject)=>{
        const taskcomplete = true
        if(taskcomplete){
            resolve('You walked the dog')
        }else {
            reject("You didn't walk the dog")
        }
    })
}

function washClothes(){
    return new Promise((resolve,reject)=>{
        const taskcomplete = false
        if(taskcomplete){
            resolve('You washed the clothes')
        } else {
            reject("You didn't wash the clothes")
        }
    })
}


async function doChores() {
    try{
        const task1 = await walkDog()
        console.log(task1)
        const task2 = await washClothes()
        console.log(task2)
    }catch(err){
        console.error(err)
    }
}

doChores()

function walkDog2(){
    setTimeout(()=>{
        console.log('You washed the clothes')
    },1500)
}


function washClothes2(){
    setTimeout(()=>{
        console.log('You washed the clothes')
    },1500)
}

walkDog().then(value => {
    console.log(value);
    return washClothes()
}).then(value => {
    console.log(value)
    console.log('You did it')
}).catch(error=> {
    console.log(error)
})