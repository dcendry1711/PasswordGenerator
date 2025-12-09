import { characters } from "./characters.js";

const genBtn = document.getElementById('gen-pass-btn')
const pass1 = document.getElementById('pass-field1')
const pass2 = document.getElementById('pass-field2')

genBtn.addEventListener('click',generatePassword)

function generatePassword(){

    let password1 = ''
    let password2 = ''

    for (let i = 0; i < 15; i++){
        const randomIndex = Math.floor(Math.random()*characters.length)
        password1 += characters[randomIndex]
    }

    for (let i = 0; i < 15; i++){
        const randomIndex = Math.floor(Math.random()*characters.length)
        password2 += characters[randomIndex]
    }

    pass1.textContent = password1
    pass2.textContent = password2
}