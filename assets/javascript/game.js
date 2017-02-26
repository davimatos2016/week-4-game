$(document).ready(function() {

    //Generates a random number between 19 - 120 to start game 
    var randomNum = Math.floor(Math.random() * 102 + 19);

    // Declare variables to generate random numbers between 1 - 12 for the crystals 
    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    // Declare variables to track game
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    // Appending assigned variables to its id in the html doc
    $('#randomNumber').text(randomNum);
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    //resets the game
    function reset() {
        randomNum = Math.floor(Math.random() * 102 + 19);
        $('#randomNumber').text(randomNum);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    }
    //Counts the wins
    function win() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    //Counts the losses
    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }

    //Sets up click for crystals
    $('#one').on('click', function() {
        userTotal += num1;
        $('#finalTotal').text(userTotal);
        //win/lose conditions
        if (userTotal === randomNum) {
            win();
        } else if (userTotal > randomNum) {
            loser();
        }
    })
    $('#two').on('click', function() {
        userTotal += num2;
        $('#finalTotal').text(userTotal);
        //win/lose conditions
        if (userTotal === randomNum) {
            win();
        } else if (userTotal > randomNum) {
            loser();
        }
    })
    $('#three').on('click', function() {
        userTotal += num3;
        $('#finalTotal').text(userTotal);
        //win/lose conditions
        if (userTotal === randomNum) {
            win();
        } else if (userTotal > randomNum) {
            loser();
        }
    })
    $('#four').on('click', function() {
        userTotal += num4;
        $('#finalTotal').text(userTotal);
        //win/lose conditions
        if (userTotal === randomNum) {
            win();
        } else if (userTotal > randomNum) {
            loser();
        }
    });
});