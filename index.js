const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")


function getPassword() {
  let password1 = ""
  let password2 = ""
  let passwordLength = 15
  
  for (let i = 0; i < passwordLength; ++i) {
    const randomIndex1 = Math.floor(Math.random() * characters.length)
    const randomIndex2 = Math.floor(Math.random() * characters.length)
    password1 += characters[randomIndex1]
    password2 += characters[randomIndex2]
  }
    passwordOne.value = password1
    passwordTwo.value = password2
    
}   




