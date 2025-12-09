import { characters } from "./characters.js";

const genBtn = document.getElementById('gen-pass-btn')
const pass1 = document.getElementById('pass-field1')
const pass2 = document.getElementById('pass-field2')
const inputEl = document.getElementById('password-length-input')
const copy1PassBtn = document.getElementById('copy-pass1')
const copy2PassBtn = document.getElementById('copy-pass2')

genBtn.addEventListener('click',generatePassword)

function generatePassword(){

    let password1 = ''
    let password2 = ''

    for (let i = 0; i < inputEl.value; i++){
        const randomIndex = Math.floor(Math.random()*characters.length)
        password1 += characters[randomIndex]
    }

    for (let i = 0; i < inputEl.value; i++){
        const randomIndex = Math.floor(Math.random()*characters.length)
        password2 += characters[randomIndex]
    }

    pass1.textContent = password1
    pass2.textContent = password2
}

copy1PassBtn.addEventListener('click', ()=>{
    const pass1ToCopy = pass1.textContent
    navigator.clipboard.writeText(pass1ToCopy)
        .then(()=>{
            copy1PassBtn.textContent = 'Copied to clipboard'
        })
        .catch(err => {
            pass1.textContent = 'Error, chceck console'
            console.log(err)
        })
})

copy2PassBtn.addEventListener('click', ()=>{
    const pass2ToCopy = pass2.textContent
    navigator.clipboard.writeText(pass2ToCopy)
        .then(()=>{
            copy2PassBtn.textContent = 'Copied to clipboard'
        })
        .catch(err => {
            pass2.textContent = 'Error, chceck console'
            console.log(err)
        })
})