const model = document.querySelector('.model');
const close = document.querySelector('.close');
const login = document.querySelector('.btn');
 

close.addEventListener('click', closemade)
login.addEventListener('click', openmade)
window.addEventListener('click', outside)

function openmade() {
    model.style.display = 'block'
}

function closemade() {
    model.style.display = 'none'
}
function outside(e) { 
    if (e.target == model) {
        closemade()
    }
}