function returnScoreMessage(score,numberOfWords) {
    let scoreMessage = document.querySelector(".score span")
    let message = `${score} / ${numberOfWords}`
    scoreMessage.innerText = message
}

function newWord (userWord) {
    let givenWord = document.querySelector("#given-word")
    givenWord.innerText = userWord
}

function afficherEmail(name, mail, score) {
    let mailto = `mailto:${mail}?subject=Partage du score Azertype&body=Salut, je suis ${name} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function validateName(name) {
    if (name.length >=2) {
        return true
    }
    return false
}

function validateMail(mail) {
    let regexMail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")

    if (regexMail.test(mail)) {
        return true
    }
    return false
}

function runGame () {
    initAddEventListenerPopup()
    let score           = 0
    let i               = 0
    let numberOfWords   = 0
    let choiceList      = APP_WORDS

    let validateWord    = document.querySelector(".input button")
    let userText        = document.querySelector("#given-word-input")
    let wordChoice      = document.querySelectorAll(".choice input")
    let submitButton    = document.querySelector(".popup form")

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
            })}

            submitButton.addEventListener("submit", (event) => {
                event.preventDefault();

                let name            = document.querySelector("#nom").value
                let mail            = document.querySelector("#email").value

                if (validateName(name) && validateMail(mail)) {
                    afficherEmail(name, mail, score)
                } else {
                console.log("erreur")
            }
            })}


function share() {
    let shareButton = document.querySelector("form")
    shareButton.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log("pas de rechargement")
    })
}
