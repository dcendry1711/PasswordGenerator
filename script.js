import { characters,symbols,numbers } from "./characters.js";

const genBtn = document.getElementById('gen-pass-btn')
const pass1 = document.getElementById('pass-field1')
const pass2 = document.getElementById('pass-field2')
const inputEl = document.getElementById('password-length-input')
const copy1PassBtn = document.getElementById('copy-pass1')
const copy2PassBtn = document.getElementById('copy-pass2')
const symbolEl = document.getElementById('password-include-symbols')
const numberEl = document.getElementById('password-include-numbers')

genBtn.addEventListener('click',generatePassword)


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

function getRandomNumber(arr){
    return Math.floor(Math.random()*arr.length)
    
}

function generatePassword(){
    let password1 = ''
    let password2 = ''
    for (let i = 0; i < inputEl.value; i++){
        pass1.textContent = ''
        pass2.textContent = ''
        if(symbolEl.checked && !numberEl.checked){
            const symbolArr = [...characters,...symbols]
            const randomIndex1 = getRandomNumber(symbolArr)
            password1 += symbolArr[randomIndex1]
            const randomIndex2 = getRandomNumber(symbolArr)
            password2 += symbolArr[randomIndex2]
        } else if(numberEl.checked && !symbolEl.checked){
            const numberArr = [...characters,...numbers]
            const randomIndex1 = getRandomNumber(numberArr)
            password1 += numberArr[randomIndex1]
            const randomIndex2 = getRandomNumber(numberArr)
            password2 += numberArr[randomIndex2]
        } else if(numberEl.checked && symbolEl.checked){
            const fullArr = [...characters,...symbols,...numbers]
            const randomIndex1 = getRandomNumber(fullArr)
            password1 += fullArr[randomIndex1]
            const randomIndex2 = getRandomNumber(fullArr)
            password2 += fullArr[randomIndex2]
        } else {
            const randomIndex1 = getRandomNumber(characters)
            password1 += characters[randomIndex1]
            const randomIndex2 = getRandomNumber(characters)
            password2 += characters[randomIndex2]
        }
        pass1.textContent = password1
        pass2.textContent = password2
    }
}