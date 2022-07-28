//animaciones del login y signup
const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");
const enviarEmailJs = document.getElementById('enviarEmail');
const correo = document.getElementById('correo');
const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');
const iniciarSesion = document.getElementById('iniciarSesion');

if (enviarEmailJs) {
    enviarEmailJs.addEventListener('click', (e) => enviarEmailUsuario(e))
}

if (iniciarSesion) {
    iniciarSesion.addEventListener('click', (e) => loginFunc(e))
}
//
if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
    })
}

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
    })
}

if (signupLink) {
    signupLink.addEventListener('click', () => {
        signupBtn.click();
        return false;
    })
}

class NewUser {
    constructor(usuario, email, contrasenha) {
        this.usuario = usuario,
        this.email = email,
        this.contrasenha = contrasenha;
    }
}

function enviarEmailUsuario(e) {
    e.preventDefault()
    let newUser = new NewUser(usuario.value, correo.value, contraseña.value)
    localStorage.setItem(newUser.email, JSON.stringify(newUser))
    let userActivo = JSON.parse(localStorage.getItem(newUser.email))

    emailjs.init('X3M-jA1mwOa5Vqo9k')
    emailjs.send("service_gkhbj94", "template_m69w53j", {
        name: `My Secret Makeup`,
        message: `Se ha registrado en nuestra tienda. Los datos de registro son: 
        Usuario: ${userActivo.usuario}, 
        Email: ${userActivo.email}, 
        Contraseña: ${userActivo.contrasenha}`,
        to_email: `${userActivo.email}`,
        from_name: "My Secret Makeup",
    })
    .then(function() {
        Swal.fire({
            title: 'Creaste tu cuenta!',
            text: 'Bienvenid@ a My Secret Makeup.',
            imageUrl: '../img/discount1.png',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Descuento a nuevos usuarios',
        })
        setTimeout(() => window.location.href = window.location.href, 2500);
    }, function(error) {
       console.log('HA FALLADO...', error);
    });
}

//guardado login
function loginFunc(e){
    e.preventDefault()
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    const user = localStorage.getItem(email);
    const datauser = JSON.parse(user);

    if(datauser == null){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo anda mal!',
            footer: '<a href="">¿No tienes una cuenta?</a>'
        })
    } else if(email == datauser.email && pass == datauser.contrasenha){
        Swal.fire({
            icon: 'success',
            title: 'Iniciaste sesión en My Secret Makeup',
            showConfirmButton: false,
            timer: 2000,
        })
        localStorage.setItem("activo", JSON.stringify(datauser))
        setTimeout(() => location.href ="../index.html", 2000);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo anda mal!',
        })
    }
}