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
    function shuffleArray (array) {
    for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
    
    }
    return array
    }
function winCheck () {
    if (cards.every(card => card.matched)) {
setTimeout(() => {
    alert('YOU HAVE WON THE GAME')
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
        // winCheck()
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






