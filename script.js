let cards = [
    {value: '2', image: './images/diamonds_2.svg'},
    {value: '3', image: './images/diamonds_3.svg'},
    {value: '4', image: './images/diamonds_4.svg'},
    {value: '5', image: './images/diamonds_5.svg'},
    {value: '6', image: './images/diamonds_6.svg'},
    {value: '7', image: './images/diamonds_7.svg'},
    {value: '2', image: './images/diamonds_2.svg'},
    {value: '3', image: './images/diamonds_3.svg'},
    {value: '4', image: './images/diamonds_4.svg'},
    {value: '5', image: './images/diamonds_5.svg'},
    {value: '6', image: './images/diamonds_6.svg'},
    {value: '7', image: './images/diamonds_7.svg'},
  
    ]
    const cardSet = document.querySelectorAll('.card')
    let  firstGo = null
// const orgnCard = image('./images/blue3.svg')
 // this is a shuffle function to pick a random card from the cards array.
const shuffleArray = array => {
    for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}
return array
}      

shuffleArray(cards)
//this is function for clicking the card.
cardSet.forEach(function (el, index) {
el.addEventListener('click', function () {
    let clickedCard = cards[index]
    el.setAttribute('src', clickedCard.image)
    
    if (firstGo === null) {
firstGo = index
    } else {
        
    if (cards[firstGo].value === cards[index].value) {
        // console.log('its match');
        firstGo = null
        }else {
            setTimeout(function () {
                cardSet[firstGo].setAttribute('src', './images/blue2.svg')
                cardSet[index].setAttribute('src', './images/blue2.svg')
                firstGo = null
            }, 500)

        // console.log('not amatch');
        } 
        
        
        
        
    
    }
})
})






