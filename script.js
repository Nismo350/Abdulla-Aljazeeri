//here is the shuffleArray witch i need to shuffle the cards and make them random 
//
function shuffleArray (array) {
    for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
    
    }
    return array
    }
//and here i called the function on the cards objecte to shuffle its contant 
    


    //we need an Array of crads were we can store the front of the cards so we can use this array of 
    //object later on for flipping the card.
let cards = [
    {value: '2', image: './images/diamonds_2.svg', matched: false},
    {value: '3', image: './images/diamonds_3.svg', matched: false},
    {value: '4', image: './images/diamonds_4.svg', matched: false},
    {value: '5', image: './images/diamonds_5.svg', matched: false},
    {value: '6', image: './images/diamonds_6.svg', matched: false},
    {value: '7', image: './images/diamonds_7.svg', matched: false},
    {value: '2', image: './images/diamonds_2.svg', matched: false},
    {value: '3', image: './images/diamonds_3.svg', matched: false},
    {value: '4', image: './images/diamonds_4.svg', matched: false},
    {value: '5', image: './images/diamonds_5.svg', matched: false},
    {value: '6', image: './images/diamonds_6.svg', matched: false},
    {value: '7', image: './images/diamonds_7.svg', matched: false},
]
    
    const cardSet = document.querySelectorAll('.card')
    
    let  firstGo = null
    
    let canGuess = true
    



function winCheck () {
    if (cards.every(card => card.matched)) {
setTimeout(() => {
    document.querySelector('.level-winner').style.opacity = '1'
    document.querySelector('.level-winner').style.pointerEvents = 'auto'

}, 500)
    }
}


shuffleArray(cards)

cardSet.forEach(function (el, index) {
    
el.addEventListener('click', function () {
    
    if (index === firstGo || cards[index].matched || !canGuess) {
alert('invalid guess')
return
    }
    let clickedCard = cards[index]
    
    el.setAttribute('src', clickedCard.image)
    
    if (firstGo === null) {
firstGo = index
    } else {
        
    if (cards[firstGo].value === cards[index].value) {
        cards[firstGo].matched = true
        cards[index].matched = true
        firstGo = null
        winCheck()
        }else {
            canGuess = false
            setTimeout(function () {
                
                cardSet[firstGo].setAttribute('src', './images/blue2.svg')
                cardSet[index].setAttribute('src', './images/blue2.svg')
                firstGo = null
            canGuess = true
            }, 1000)
            
        
        } 
    } 
})
})

function resetGame() {
    // Shuffle the cards again
    shuffleArray(cards);

    // Reset all matched states
    cards.forEach(card => card.matched = false);

    // Reset UI for all cards
    cardSet.forEach((el, index) => {
        el.setAttribute('src', './images/blue2.svg'); // the default back of the card
    });

    // Reset gameplay variables
    firstGo = null;
    canGuess = true;

    // Hide any win message
    document.querySelector('.level-winner').style.opacity = '0';
    document.querySelector('.level-winner').style.pointerEvents = 'none';
}

document.getElementById('reset-game').addEventListener('click', resetGame);

