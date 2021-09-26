const homepage = document.querySelector(".homepage");
const edit = document.querySelector(".edit");
const list = document.querySelector(".list");
const login = document.querySelector(".login");
const buttonLogIn = document.querySelector(".button");

const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");

const mainContainer = document.querySelector(".main");

var loggedIn = false;

class Login {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

const Joker = new Login("fake@fake.com", "fake");

buttonLogIn.addEventListener("click", function LogIn (e) {
    e.preventDefault();

    let inputEmailValue = inputEmail.value;
    let inputPasswordValue = inputPassword.value;

    if (Joker.email === inputEmailValue && Joker.password === inputPasswordValue) {
        mainContainer.innerHTML = "<h3>Welcome home Joker</h3><br><br><input type='button' class='redirect' value='Press me'>";
        loggedIn = true;

        if (loggedIn === true) {
            const redirect = document.querySelector(".redirect");
        
            redirect.addEventListener("click", function redirectTrue () {
                window.location = "../html/edit.html";
            })
        }
        
    }
})



