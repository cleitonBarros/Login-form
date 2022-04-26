const senha  =  document.getElementById('senha');
const view  = document.getElementById('seePassword')


view.addEventListener('click',( )=>{
    if(senha.type =='password'){
        senha.type = 'text'
        view.src = '../images/eye.svg'
    }
    else if(senha.type == 'text'){
        senha.type ='password'
        view.src ='../images/eye-focus.svg'
    }
    else return
})