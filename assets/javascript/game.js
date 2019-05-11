$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var counter = 0;

    // create a random number to target between 19 and 120

    var targetNumber = Math.floor(Math.random() * 120 + 19);

    // show the number to the user from the start

    $("#target-display").text("Target Number: " + targetNumber);

    // show the counter to the user from the start

    $("#score-display").text("Your Total Score Is: " + counter);

    $("#wins-text").text("Wins: " + wins);
    $("#losses-text").text("Losses: " + losses);

    // assign each photo a spot in an array and then reference it down in the loop to give them value

    var cookieChoices = [$("#first-cookie"), $("#second-cookie"), $("#third-cookie"), $("#fourth-cookie")]

    // make an array to fill with potential cookie numbers

    var valueOptions = []
    for (var i = 0; i < 4; i++) {
        // four random numbers between 1 and 12 in the array
        valueOptions[i] = Math.floor(Math.random() * 12 + 1);
        cookieChoices[i].attr("data-cookie-value", valueOptions[i]);
    }

    // this function will enable us to reset the in game statistics without having to refresh the page... hopefully

    function reset() {

        targetNumber = Math.floor(Math.random() * 120 + 19);
        $("#target-display").text("Target Number: " + targetNumber);

        for (var i = 0; i < 4; i++) {
            valueOptions[i] = Math.floor(Math.random() * 12 + 1)
            cookieChoices[i].attr("data-cookie-value", valueOptions[i]);
        };
        counter = 0;
        $("#score-display").text("Your Total Score Is: " + counter);
    }

    // the gameLoss function will run in the conditional at the bottom

    function gameLoss() {
        alert("Sorry, you lose, try again!");
        losses++;
        // display the new losses total
        $("#losses-text").text("Losses: " + losses);
        // run the reset function
        reset();
    }

    // gameWin will run in the conditional at the bottom

    function gameWin() {
        alert("Winner, winner, chicken dinner! You got " + targetNumber + ". Play again!");
        wins++;
        // display the new win total
        $("#wins-text").text("Wins: " + wins);
        // run the reset function
        reset();
    }

    // on the click of the cookie image

    $(".cookie-image").on("click", function () {
        // create a new variable that holds the value of the clicked cookie
        var cookieValue = ($(this).attr("data-cookie-value"));
        cookieValue = parseInt(cookieValue)
        counter += cookieValue;

        $("#score-display").text("Your Total Score Is: " + counter);
        // show the target number in the target-display div
        $("#target-display").text("Target Number: " + targetNumber);
        if (counter > targetNumber) {
            gameLoss()
        } else if (counter === targetNumber) {
            gameWin()
        }
    });
});
