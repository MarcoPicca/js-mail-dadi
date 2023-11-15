let userEmail = document.getElementById('userEmail');
let button = document.getElementById('button');



button.addEventListener('click', function () {
    
    
    
    const emailList = [
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


for (let i = 0; i < emailList.length; i++){
    if (!userEmail != emailList[i]){
        alert('yes');
    } else {
        alert('no');
    }
}

});