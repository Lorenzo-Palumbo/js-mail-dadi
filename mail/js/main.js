var emailUtente = prompt('Inserire e-mail');
var emailIscritti = ['paolino@gmail.it','franco@gmail.com','francesco@gmail.it','ilaria@libero.it'];
var emailTrovata = false;
for (var i = 0; i < emailIscritti.length; i++) {
    if (emailUtente == emailIscritti[i]){
        emailTrovata = true;
    }else {
    }
}
console.log(emailIscritti);
if (emailTrovata == true){
    document.getElementById('mail').innerHTML = 'sei presente nella lista';
}else{
    document.getElementById('mail').innerHTML = 'non sei presente nella lista';
}
