const qS = document.querySelector('div')[2]
const qSA = document.querySelectorAll('.logo')
const ID = document.getElementById('character-bar')
const className = document.getElementsByClassName('logo')
const byName = document.getElementsByName('alex')
const tagName = document.getElementsByTagName('.logo')

//console.log(byName)
console.log(qS)

//starting here....showCharactertetails(character)
cutieSpan.addEventListener('click', e => {
    showCharacterDetails(character)//new function!! check test. js


function showCharacterDetails(character) {
    const cutieName = document.getElementById('name')
    const cutieImg = document.getElementById('image')
    const cutieVotes = document.getElementById('vote-count')

    cutieName.textContent = cutie.name
    cutieImg.src = cutie.image
    cutieImg.alt = cutie.name
    cutieVotes.textContent = cutie.votes
}

function addVotes(e) {
    e.preventDefault()

}