let com_choice;
let user_choice; // Make user_choice a global variable

document.getElementById("btn").addEventListener("click", function() {
    // Check if com_choice is already set
    if (com_choice === undefined) {
        function generateRandomNumber() {
            return Math.floor(Math.random() * 3); // Generates a random number 0, 1, or 2
        }

        com_choice = generateRandomNumber(); 

        let images = document.getElementsByClassName("two");

        for (let i = 0; i < images.length; i++) {
            images[i].style.zIndex = 1; 
        }
        images[com_choice].style.zIndex = 10; 
        
        console.log("Image with index " + com_choice + " is brought to the front.");
        this.innerHTML = "Show Result"; // Change button text for the next action
    } else {
        // Now check the result
        checkResult(user_choice, com_choice);
        this.innerHTML = "Play"; // Reset button text after checking result
        com_choice = undefined; // Reset computer choice for the next round
    }
});

function append(value) {
    user_choice = value; // Assign to the global variable

    // Reset zIndex for all images first
    let images = document.getElementsByClassName("one");
    for (let i = 0; i < images.length; i++) {
        images[i].style.zIndex = 1; // Reset zIndex to 1 for all
    }

    // Set the zIndex of the selected image
    images[user_choice].style.zIndex = 3; // Highlight selected choice

    // Update button text based on user choice
    const buttonRock = document.getElementById("btn2");
    const buttonPaper = document.getElementById("btn3");
    const buttonScissors = document.getElementById("btn4");
    
    if (user_choice == 0) {
        buttonRock.innerHTML = "You chose Paper!";
    } else if (user_choice == 1) {
        buttonPaper.innerHTML = "You chose Rock!";
    } else if (user_choice == 2) {
        buttonScissors.innerHTML = "You chose Scissors!";
    }
}

// Function to handle keyboard input
document.addEventListener("keydown", function(event) {
    if (event.key === "0") {
        append(0); // Rock
    } else if (event.key === "1") {
        append(1); // Paper
    } else if (event.key === "2") {
        append(2); // Scissors
    } else if (event.key === "Enter") {
        // Trigger the button click to play
        document.getElementById("btn").click();
    } else if (event.key === " ") {
        // Show result when spacebar is pressed
        if (com_choice !== undefined) {
            checkResult(user_choice, com_choice);
            com_choice = undefined; // Reset for the next round
            location.reload(); // Reload the page after showing the result
        }
    }
});



// Check result function
function checkResult(user_choice, com_choice) {
    if (user_choice == com_choice) {
        alert("Draw! Computer choice: " + com_choice + ", Your choice: " + user_choice);
    } else if ((user_choice == 0 && com_choice == 1) || (user_choice == 1 && com_choice == 2) || (user_choice == 2 && com_choice == 0)) {
        alert("You win! Computer choice: " + com_choice + ", Your choice: " + user_choice);
    } else {
        alert("You lose! Computer choice: " + com_choice + ", Your choice: " + user_choice);
    }
    location.reload();
}

