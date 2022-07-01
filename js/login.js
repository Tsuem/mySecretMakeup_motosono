const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");

signupBtn.onclick = (() =>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (() =>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (() =>{
    signupBtn.click();
    return false;
});




//signup
function signup(e){
    event.preventDefault();  

    const correo = document.getElementById('correo').value;
    const contrasenha = document.getElementById('contrasenha').value;

    const user = {
        correo: correo,
        contrasenha: contrasenha,
    };

    const json = JSON.stringify(user);
    localStorage.setItem(correo, json);
    console.log('usuario añadido');
} 




//login
function loginFunc(e){
    event.preventDefault();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const result = document.getElementById('result');

    const user = localStorage.getItem(email);
    const data = JSON.parse(user);
    console.log(data);

    if(user == null || pass == null){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo anda mal!',
            footer: '<a href="">¿No tienes una cuenta?</a>'
          })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido a My Secret Makeup',
            showConfirmButton: false,
            timer: 1900
          })
    }
}
