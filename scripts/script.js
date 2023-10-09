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
    let givenWord  = document.querySelector("#given-word")
    let validateWord = document.querySelector(".input button")
    let userText = document.querySelector("#given-word-input")

    validateWord.addEventListener("click", () => {
        console.log(`jai cliqué et écrit ${userText.value}`)
        if (APP_WORDS[i] === userText.value) {
            score++
        }
        i++
        console.log(APP_WORDS[i])
        newWord (APP_WORDS[i])
        userText.value= ""
        numberOfWords++
        returnScoreMessage (score, numberOfWords)
        if (APP_WORDS[i] === undefined) {
        newWord("Le jeu est fini")
        validateWord.setAttribute("disabled", true)
        } else  {
            newWord (APP_WORDS[i])
        }
        })
    returnScoreMessage (score, numberOfWords)
}
