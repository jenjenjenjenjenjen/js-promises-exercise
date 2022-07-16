const BASE_URL = 'http://numbersapi.com/';
let randomNum = Math.round(Math.random() * 100);

const factsArea = document.getElementById('random-facts');
const favFacts = document.getElementById('fav-facts')

const request = axios.get(`${BASE_URL}1..10?json`);

request
    .then(data => {
        for (const d in data.data) {
            fact = document.createElement('p');
            fact.innerText = data.data[d];
            factsArea.append(fact)
        }
    })
    .catch(err => console.log(err))

axios
    .get(`${BASE_URL}58?json`)
    .then(data => {
        fact = document.createElement('p');
        fact.innerText = data.data.text;
        favFacts.append(fact);
        return axios.get(`${BASE_URL}58?json`)
    })
    .then(data => {
        fact = document.createElement('p');
        fact.innerText = data.data.text;
        favFacts.append(fact);
        return axios.get(`${BASE_URL}58?json`)
    })
    .then(data => {
        fact = document.createElement('p');
        fact.innerText = data.data.text;
        favFacts.append(fact);
        return axios.get(`${BASE_URL}58?json`)
    })
    .then(data => {
        fact = document.createElement('p');
        fact.innerText = data.data.text;
        favFacts.append(fact);
    })
    .catch(err => console.log(err))


let cardPromises = [axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=1')]


axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(data => {
        cardPromises.push(axios.get(`http://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=1`))
    })
    .catch(err => console.log(err))


Promise.all(cardPromises)
    .then(data => (data.forEach(d => console.log(`${d.data.cards[0].value} of ${d.data.cards[0].suit}`))))
    .catch(err => console.log(err))


const deck = axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(data => {
        const button = document.getElementById('add-card');
        button.addEventListener('click', function() {
            const cards = document.getElementById('cards');
            axios.get(`http://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=1`)
                .then(data => {
                    const card = document.createElement('img')
                    card.setAttribute('src', data.data.cards[0].image)
                    cards.append(card)
                })
        })
    });

