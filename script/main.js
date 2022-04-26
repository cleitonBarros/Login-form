const senha  =  document.getElementById('senha');
const view  = document.getElementById('password-view')


view.addEventListener('click',( )=>{
    if(senha.type =='password'){
        senha.type = 'text'
        view.src = '../images/eye.svg'
    }
    else if(senha.type == 'text'){
        senha.type ='password'
        view.src ='../images/eye-focus2.svg'
    }
    else return
})