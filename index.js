const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperCase = document.getElementById("upper-case")
const lowerCase = document.getElementById("lower-case")
const numbers = document.getElementById("numbers")
const symbols= document.getElementById("symbols")

const getRandomData =(data)=>{
    return data[Math.floor(Math.random() * data.length)]
}

const getRandomPassword =(password="")=>{
    if (upperCase.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerCase.checked) {
        password += getRandomData(lowerSet)
    }
    if (numbers.checked) {
        password += getRandomData(numberSet)
    }
    if (symbols.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return getRandomPassword(password)
    }
    const trimPass = truncateString(password,totalChar.value);
    passBox.innerText =trimPass 
}

document.getElementById("btn").addEventListener("click",

function() {
    getRandomPassword()
})


function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num)
    } else {
      return str;
    }
  }