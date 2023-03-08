const resButton = document.querySelector('button')
const body = document.querySelector('body')

const baseURL = 'https://swapi.dev/api/planets/2'

function clickedButton () {
    console.log('button clicked')
    axios.get(baseURL).then((result) => {
        result.data.residents.forEach((resident) => {
            axios.get(resident).then((result) => {
                let newResult = document.createElement('h2')
                newResult.innerHTML = result.data.name
                body.appendChild(newResult)
            })
        })
    })
}

resButton.addEventListener('click', clickedButton)