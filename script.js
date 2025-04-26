let cards = [
    {value: '2', image: './images/diamonds_2.svg'},
    {value: '3', image: './images/diamonds_3.svg'},
    {value: '2', image: './images/diamonds_2.svg'},
    {value: '3', image: './images/diamonds_3.svg'},
    ]
    const cardSet = document.querySelectorAll('.card')
    let  firstGo = null


const shuffleArray = array => {
    for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}
return array
}      



cardSet.forEach(function (el, index) {
el.addEventListener('click', function () {
    let clickedCard = cards[index]
    el.setAttribute('src', clickedCard.image)
    if (firstGo === null) {
firstGo = index
    } else {
     if (cards[firstGo].value === cards[index].value) {
console.log("its a match");

     }else {
        console.log("not a match");
        
     }
    }
})
})


  
