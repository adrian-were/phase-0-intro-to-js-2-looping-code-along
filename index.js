// Code your solutions in this file


let friends = ["Guadalupe", "Ollie", "Aki"]
function writeCards(friends, event) {
    for(let i = 0; i < friends.length; i++) {
        console.log (`"Thank you, ${friends[i]}, for the wonderful ${event} gift!"`)
    }

    return friends
}
writeCards(friends, "surprise")
 
 function countDown() {
    let number = 10;
    while (number < 10) {
      console.log (number--)
    }
 }
 