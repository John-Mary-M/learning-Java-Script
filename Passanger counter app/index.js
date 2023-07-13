// document.getElementById("count").innerText = 5
let count = 0
// initialize count as 0
// listen for clicks on the increment button
// increment the count varriable when the button is clicked

let countEl = document.getElementById("count-el")

function increment() {
        count = count + 1
        countEl.innerText = count
        console.log(count)
}
// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")
//crete 2 varriables (name & greeting) that contain your name
// and greeting we want to render to the page
let my_name = "Peter Johnson"
let greeting = "Welcome "
//render the welcome message using the welcomeEl.innerText
welcomeEl.innerText = greeting + my_name
