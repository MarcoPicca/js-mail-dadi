let userEmail = document.getElementById('user');
let button = document.getElementById('button');



button.addEventListener('click', function () {
    
    
    
    const emailList = [
        'pazzaemail@gmail.com',
        'pozzaemail@gmail.com',
        'pazzoemail@gmail.com',
        'pozzoemail@gmail.com',
        'tazzaemail@gmail.com',
    ];

    // su stackoverflow ho trovato quest idea
    //  di dare una condizione iniziale (in questo caso falso) ad un elemento che,
    //  posto in condizione vera quando il valore dell'utente è uguale ad un elemento dell'array,
    //  fuori dal ciclo può essere richiamato per generare la regola degli alert. 
    //  Prima di questo metodo ho trovato includes, che comunque non funzionava, ma sembrava più semplice e veloce.
    //  Non capisco perchè se metto else dopo l'if iniziale non legge le condizioni in funzione della loro risoluzione.
    // Ps. non ho capito ancora come stampare con innerHTML
     


    let speroSiaCosì = false;

    for (let i = 0; i < emailList.length; i++){
            if ( userEmail.value === emailList[i] ){
                speroSiaCosì = true
                break;
            }
        }
        if (speroSiaCosì) {
            alert('yes');
        } else {
            alert('no');
        }

}
);