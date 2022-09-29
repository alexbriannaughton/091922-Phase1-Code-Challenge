const URL = 'http://localhost:3000/characters'

const fetchCutie = () => {
    fetch(URL)
        .then(resp => resp.json())
        .then(data => iterateCuties(data))
}

const iterateCuties = cuties => {
    cuties.forEach(renderCutie)
}


function renderCutie(cutie) {
    //console.log(cutie)
    const divBar = document.getElementById('character-bar')
    const cutieSpan = document.createElement('span')
    cutieSpan.textContent = cutie.name
    divBar.append(cutieSpan)
    cutieSpan.addEventListener('click', e => {
        const cutieName = document.getElementById('name')
        const cutieImg = document.getElementById('image')
        const cutieVotes = document.getElementById('vote-count')

        cutieName.textContent = cutie.name
        cutieImg.src = cutie.image
        cutieImg.alt = cutie.name
        cutieVotes.textContent = parseInt(cutie.votes)
        const form = document.getElementById('votes-form')
        form.addEventListener('submit', e => {
            e.preventDefault()
            const formVotes = parseInt(e.target[0].value)
            cutieVotes.textContent = formVotes + parseInt(cutieVotes.textContent)

        })
    })
}

const newChar=() => {
    const charForm = document.getElementById('character-form')
    charForm.addEventListener('submit', e => {
        e.preventDefault()
        const newName = e.target[0].value
        const newImage = e.target[1].value

        const newChar = {
            name: newName,
            image: newImage
        }
        postChar(newChar)
        renderCutie(newChar)
    })
}
const postChar = newChar => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(newChar)
    }

    fetch(URL, config)
        .then(resp => resp.json())
        .then(json => console.log(json))
}

// const postVotes = newVotes => {
//     const config = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'Application/json'
//         },
//         body: JSON.stringify({ newRamen })
//     }
// }

//function addVotes(votes) {}

fetchCutie()
newChar()