function uploadFile(){
    return new Promise((resolve,reject) =>{

        console.log('Step 1: Uploading File')
        setTimeout(()=>{ resolve() }, 1000)
    })
}

function processFile(){
    return new Promise((resolve,reject)=>{

        console.log('Step 2: Processing File')
        setTimeout(() => {
            resolve()
        }, 1000);
    })
}

function notifyUser(){
    return new Promise((resolve, reject)=>{
        console.log("Step3: Notifying User")
        setTimeout(()=>{
            resolve()
        },1000)
    })
}

try{
    await uploadFile()
    await processFile()
    await notifyUser()
    console.log('All steps completed')
}catch(err){
    console.log(err)
}


function createPromise(){
    return new Promise ((resolve,reject)=>{
        const success = Math.random()>0.5
        if(success){
            resolve('simulatanous Successful')
        }else 
            reject('simultaneous Failed')
    })
}


try{
    const promise1 = createPromise()
    const promise2 = createPromise()
    const promise3 = createPromise()
    const result = await Promise.all([promise1,promise2,promise3])
    console.log(result)
}catch(err){
    console.log(err)
}


// uploadFile(()=>{
//     processFile(()=>{
//         notifyUser()
//     })
// })


// uploadFile(function() {
//     processFile(function(){
//         notifyUser(function(){
//             console.log('done')
//         })
//     })
// })