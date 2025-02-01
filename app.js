const max = prompt("Enter the maximum number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Enter the number");

while(true){
    if(guess=="quit"){
        console.log("you are quitting te game");
        break;
    }
    if(guess == random){
        console.log("you guessed it right");
        break;
    }
    else if(guess < random){
        guess = prompt("guess was too small! please try again");
    }
    else{
        guess = prompt("guess was too large! please try again");
    }
}
