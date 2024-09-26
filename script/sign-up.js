let signUpForm = document.getElementById('sign-up')
signUpForm.addEventListener('submit',function(event){
event.preventDefault()

let email = document.getElementById('email').value.trim();
let password = document.getElementById('password').value.trim();
let arrayUsers = []
if(email && password){
    let objUsers = {
        userEmail: email,
        userPassword: password
    }

    arrayUsers.push(objUsers)
    let userDetails = JSON.stringify(arrayUsers)
    localStorage.setItem('user',userDetails)
    window.location.href = "/pages/sign-in.html"
}
})