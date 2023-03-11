const textAreaElement = document.getElementById('text-area');
const totalCharactersElement =  document.getElementById('total-characters');
const remainingElement = document.getElementById('remaining');

textAreaElement.addEventListener('keyup', ()=>{
    updateCounter();
});

function updateCounter (){
    totalCharactersElement.textContent = textAreaElement.value.length;
    remainingElement.textContent = textAreaElement.getAttribute("maxLength") - textAreaElement.value.length;
}


