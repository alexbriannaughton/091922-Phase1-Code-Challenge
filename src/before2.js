const URL = 'http://localhost:3000/characters'
let currentCharacter

const fetchCutie = () => {
    fetch(URL)
        .then(resp => resp.json())
        .then(data => iterateCuties(data))
}

const iterateCuties = cuties => {
    cuties.forEach(renderCutie)
}

const cutieVotes = document.getElementById('vote-count')
function renderCutie(cutie) {
    //console.log(cutie)
    const divBar = document.getElementById('character-bar')
    const cutieSpan = document.createElement('span')
    cutieSpan.textContent = cutie.name
    divBar.append(cutieSpan)
    
    cutieSpan.addEventListener('click', e => {
        currentCharacter = cutie

        const cutieName = document.getElementById('name')
        const cutieImg = document.getElementById('image')
        

        cutieName.textContent = cutie.name
        cutieImg.src = cutie.image
        cutieImg.alt = cutie.name
        cutieVotes.textContent = parseInt(cutie.votes)
    })
}

const form = document.getElementById('votes-form')
form.addEventListener('submit', e => {
    e.preventDefault()
    const formVotes = parseInt(e.target[0].value)
    //cutieVotes.textContent = formVotes + parseInt(cutieVotes.textContent)
    currentCharacter.votes = formVotes + currentCharacter.votes
    cutieVotes.textContent = currentCharacter.votes
    form.reset()

})




fetchCutie()