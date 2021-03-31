let passwordText = document.getElementById("password") 

function copyPassword(){
    passwordText.select()
    passwordText.setSelectRange(0, 99999);
    document.execCommand("copy")
}

function generatePassword(){

}