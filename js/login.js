//animaciones del login y signup
const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");

signupBtn.onclick = () =>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
};

loginBtn.onclick = () =>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
};

signupLink.onclick = () =>{
    signupBtn.click();
    return false;
};



//signup
function signup(e){
    event.preventDefault();  

    const correo = document.getElementById('correo').value;
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    const newuser = {
        usuario: usuario,
        correo: correo,
        contraseña: contraseña,
    };

    const json = JSON.stringify(newuser);
    localStorage.setItem(usuario, json);
    console.log('usuario añadido');
    Swal.fire({
        title: 'Creaste tu cuenta!',
        text: 'Bienvenid@ a My Secret Makeup.',
        imageUrl: '../img/discount1.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Descuento a nuevos usuarios',
    })
    setTimeout(() => location.href ="../pages/login_and_signup.html", 2000);
} 



//login
function loginFunc(e){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    const user = localStorage.getItem(username);
    const datauser = JSON.parse(user);


    if(datauser == null){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo anda mal!',
            footer: '<a href="">¿No tienes una cuenta?</a>'
        })
    } else if(username == datauser.usuario && pass == datauser.contraseña){
        Swal.fire({
            icon: 'success',
            title: 'Iniciaste sesión en My Secret Makeup',
            showConfirmButton: false,
            timer: 2000,
        })
        setTimeout(() => location.href ="../index.html", 2000);
        setTimeout(() => document.getElementById('test').innerHTML=(`<p>Bienvenid@ a My Secret Makeup</p>`), 1000)
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo anda mal!',
            footer: '<a href="../pages/login_and_signup.html">¿No tienes una cuenta?</a>'
        })
    }
}