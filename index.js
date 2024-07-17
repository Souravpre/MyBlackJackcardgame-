let cards=[]
let sum=0
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let hasBlackJack=false
let isAlive=false
let message=""
let player={
name:"Sourav",
chips:145
}
let playerEl=document.getElementById("player-el")
playerEl.textContent= player.name +": $"+ player.chips
function getRandomCard(){
    let randomnumber=Math.floor(Math.random()*14)
    if(randomnumber>10){
        return 10
    }else if(randomnumber === 1){
        return 11
    }else{
        return randomnumber
    }
}
function startgame(){
    isAlive=true
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    rendergame()
}
function rendergame(){
    if(sum<=20){
        message="Do you want to draw a new card?🙂"
    }else if(sum===21){
        message="Wohoo! You've got Blackjack!🥳"
        hasBlackJack=true
    }else {
        message="You're out of the game!😭"
    }
    messageEl.textContent =message
    sumEl.textContent = "Sum:" + sum
    cardEl.textContent = "Cards:"
    for(let i=0;i<cards.length;i+=1){
    cardEl.textContent += cards[i]+" "
    }
}
function newcard(){
    if(isAlive === true && hasBlackJack === false){
    let card=getRandomCard()
    sum += card
    cards.push(card)
    rendergame() 
    }
}