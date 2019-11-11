let puzzles = [];
let puzzleAnimals = ["dog", "cat", "bat", "rat", "frog"];
let puzzleCompPart = ["GPU", "CPU", "RAM", "HDD", "SSD"];
let puzzleCoding = ["for", "if", "while", "alert", "var"];
let categories = ["Animals", "Computer Parts", "Coding"];
let moneys = [100, 200, 400, 600, 700, 800, 900, 1000, 2000];
let winMoney = 0;
let playerName = "";
let underscores = [];
let wordArray = [];
let matches = 0;
let won = 0;
let initStage = 0;
let namesArray = [];
let currentPlayer = 0;
let playerMoneys = [];
let currentPlayerNumber = 0;
let userFound = false;
let u = 0;
let wonMoney = 0;

function randCato() {
    if (initStage === 0) {
        let randNumCato = Math.floor(Math.random() * categories.length);
        let chosen = categories[randNumCato];
        if (chosen === "Animals") {
            puzzles = puzzleAnimals
        }
        if (chosen === "Computer Parts") {
            puzzles = puzzleCompPart;
        }
        if (chosen === "Coding") {
            puzzles = puzzleCoding;
        }
        document.getElementById("category").innerHTML = "Category: " + chosen;
        initStage++;
    } else {
        return alert("You need use the buttons in order.")
    }
}

function checkNames(nameInput) {
    for (u = 0; u <= namesArray.length; u++) {
        if (namesArray[u] === nameInput) {
            alert("Welcome back, " + nameInput + "!");
            alert(nameInput + ", you have $" + playerMoneys[u] + "!");
            currentPlayer = nameInput;
            currentPlayerNumber = u;
            userFound = true;
        }
    }
    if (userFound === false) {
        namesArray.push(nameInput);
        playerMoneys.push(0);
        currentPlayer = nameInput;
        currentPlayerNumber = namesArray.indexOf(nameInput);
        alert("Welcome to the game, " + nameInput + "!");
    }
}

function startGame() {
    if (initStage === 1) {
        document.getElementById("spinner").innerHTML = "";
        won = 0;
        underscores = [];
        wordArray = [];
        playerName = prompt("What is your name?");
        checkNames(playerName);
        let randNum = Math.floor(Math.random() * puzzles.length);
        let picked = puzzles[randNum];
        for (y = 0; y < picked.length; y++) {
            wordArray = wordArray + picked.substring(y, y + 1);
        }
        for (x = 0; x < wordArray.length; x++) {
            underscores.push("_");
        }
        document.getElementById("display1").innerHTML = underscores;
        initStage++;
    } else {
        return alert("You need use the buttons in order.")
    }
}

function spin() {
    let randNumSpin = Math.floor(Math.random() * moneys.length);
    winMoney = moneys[randNumSpin];
    wonMoney = wonMoney + moneys[randNumSpin];
    document.getElementById("spinner").innerHTML = "Money won from letters: $" + wonMoney;

}

function guess() {
    if (initStage === 2) {

        if (underscores.length === 0) {
            return alert("You need a word!")
        }
        let guessing = prompt("Guess a single letter.");
        for (i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === guessing) {
                spin();
                underscores[i] = guessing;
                playerMoneys[currentPlayerNumber] = playerMoneys[currentPlayerNumber] + winMoney;
                matches++;
                document.getElementById("display1").innerHTML = underscores;
            }
        }
        if (matches === wordArray.length) {
            alert("You won!");
            userFound = false;
            won = 1;
            wonMoney = 0;
            winMoney = 0;
            matches = 0;
            initStage = 0;
            document.getElementById("category").innerHTML = "";

            document.getElementById("display1").innerHTML = "";
        }
    } else {
        return alert("You need use the buttons in order.")
    }
}
