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
    //the variable i made to access the img tags from the html witch they gona represents
    //the back of the card.
    const cardSet = document.querySelectorAll('.card')
    
    let  firstGo = null
    
    let canGuess = true
    


//here i added a wincheck function basicly i made an if statment and chose cards array and 
// every card inside that array matches, and i used the arrow function to shortn the code 
//rather than making the syntax longer, and called the function in the matched section
function winCheck () {
    if (cards.every(card => card.matched)) {
setTimeout(() => {
    document.querySelector('.level-winner').style.opacity = '1'
    document.querySelector('.level-winner').style.pointerEvents = 'auto'
   
}, 500)
    }
}


shuffleArray(cards)
//cardSet varaible we used here with .foreach to access the contant of the html card img,
//then inside it i wrote a function and in the parameters put el stand for elements,
// and the index of the array, witch tells witch index was.  
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






