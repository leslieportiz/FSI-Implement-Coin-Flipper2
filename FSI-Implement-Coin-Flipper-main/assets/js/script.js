// TODO: Declare any global variables we need
let headrolls = 0
let tailrolls = 0


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    // console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    document.getElementById('flip').addEventListener('click', () => {

        // TODO: Determine flip outcome
        let outcome = Math.random() < 0.5
        // console.log(outcome) 
        // this is a boolean (true or false)

        // TODO: Update image and status message in the DOM
        if (outcome) {
        // Update the scorboard
        document.getElementById('penny-image').src="assets/images/penny-heads.jpg"
        document.getElementById('message').textContent =  "You flipped Heads!"

        headrolls ++

        }

        else {
        document.getElementById('penny-image').src="assets/images/penny-tails.jpg"
        document.getElementById('message').textContent =  "You flipped Tails!"
        tailrolls ++
        }

        // TODO: Calculate the total number of rolls/flips
        let totalCount = tailrolls+headrolls

        // Make variables to track the percentages of heads and tails
        let headPercent = 0
        let tailPercent = 0

        // TODO: Use the calculated total to calculate the percentages
        if (totalCount >0){

         // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        headPercent = Math.round ((headrolls/totalCount) * 100)
        tailPercent = Math.round ((tailrolls/totalCount) * 100)
        }

        // TODO: Update the display of each table cell
        document.getElementById('heads').textContent = headrolls
        document.getElementById('heads-percent').textContent = headPercent + "%"
        document.getElementById('tails').textContent = tailrolls
        document.getElementById('tails-percent').textContent = tailPercent + "%"

    })

    // Clear Button Click Handler
    document.getElementById('clear').addEventListener('click', () => {

        // TODO: Reset global variables to 0
        headrolls = 0
        tailrolls = 0

        // TODO: Update the scoreboard (same logic as in flip button click handler)
        document.getElementById('message').textContent =  "Let's get rolling!!" 
        document.getElementById('heads').textContent = headrolls
        document.getElementById('heads-percent').textContent = "0%"
        document.getElementById('tails').textContent = tailrolls
        document.getElementById('tails-percent').textContent = "0%"

    })
})