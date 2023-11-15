let userNumber = document.querySelector('user');
let machineNumber = document.querySelector('machine');



userNumber = Math.round(Math.random() * 5) + 1;
machineNumber = Math.round(Math.random() * 5) + 1;



let winner = [];

if (userNumber > machineNumber) {
    winner.push('USER WIN!');
} else if (userNumber < machineNumber){
    winner.push('MaChInE WiN!');
} else { 
    winner.push('same');
}



console.log(winner);
