let alphabets = [ ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] , [0,1,2,3,4,5,6,7,8,9], ['$','@','%','!','&','#','*','^'] ]

function generate(){
    let password = []
    let a=0
    let b=0;
    for(let i=0; i<15; i++){
        a = Math.floor(Math.random()*3)
        if(a===0){
             b = Math.floor(Math.random()*26)
              console.log(a,b)
        }else if (a===1){
             b = Math.floor(Math.random()*10)
             console.log(a,b)
        }else {
             b = Math.floor(Math.random()*7)
             console.log(a,b)
        }
        password[i] = alphabets[a][b]
    }
    console.log(password.join(""))
    document.querySelector('#p1').textContent = password.join("")
}

