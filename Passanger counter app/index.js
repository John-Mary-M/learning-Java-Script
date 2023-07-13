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