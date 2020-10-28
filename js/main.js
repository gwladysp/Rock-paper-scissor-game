const action = document.querySelector('.action')
const begin = document.querySelector('.begin')
const result = document.querySelector('.result')
const retry = document.querySelector("[data-action = 'retry']")

const choices = ['paper', 'scissors', 'rock']
let playerScore = 0
let computerScore = 0


action.addEventListener('click', function(e) {
    const targetAction = e.target.dataset.action
    if (targetAction === 'paper' || targetAction === 'rock' || targetAction === 'scissors' ) {
        const computerAction = randomChoice()

        resultDisplay("player", targetAction)
        resultDisplay("computer", computerAction)
        begin.classList.add('hidden')
        result.classList.remove('hidden')

        const win = winner(targetAction, computerAction)

        resultDeclaration(win)
        setScores(win)
    }

})

retry.addEventListener('click', function() {
    begin.classList.remove('hidden')
    result.classList.add('hidden')
})

function randomChoice() {
    return choices[Math.floor(Math.random()*3)]
}

function resultDisplay(player, action) {
    let playerIcon = null
    if (player === "player") {
        playerIcon = document.querySelector('[data-action="player"]')
    } else {
        playerIcon = document.querySelector('[data-action="computer"]')
    }
    if (playerIcon) {
        switch(action) {
            case "rock" :
                playerIcon.src = "images/icon-rock.svg"
                playerIcon.style.boxShadow = "inset 0 5px lightgrey, 0 5px #52A56E"
                playerIcon.style.borderColor = "#9ae6b4"
                break;
            case "scissors" :
                playerIcon.src = "images/icon-scissors.svg"
                playerIcon.style.boxShadow = "inset 0 5px lightgrey, 0 5px rgb(89, 134, 212)"
                playerIcon.style.borderColor = "#90cdf4"
                break;
            case "paper" :
                playerIcon.src = "images/icon-paper.svg"
                playerIcon.style.boxShadow = "inset 0 5px lightgrey, 0 5px #C17272"
                playerIcon.style.borderColor = "#feb2b2"
                break;
        }
    }
}

function winner(playerAction, computerAction) {
    if (playerAction === computerAction) {
        return "equal"
    } else {
        switch(playerAction) {
            case "rock" :
                switch(computerAction) {
                    case "scissors" :
                        return "win"
                    case "paper" :
                        return "lose"
                }
                break;
            case "scissors" :
                switch(computerAction) {
                    case "rock" :
                        return "lose"
                    case "paper" :
                        return "win"
                }
                break;
            case "paper" :
                switch(computerAction) {
                    case "scissors" :
                        return "lose"
                    case "rock" :
                        return "win"
                }
                break;
        }
    }
}

function resultDeclaration(result) {
    const phrase = document.querySelector('[data-action="result-phrase"]')
    if (result === "lose") {
        phrase.textContent = "Vous avez perdu."
    } else if (result === "equal") {
        phrase.textContent = "Egalité !"
    } else if (result === "win") {
        phrase.textContent = "Vous avez gagné !"
    }
}

function setScores(result) {
    if (result === "win") {
        playerScore++
        document.querySelector("[data-action='player-score']").textContent = playerScore
    } else if (result === "lose") {
        computerScore++
        document.querySelector("[data-action='computer-score']").textContent = computerScore
    }
}