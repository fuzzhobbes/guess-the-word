const guessedLetters = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const letter = document.querySelector(".letter");
const appear = document.querySelector(".word-in-progress");
const guesses = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const para = document.querySelector(".message");
const hidden = document.querySelector(".play-again hide");
const word = "magnolia";

const update = function(word) {
    const placeholderLetters = [];
    for (const guess of word) {
        console.log(guess);
        placeholderLetters.push("●");
    }
    appear.innerTEXT = placeholderLetters.join("");
};

update(word);

button.addEventListener("click", function(e) {
    e.preventDefault();
     const values = letter.value;
     console.log(value)
     values.value = "";
})