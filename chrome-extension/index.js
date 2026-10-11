let myLeads = []
const inputEl = document.querySelector('#input-el')
const inputBtn = document.querySelector('#input-btn')
const ulEl = document.querySelector('#ul-el')
const deleteBtn = document.querySelector('#delete-btn')
const tabBtn = document.getElementById('tab-btn')

let leadFromLocalStorage =[]

leadFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))


tabBtn.addEventListener('click', function(){
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
          myLeads.push(tabs[0].url)
          localStorage.setItem("myLeads", JSON.stringify(myLeads))
          const listItem = `<li><a href="${tabs[0].url}">${tabs[0].url}</a></li>`
          ulEl.innerHTML += listItem;
          console.log(tabs[0].url)

     })  
})



// localStorage.setItem("myLeads", "www.example.com")

// myLeads.push("buddy");
// console.log(myLeads)

deleteBtn.addEventListener('dblclick', function() {
     localStorage.clear();
     ulEl.innerHTML = null;
     myLeads = null; 
})

if(leadFromLocalStorage){
     for (let i=0; i<leadFromLocalStorage.length; i++){
          const items = `<a href="https://${leadFromLocalStorage[i]}"><li>${leadFromLocalStorage[i]}</li></a>`
          ulEl.innerHTML += items
     }
}

inputBtn.addEventListener('click', function () {
     myLeads.push(inputEl.value)
     const listItems = '<a href="https://'+inputEl.value+'">'+'<li>'+ myLeads[myLeads.length-1] +'</li>'+'</a>'
     let leadString = JSON.stringify(myLeads)
     localStorage.setItem("myLeads", leadString)
     inputEl.value = null;
     ulEl.innerHTML += listItems;

     console.log(localStorage.getItem("myLeads"))

     // const li = document.createElement('h1')
     // li.textContent = 'Nigga'
     // document.querySelector('body').append(li);
})

// document.querySelector('body').innerHTML += '<button style= "width: 200px">'+'click me nigga'+'</button'