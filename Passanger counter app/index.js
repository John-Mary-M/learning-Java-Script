// document.getElementById("count").innerText = 5
let count = 0
// initialize count as 0
// listen for clicks on the increment button
// increment the count varriable when the button is clicked

let countEl = document.getElementById("count-el")

function increment() {
        count += 1
        countEl.textContent = count
        console.log(count)
}

// grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
// create a variable that contains both the count and the dash seperator ie "12 - "
// render the variable in the saveEl using innerText

// NB: Make sure you dont delete the existing content of paragraph
function save() {
        let countStr = count + " - "
        saveEl.textContent += countStr
        console.log(saveEl)
}