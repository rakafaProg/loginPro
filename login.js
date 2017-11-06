
let p;
let pasInput = document.getElementById('passInput');

document.getElementById('btnSend').addEventListener('click', btnClicked);

function btnClicked() {
    if (cookiesModule().getCookie('pass')) {
        cookiesModule().setCookie('pass', md5(pasInput.value));
        p = password(md5(pasInput.value));
    } else
        p = password(cookiesModule().getCookie('pass'));
    
    if(p(pasInput.value))
        alert('good');
    else
        alert('bad!!');
    
}