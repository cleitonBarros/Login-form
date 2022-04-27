const inputSenha  =  document.getElementById('senha');
const view  = document.getElementById('password-view')
const lock = document.getElementById('lock')
const inputEmail = document.getElementById('input-email')
const imgEmail= document.getElementById('email')

inputSenha.addEventListener('focus',()=>{
    lock.src='../images/lock-focus.svg'
},true)
inputEmail.addEventListener('focus', ()=>{
    imgEmail.src='../images/mail-focus.svg'
},true)

window.addEventListener('blur',()=>{
    lock.src='../images/lock.svg'
    imgEmail.src='../images/mail.svg'
},true)

view.addEventListener('click',( )=>{
    if(inputSenha.type =='password'){
        inputSenha.type = 'text'
        view.src = '../images/eye.svg'

    }
    else if( inputSenha.type == 'text'){
        inputSenha.type ='password'
        view.src ='../images/eye-focus2.svg'
    }
    else return
})