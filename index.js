// Dom selector

const cardsContainer = document.getElementById('cards-container')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const currentEl = document.getElementById('current')
const showEl = document.getElementById('show')
const hideEl = document.getElementById('hide')
const questionEl = document.getElementById('question')
const answerEl = document.getElementById('answer')
const addQuestionBtn = document.getElementById('add-question')
const clearBtn = document.getElementById('clear')
const addContainer = document.getElementById('add-container')

// Keep track of current card

let currentActiveCard = 0 // Which card to show

// Store cards on DOM

const cardEl = [] // Store DOM cards in a arrayof elements

// Local storage of card data

const cards = getCardsData()

//Create all cards

function createCards (){
    cardsData.forEach((data, index) => createCard(data, index)) // loop through data and creating a array of cards
}

// Create a single card in the DOM

function createCard(){
    const card = document.createElement('div')
    card.classList.add('card')

    if(index === 0){
        card.classList.add('active')
    }

    card.innerHTML = ` <div class="inner-card">
    <div class="inner-card-front">
      <p>
        What is JavaSCript?
      </p>
    </div>
    <div class="inner-card-back">
      <p>
        A programming language
      </p>
    </div>
  </div>
</div>
<div class="cards">
  <div class="inner-card">
    <div class="inner-card-front">
      <p>
          $(data.question) `

          card.addEventListener('click', () => card.classList.toggle('show-answer'))

          // Add to DOM cards

          cardsEl.push(card)

          cardsContainer.appendChild(card)

          updateCurrentText()
}

// Show number of cards]

function updateCurrentText(){
    currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}` // Add 1 to it because it starts at a 0 index
}

// Get cards from loal storage

function getCardsData(){
    const cards = JSON.parse(localStorage.getItem('cards'))
    return cards == null ? [] : cards
}

// Add cards to local storage

function setCardData(cards){
    localStorage.setItem('cards', JSON.stringify(cards)) // We want to turn it into a string
    window.location.reload() // To reflect the cards data on the DOM using the BOM?
}

createCards() 

// Event listeners

// Next button

nextBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card left'

    currentActiveCard = currentActiveCard + 1 // if we are at 1 it will move to 2 and so on

    // we need to set the index on the last card

    if(currentActiveCard > cardsEl.legth -1) {
        currentActiveCard = cardsEl.legth -1
    }

    // Our array is a 0 index base

    cardsEl[currentActiveCard].className = 'card-active'

    updateCurrentText()
}) 

//Prev button

    prevBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card-right'

    currentActiveCard = currentActiveCard -1

    if(currentActiveCard < 0) {
        currentActiveCard = 0
    }  

    cardsEl[currentActiveCard].className = 'card-right'

    updateCurrentText()
})






