document.addEventListener('DOMContentLoaded', ()=>{
//card options

const cardArray = [
    {
        name: 'butters',
        img: 'img/butters.png'
    },
    {
        name: 'butters',
        img: 'img/butters.png'
    },
    {
        name: 'cartman',
        img: 'img/cartman.png'
    },
    {
        name: 'cartman',
        img: 'img/cartman.png'
    },

    {
        name: 'ike',
        img: 'img/ike.png'
    },
    {
        name: 'ike',
        img: 'img/ike.png'
    },
    {
        name: 'kenny',
        img: 'img/kenny.png'
    },
    {
        name: 'kenny',
        img: 'img/kenny.png'
    },
    {
        name: 'kyle',
        img: 'img/kyle.png'
    },
    {
        name: 'kyle',
        img: 'img/kyle.png'
    },
    {
        name: 'randy',
        img: 'img/randy.png'
    },
    {
        name: 'randy',
        img: 'img/randy.png'
    },
    
]

cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'img/school.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'img/school.png')
      cards[optionTwoId].setAttribute('src', 'img/school.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      
      cards[optionOneId].setAttribute('src', 'img/white.png')
      cards[optionTwoId].setAttribute('src', 'img/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'img/school.png')
      cards[optionTwoId].setAttribute('src', 'img/school.png')
      
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})