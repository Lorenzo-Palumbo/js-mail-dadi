var numeroPersona = Math.round(Math.random() * 10);
var numeroPc = Math.round(Math.random());
console.log(numeroPersona);
console.log(numeroPc);
if (numeroPersona > numeroPc) {
    document.getElementById('risultato').innerHTML = 'Il tuo numero è ' + numeroPersona + ' quello del pc ' + numeroPc + ' quindi il tuo è superiore'
    //console.log('Il tuo numero è' + numeroPersona + 'quindi è superiore');
} else if (numeroPersona == numeroPc){
    document.getElementById('risultato').innerHTML = 'Il tuo numero è ' + numeroPersona + ' quello del pc ' + numeroPc + ' quindi sono uguali'
    //console.log('Il tuo numero è' + numeroPersona + 'quindi è uguale');
}else{
    document.getElementById('risultato').innerHTML = 'Il tuo numero è ' + numeroPersona + ' quello del pc ' + numeroPc + ' quindi il tuo è inferiore'
    //console.log('Il tuo numero è' + numeroPersona + 'quindi è inferiore');
}
