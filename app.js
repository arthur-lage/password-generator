
function copyPassword(){
    let textToCopy = document.getElementById("password").value
    navigator.clipboard.writeText(textToCopy)
        .then(() => { alert(`Copied!`) })
        .catch((error) => { alert(`Copy failed! ${error}`) })
}

function generatePassword(){
    let passwordField = document.getElementById("password")
    let possibleCharacters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklçzxcvbnm1234567890'
    let passwordLength = 16
    let newPassword = ''
    for(i = 0; i < passwordLength; i++){
        newPassword += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
    }
    passwordField.value = newPassword
}