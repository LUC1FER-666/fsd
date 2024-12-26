const displayText = document.getElementById("display-text");
const typingInput = document.getElementById("typing-input");
const startButton = document.getElementById("start-button");
const result = document.getElementById("result");
const wordTracker = document.getElementById("word-tracker");

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Practice makes perfect, so keep typing.",
    "Speed typing improves with regular practice.",
    "Accuracy and speed are both important in typing.",
    "Test your typing speed to see your progress."
];

let startTime, endTime;
let randomSentence, sentenceWords;
let correctWords = 0;

function startTest() {
    //chooses a random sentence from const sentences
    randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceWords = randomSentence.split(" ");
    displayText.innerText = randomSentence;
    typingInput.innerText = "";
    typingInput.setAttribute("contenteditable", "true");
    typingInput.focus();
    startButton.disabled = true;
    result.innerText = "";
    wordTracker.innerHTML = "";
    startTime = new Date().getTime();
    correctWords = 0;

    typingInput.addEventListener("input", trackTyping);
}

function trackTyping() {
    const typedWords = typingInput.innerText.trim().split(" ");
    
    // Track each word with color feedback
    let feedback = sentenceWords.map((word, index) => {
        if (index < typedWords.length) {
            if (word === typedWords[index]) {
                return `<span class="correct">${word}</span>`; // Correct word
            } else {
                return `<span class="incorrect">${word}</span>`; // Incorrect word
            }
        } else {
            return `<span>${word}</span>`; // Words not typed yet
        }
    }).join(" ");

    wordTracker.innerHTML = feedback;

    // Update the correct word count and check for sentence completion
    correctWords = typedWords.reduce((count, word, index) =>
        count + (word === sentenceWords[index] ? 1 : 0), 0);

    if (typedWords.length === sentenceWords.length && typedWords.every((word, index) => word === sentenceWords[index])) {
        endTime = new Date().getTime();
        calculateWPM();
    }
}

function calculateWPM() {
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    const wpm = Math.round((correctWords / timeTaken) * 60);
    result.innerText = `Your typing speed is ${wpm} WPM with ${correctWords} correct words.`;
    typingInput.setAttribute("contenteditable", "false");
    startButton.disabled = false;
}

startButton.addEventListener("click", startTest);
