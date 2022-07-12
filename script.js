import TOKEN from './token.js'

const joke = document.querySelector('.joke')
const jokeButton = document.querySelector('.nextJokeButton')

const getJoke = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': TOKEN,
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    }
    const response = await fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
    const jokeObject = await response.json()
    const { setup, punchline } = jokeObject.body[0]
    joke.textContent = `${setup} ${punchline}`
}

getJoke()
jokeButton.addEventListener('click', getJoke)
