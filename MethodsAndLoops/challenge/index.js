import ContactsArr from "./ContactsData.js";


const info = document.getElementById('searchbar');
const data = document.getElementById('mdiv')

info.addEventListener('input', function(event) {
    const found = ContactsArr.map(function(details){
        const arrRegex = new RegExp(info.value, 'gi')
        if(arrRegex.test(details.name) || arrRegex.test(details.email) || arrRegex.test(details.phone)){
            return `<section>
                <p>${details.name}</p>   
                <p>${details.email}</p>   
                <p>${details.phone}</p>   
            </section>`            
        }
        else return
    }).join('  ')
    if(!info.value){
        document.getElementById('results').innerHTML = null
        data.style.overflow = "hidden";
    }
    else{
        document.getElementById('results').innerHTML = found    
        data.style.overflow = "hidden scroll";
    }
    // console.log(found)
})

