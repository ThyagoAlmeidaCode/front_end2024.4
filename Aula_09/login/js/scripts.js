/* Caputurar dados do formulario */

document.getElementById('loginForm').addEventListener('submit',function(event){
    /* aqui paramos o formulario */
    event.preventDefault();

    /* Guardar o usuario e a senha */
    var usuario = document.getElementById('user').value;
    var senha = document.getElementById('password').value;

    /* Exibe no console do navegador as informações capturadas no formulario */
    console.log("Seu usuario é: " + usuario + "  " + "Sua senha é: " + senha);
})