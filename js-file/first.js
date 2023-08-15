//step-1: add click event handler in the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
        //    step-2: get the email address and get the password in this button section
// note: always remember to use (.value) to get text from an input field
const getEmail = document.getElementById('user-email')
const email = getEmail.value
// note: sumbit button e click korar por input filed er value shoriye nite nicher kaj ta kora lage(.value = "")
getEmail.value = ''
//  get password
const getpassword = document.getElementById('user-password')
const password = getpassword.value
getpassword.value = ""

// do not verify email or password ( on this kind of process system).
//  amra ekhon first dekhe ebhabe korchi
if (email === "arfan@gmail.com" && password === "152272") {
   window.location.href = "bank.html"
}else{
   alert("invalid user")
}
})