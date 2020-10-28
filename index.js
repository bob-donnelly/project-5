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

function createCards () {
    cardsData.forEach((data, index) => createCard(data, index)) // loop through data and creating a array of cards
}

// Create a single card in the DOM

function createCard() {
    const card = document.createElement('div')
    
}