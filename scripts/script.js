function returnScoreMessage(score,numberOfWords) {
    let scoreMessage = document.querySelector(".score span")
    let message = `${score} / ${numberOfWords}`
    scoreMessage.innerText = message
}

function newWord (userWord) {
    let givenWord = document.querySelector("#given-word")
    givenWord.innerText = userWord
}

function runGame () {
    let score = 0
    let i = 0
    let numberOfWords = 0
    let choiceList = APP_WORDS
    let validateWord = document.querySelector(".input button")
    let userText = document.querySelector("#given-word-input")
    let wordChoice = document.querySelectorAll(".choice input")

    validateWord.addEventListener("click", () => {
        console.log(`jai cliqué et écrit ${userText.value}`)
        if (choiceList[i] === userText.value) {
            score++
        }
        i++
        console.log(choiceList[i])
        newWord (choiceList[i])
        userText.value= ""
        numberOfWords++
        returnScoreMessage (score, numberOfWords)
        if (choiceList[i] === undefined) {
        newWord("Le jeu est fini")
        validateWord.setAttribute("disabled", true)
        } else  {
            newWord (choiceList[i])
        }
        })
    returnScoreMessage (score, numberOfWords)


        for (let index = 0; index < wordChoice.length; index++) {
            wordChoice[index].addEventListener("change", (event) => {
                console.log(event.target.value)
                if (event.target.value === "1") {
                    choiceList = APP_WORDS
                } else {
                    choiceList = APP_SENTENCES
                }
                newWord(choiceList[i])
    })
}
}

function share() {
    let shareButton = document.querySelector("form")
    shareButton.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log("pas de rechargement")
    })
}
