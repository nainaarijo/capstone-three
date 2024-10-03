let signInForm = document.getElementById('sign-in')
signInForm.addEventListener('submit', async function(e){
    e.preventDefault();

let userInputEmail = document.getElementById('email').value.trim()
let userInputPassword = document.getElementById('password').value.trim()    
let localUsers = localStorage.getItem('user')    
let users = JSON.parse(localUsers)


try {
    let userData = await fetch('https://fakestoreapi.com/users');
    let usersInfo = await userData.json()


    const inputValue = usersInfo.find(
        user => user.email === userInputEmail && user.password  === userInputPassword);


        if(inputValue){
             window.location.href = "/index.html";
        }else  {
            users.forEach(user => {
            if (user.userEmail === userInputEmail && user.userPassword === userInputPassword){
                window.location.href = "/index.html"
            }else{
                alert("Check Email & Password")
            }
            });

        }

        
} catch(error){
    console.log("error", error);
}
})


