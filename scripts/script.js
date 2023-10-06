function returnScoreMessage(score,numberOfWords) {
    let message = 'Votre score est de ' + score + ' sur ' + numberOfWords
    console.log(message)
}

function chooseWordorSentence() {
    let choice = prompt("Veuillez choisir la liste : mots ou phrases")

    while (choice !== "mots" && choice !== "phrases") {
        choice = prompt("Veuillez saisir 'mots' ou 'phrases'")
    }
    return choice
}

function runGameLoop(LIST) {
    let score = 0
        for (let i = 0; i < LIST.length; i++) {
            let userWord = prompt("Entrez le mot :" + LIST[i])
            if (userWord === LIST[i]) {
                score += 1
            }
        }
        return score
    }

function runGame () {
    let choice = chooseWordorSentence()
    let score = 0
    let numberOfWords = 0
    if (choice === "mots") {
        score = runGameLoop(APP_WORDS)
        numberOfWords = APP_WORDS.length
    } else {
        score = runGameLoop(APP_SENTENCES)
        numberOfWords = APP_SENTENCES.length
    }
    returnScoreMessage (score, numberOfWords)
}
