let verSenha = document.querySelector('#verSenha');

verSenha.addEventListener('click', ()=>{
    let senha = document.querySelector('#loginsenha')

    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text');
    }else{
        senha.setAttribute('type', 'password');
    }
})

/*Login*/

let usuario = document.querySelector('#loginUsuario');
let senha = document.querySelector('#loginsenha');

let cadastrados = JSON.parse(localStorage.getItem('listaUser') || '[]');
let procurar = {}


function logar(){
    let usuarioVerifcado = cadastrados.find(function(item){ return (item.userCad == usuario.value)? true : false;})
    let senhaVerifcado = cadastrados.find(function(item){ return (item.senhacad == senha.value)? true : false;})
    let form = document.querySelector('#formulario')

    if(usuarioVerifcado && senhaVerifcado){
        console.log('cadastrado')
    }else{
        alert('Nome de Usuario ou senha errada')
        form.setAttribute('action', '#')
    }
}