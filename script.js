const emailTag = document.getElementById("inputEmailTag")
const myButton = document.getElementById("myButton")
myButton.addEventListener("click", onButtonClick)

const errorMessage = document.getElementById("error-message")
console.log(emailTag,myButton,errorMessage)

function  onButtonClick() { 

     console.log("ccc>",emailTag.value)
     let validEmail1 = false
     let validEmail2 = false
     validEmail1 = emailTag.value.includes("@")
     validEmail2 = emailTag.value.includes(".")
     if(!validEmail2 || !validEmail1){

          errorMessage.className = "error show"
          
     }
     else errorMessage.className = "error"
}