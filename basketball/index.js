function incrementH (n){
    let score = parseInt(document.getElementById('Home').innerText) + n
    document.getElementById('Home').innerText = score
}

function incrementA (n){
    let score = parseInt(document.getElementById('Away').innerText) + n
    document.getElementById('Away').innerText = score
}

function reset() {
    document.getElementById('Home').textContent = 0;
    document.getElementById('Home').textContent = 0;
}
