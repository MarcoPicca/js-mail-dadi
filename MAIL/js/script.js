let userEmail = document.getElementById('userEmail');
let button = document.getElementById('button');



button.addEventListener('click', function () {
    
    
    
    let emailList = [
        'pazzaemail@gmail.com',
        'pozzaemail@gmail.com',
        'pazzoemail@gmail.com',
        'pozzoemail@gmail.com',
        'tazzaemail@gmail.com',
        'panzaemail@gmail.com',
        'mezzaemail@gmail.com',
        'mozzaemail@gmail.com',
        'cozzaemail@gmail.com',
        'pizzaemail@gmail.com',
        'puzzaemail@gmail.com',
        'pezzaemail@gmail.com',
        'razzoemail@gmail.com',
        'razziemail@gmail.com',
        'pazziemail@gmail.com',
    ];


if (!emailList.includes(userEmail)){
    alert('Accesso Negato');
} else if (emailList.includes(userEmail)) {
    alert('Benvenutissimo');
}

});